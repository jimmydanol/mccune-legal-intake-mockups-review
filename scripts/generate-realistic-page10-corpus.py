#!/usr/bin/env python3
"""Generate a synthetic, non-uniform Page 10 intake corpus.

The corpus intentionally mixes official-looking PDFs, flat scans, and imperfect
phone photographs. Every identity and identifier is synthetic, while the
manifest preserves exact field-level ground truth for repeatable scoring.
"""

from __future__ import annotations

import argparse
import json
import math
import random
import shutil
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, landscape
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


PROFILES = [
    {"name": "Amara Nwosu", "address": "1847 Juniper Way", "city": "Aurora", "state": "CO", "zip": "80012", "ssn": "901-11-1201"},
    {"name": "Miguel Ochoa-Santos", "address": "62 Mesa View Road", "city": "Pueblo", "state": "CO", "zip": "81003", "ssn": "902-22-2302"},
    {"name": "Priya Shah", "address": "9098 Winding Creek Lane", "city": "Lakewood", "state": "CO", "zip": "80226", "ssn": "903-33-3403"},
    {"name": "Naomi Brooks", "address": "412 South Grant Street Apt 6", "city": "Denver", "state": "CO", "zip": "80209", "ssn": "904-44-4504"},
    {"name": "Caleb Jensen", "address": "778 Prairie Rose Court", "city": "Fort Collins", "state": "CO", "zip": "80525", "ssn": "905-55-5605"},
    {"name": "Linh Tran", "address": "2409 Copper Ridge Drive", "city": "Thornton", "state": "CO", "zip": "80229", "ssn": "906-66-6706"},
    {"name": "Omar Al-Hassan", "address": "15 Cottonwood Place", "city": "Boulder", "state": "CO", "zip": "80302", "ssn": "907-77-7807"},
    {"name": "Sofia Martinez-Ruiz", "address": "330 East 11th Avenue Unit 4", "city": "Denver", "state": "CO", "zip": "80203", "ssn": "908-88-8908"},
    {"name": "Everett Nguyen", "address": "104 Aspen Loop", "city": "Greeley", "state": "CO", "zip": "80631", "ssn": "909-12-9009"},
    {"name": "Dana O'Connor", "address": "5580 Blue Heron Circle", "city": "Arvada", "state": "CO", "zip": "80002", "ssn": "910-23-0110"},
]


ASSIGNMENTS = [
    (0, ["driver-license", "w2", "bank-statement"]),
    (1, ["pay-stub", "1099", "bank-statement"]),
    (2, ["tax-return", "mortgage-statement", "property-valuation"]),
    (3, ["other-income-proof", "bank-statement", "debt-notice"]),
    (4, ["vehicle-title", "vehicle-valuation", "pay-stub"]),
    (5, ["investment-statement", "foreclosure-repossession", "mortgage-statement"]),
    (6, ["court-document", "counseling-certificate", "1099"]),
    (7, ["social-security-card", "pay-stub", "debt-notice"]),
    (8, ["tax-return", "other-income-proof", "investment-statement"]),
    (9, ["property-valuation", "vehicle-title", "other-document"]),
]


ISSUERS = [
    "Front Range Medical Partners",
    "Mesa Verde Logistics LLC",
    "Clearwater Community Schools",
    "Union Market Cooperative",
    "High Plains Fabrication Inc.",
    "Pine & Stone Hospitality Group",
    "Red Canyon Design Studio",
    "Mountain View Home Services",
    "North Fork Distribution",
    "Blue Heron Analytics LLC",
]


def money(value: float) -> str:
    return f"${value:,.2f}"


def iso_date(month: int, day: int, year: int = 2026) -> tuple[str, str]:
    return f"{month:02d}/{day:02d}/{year}", f"{year:04d}-{month:02d}-{day:02d}"


def wrap_text(text: str, font: str, size: float, width: float) -> list[str]:
    words = str(text).split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if current and stringWidth(candidate, font, size) > width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines or [""]


def doc_spec(kind: str, profile: dict[str, str], index: int) -> dict:
    name = profile["name"]
    employer = ISSUERS[index]
    gross = 1840.25 + (index * 137.40)
    net = round(gross * 0.782, 2)
    year_income = 43800 + (index * 2875)
    account_last4 = f"{4100 + index * 83:04d}"[-4:]
    doc_date, doc_date_iso = iso_date(6, 18 + (index % 9))
    rows: list[tuple[str, str]] = []
    expected: dict[str, object] = {}
    details: list[str] = []
    title = ""
    subtitle = ""

    if kind == "driver-license":
        title, subtitle = "COLORADO DRIVER LICENSE", "IDENTIFICATION CARD - NOT FOR GOVERNMENT USE"
        rows = [("Full legal name", name), ("DOB", f"0{index % 9 + 1}/1{index % 8 + 1}/198{index % 9}"), ("Address", profile["address"]), ("City", profile["city"]), ("State", profile["state"]), ("ZIP", profile["zip"])]
        expected = {"fullName": name, "dateOfBirth": f"198{index % 9}-0{index % 9 + 1}-1{index % 8 + 1}", "streetAddress": profile["address"], "city": profile["city"], "state": profile["state"], "zipCode": profile["zip"]}
        details = ["Class R", "Restrictions NONE", "Organ donor", "Expires 07/18/2031"]
    elif kind == "social-security-card":
        title, subtitle = "SOCIAL SECURITY ADMINISTRATION", "SOCIAL SECURITY CARD"
        rows = [("Social Security Number", profile["ssn"]), ("Name on card", name.upper())]
        expected = {"fullName": name.upper(), "ssnLast4": profile["ssn"][-4:]}
        details = ["VALID FOR WORK ONLY WITH DHS AUTHORIZATION", "SIGNATURE ON FILE", "U.S. CITIZEN"]
    elif kind == "pay-stub":
        pay_date, pay_iso = iso_date(7, 5 + index)
        start_date, start_iso = iso_date(6, 16 + index)
        end_date, end_iso = iso_date(6, 30)
        ytd = round(gross * (12 + index), 2)
        rows = [("Employee name", name), ("Employer name", employer), ("Pay date", pay_date), ("Period start", start_date), ("Period end", end_date), ("Pay frequency", "Biweekly"), ("Current gross pay", money(gross)), ("Current net pay", money(net)), ("Year-to-date gross pay", money(ytd))]
        expected = {"employeeName": name, "employerName": employer, "payDate": pay_iso, "periodStart": start_iso, "periodEnd": end_iso, "payFrequency": "Biweekly", "grossPay": gross, "netPay": net, "ytdGross": ytd}
        details = ["REGULAR 80.00 HOURS", "Federal withholding 214.37", "State withholding 72.10", "Medical 88.50", "Direct deposit account ending 9921"]
        title, subtitle = "EARNINGS STATEMENT", "PAYROLL ADVICE - CURRENT AND YEAR TO DATE"
    elif kind == "other-income-proof":
        amount = 1185.50 + index * 42
        rows = [("Recipient name", name), ("Income source", "Colorado Benefits Administration" if index % 2 else "Alpine Pension Trust"), ("Benefit type", "Disability benefits" if index % 2 else "Retirement benefit"), ("Statement date", doc_date), ("Gross amount", money(amount)), ("Payment frequency", "Monthly")]
        expected = {"recipientName": name, "sourceName": rows[1][1], "incomeType": rows[2][1], "statementDate": doc_date_iso, "grossAmount": amount, "frequency": "Monthly"}
        details = ["This letter verifies the benefit currently scheduled for payment.", "Deductions shown on the payment record are not included in the gross amount above."]
        title, subtitle = "BENEFIT VERIFICATION LETTER", "INCOME AND PAYMENT SUMMARY"
    elif kind == "tax-return":
        taxable = year_income - 13850
        total_tax = round(taxable * 0.118, 2)
        refund = 625 + index * 31
        rows = [("Tax year", "2025"), ("Taxpayer name", name), ("Filing status", "Single" if index % 2 else "Head of household"), ("Home address", profile["address"]), ("State", profile["state"]), ("1z Wages, salaries, tips", money(year_income)), ("9 Total income", money(year_income + 950)), ("11 Adjusted gross income", money(year_income + 950)), ("15 Taxable income", money(taxable)), ("24 Total tax", money(total_tax)), ("35a Refund", money(refund))]
        expected = {"taxYear": "2025", "taxpayerName": name, "filingStatus": rows[2][1], "address": profile["address"], "state": profile["state"], "wages": year_income, "totalIncome": year_income + 950, "adjustedGrossIncome": year_income + 950, "taxableIncome": taxable, "totalTax": total_tax, "refund": refund}
        details = ["Form 1040 U.S. Individual Income Tax Return", "Presidential election campaign", "Standard deduction elected", "Occupation: operations specialist"]
        title, subtitle = "FORM 1040", "U.S. INDIVIDUAL INCOME TAX RETURN - 2025"
    elif kind == "w2":
        fed = round(year_income * 0.091, 2)
        ss_tax = round(year_income * 0.062, 2)
        med_tax = round(year_income * 0.0145, 2)
        rows = [("c Employer's name, address, and ZIP code", employer), ("e/f Employee's name, address, and ZIP code", name), ("1 Wages, tips, other compensation", money(year_income)), ("2 Federal income tax withheld", money(fed)), ("3 Social security wages", money(year_income)), ("4 Social security tax withheld", money(ss_tax)), ("5 Medicare wages and tips", money(year_income)), ("6 Medicare tax withheld", money(med_tax))]
        expected = {"taxYear": "2025", "employeeName": name, "employerName": employer, "wages": year_income, "federalTaxWithheld": fed, "socialSecurityWages": year_income, "socialSecurityTaxWithheld": ss_tax, "medicareWages": year_income, "medicareTaxWithheld": med_tax}
        details = ["W-2 Copy C - for employee records", f"Employee address {profile['address']}", f"{profile['city']}, {profile['state']} {profile['zip']}", "Employer FED ID 84-0001020"]
        title, subtitle = "2025 FORM W-2", "WAGE AND TAX STATEMENT"
    elif kind == "1099":
        compensation = 6800 + index * 525
        withheld = round(compensation * 0.08, 2)
        payer = f"{employer} Contractor Payments"
        rows = [("1099 type", "1099-NEC"), ("Payer name", payer), ("Recipient name", name), ("Tax year", "2025"), ("Recipient TIN", profile["ssn"]), ("Box 1 nonemployee compensation", money(compensation)), ("Federal income tax withheld", money(withheld))]
        expected = {"formType": "1099-NEC", "payerName": payer, "recipientName": name, "taxYear": "2025", "recipientTinLast4": profile["ssn"][-4:], "nonemployeeCompensation": compensation, "federalTaxWithheld": withheld}
        details = ["RECIPIENT'S COPY", "OMB No. 1545-0116", "Account number ending 4412"]
        title, subtitle = "FORM 1099-NEC", "NONEMPLOYEE COMPENSATION - 2025"
    elif kind == "bank-statement":
        opening = 1325.42 + index * 211
        deposits = 2980.00 + index * 115
        withdrawals = 2144.83 + index * 97
        ending = round(opening + deposits - withdrawals, 2)
        institution = ["Pioneer Community Bank", "Canyon View Credit Union", "Union Peak Bank"][index % 3]
        rows = [("Financial institution", institution), ("Account owner", name), ("Account ending", f"XXXX-{account_last4}"), ("Account type", "Everyday Checking"), ("Statement start date", "06/01/2026"), ("Statement end date", "06/30/2026"), ("Beginning balance", money(opening)), ("Deposits and credits", money(deposits)), ("Withdrawals and debits", money(withdrawals)), ("Ending balance", money(ending))]
        expected = {"institutionName": institution, "accountOwner": name, "accountNumberLast4": account_last4, "accountType": "Everyday Checking", "statementStartDate": "2026-06-01", "statementEndDate": "2026-06-30", "beginningBalance": opening, "totalDeposits": deposits, "totalWithdrawals": withdrawals, "endingBalance": ending}
        details = ["06/03 ACH PAYROLL CREDIT +1,490.00", "06/05 RENT PAYMENT -1,375.00", "06/12 GROCERY MARKET -126.48", "06/18 UTILITY AUTOPAY -94.67", "06/27 MOBILE DEPOSIT +245.00"]
        title, subtitle = "MONTHLY ACCOUNT STATEMENT", "ACCOUNT SUMMARY AND TRANSACTION ACTIVITY"
    elif kind == "property-valuation":
        value = 338000 + index * 16750
        assessed = round(value * 0.215, 2)
        parcel = f"04-{index + 11:03d}-{78210 + index}"
        rows = [("Property address", f"{profile['address']}, {profile['city']}, {profile['state']} {profile['zip']}"), ("Owner name", name), ("Assessment year", "2026"), ("As of date", doc_date), ("Estimated market value", money(value)), ("Assessed value", money(assessed)), ("Parcel number", parcel), ("Valuation source", "County Assessor Records")]
        expected = {"propertyAddress": rows[0][1], "ownerName": name, "assessmentYear": "2026", "valuationDate": doc_date_iso, "estimatedValue": value, "assessedValue": assessed, "parcelNumber": parcel, "sourceName": "County Assessor Records"}
        details = ["Residential real property", "Land value and improvements are combined", "This notice is not a bill."]
        title, subtitle = "NOTICE OF PROPERTY VALUATION", "COUNTY ASSESSOR - 2026 REASSESSMENT"
    elif kind == "vehicle-valuation":
        estimate = 12400 + index * 930
        mileage = 34400 + index * 2800
        rows = [("Vehicle year", "2020"), ("Vehicle make", "Subaru"), ("Vehicle model", "Outback Premium"), ("VIN last four", f"{6400 + index}"), ("Odometer", f"{mileage:,}"), ("Vehicle condition", "Good"), ("As of date", doc_date), ("Estimated vehicle value", money(estimate)), ("Valuation source", "Regional Market Guide")]
        expected = {"year": "2020", "make": "Subaru", "model": "Outback Premium", "vinLast4": str(6400 + index), "mileage": mileage, "condition": "Good", "valuationDate": doc_date_iso, "estimatedValue": estimate, "sourceName": "Regional Market Guide"}
        details = ["Private-party range 11,600 - 13,200", "Mileage adjustment applied", "No mechanical inspection performed"]
        title, subtitle = "VEHICLE VALUATION REPORT", "MARKET VALUE ESTIMATE"
    elif kind == "investment-statement":
        ending = 28340.75 + index * 4610
        vested = round(ending * 0.91, 2)
        institution = "Continental Retirement Services" if index % 2 else "Summit Brokerage Network"
        rows = [("Financial institution", institution), ("Account owner", name), ("Plan type", "401(k)" if index % 2 else "Traditional IRA"), ("Account ending", f"XX{account_last4}"), ("Period start", "04/01/2026"), ("Period end", "06/30/2026"), ("Ending account value", money(ending)), ("Vested balance", money(vested))]
        expected = {"institutionName": institution, "accountOwner": name, "accountType": rows[2][1], "accountNumberLast4": account_last4, "statementStartDate": "2026-04-01", "statementEndDate": "2026-06-30", "endingValue": ending, "vestedValue": vested}
        details = ["Beginning value 24,910.20", "Employee contributions 1,250.00", "Market change 2,180.55", "Administrative fee -18.00"]
        title, subtitle = "RETIREMENT STATEMENT", "QUARTERLY ACCOUNT SUMMARY"
    elif kind == "debt-notice":
        balance = 2950.44 + index * 318
        creditor = "Northstar Recovery Services" if index % 2 else "Pioneer Card Services"
        rows = [("Creditor name", creditor), ("Consumer name", name), ("Debt type", "Credit card"), ("Account ending", f"****{account_last4}"), ("Notice date", doc_date), ("Balance owed", money(balance)), ("Minimum amount due", money(round(balance * 0.035, 2))), ("Past due", money(round(balance * 0.12, 2))), ("APR", "21.49%")]
        expected = {"creditorName": creditor, "debtorName": name, "debtType": "Credit card", "accountNumberLast4": account_last4, "statementDate": doc_date_iso, "balanceOwed": balance, "minimumPayment": round(balance * 0.035, 2), "pastDueAmount": round(balance * 0.12, 2), "interestRate": "21.49%"}
        details = ["This communication is from a debt collector.", "You have rights to dispute all or part of this debt.", "Payments received after the notice date may not appear."]
        title, subtitle = "DEBT COLLECTION NOTICE", "ACCOUNT VALIDATION AND PAYMENT SUMMARY"
    elif kind == "mortgage-statement":
        principal = 214500 + index * 8850
        payment = 1575.25 + index * 41
        rows = [("Loan servicer", "Mesa Home Loan Servicing"), ("Borrower name", name), ("Property address", f"{profile['address']} {profile['city']} {profile['state']} {profile['zip']}"), ("Loan number", f"000090{account_last4}"), ("Statement date", doc_date), ("Outstanding principal balance", money(principal)), ("Payment due", money(payment)), ("Escrow balance", money(1860 + index * 110)), ("Past due amount", money(0))]
        expected = {"servicerName": "Mesa Home Loan Servicing", "borrowerName": name, "propertyAddress": rows[2][1], "loanNumberLast4": account_last4, "statementDate": doc_date_iso, "principalBalance": principal, "monthlyPayment": payment, "escrowBalance": 1860 + index * 110, "pastDueAmount": 0}
        details = ["Principal 642.80", "Interest 691.24", "Escrow 241.21", "Payment due date 07/01/2026"]
        title, subtitle = "MORTGAGE STATEMENT", "PAYMENT AND LOAN ACTIVITY"
    elif kind == "foreclosure-repossession":
        amount = 7350 + index * 640
        rows = [("Action type", "Foreclosure"), ("Servicer name", "Mesa Home Loan Servicing"), ("Borrower name", name), ("Property address", f"{profile['address']} {profile['city']} {profile['state']} {profile['zip']}"), ("Notice date", "06/22/2026"), ("Cure deadline", "08/05/2026"), ("Sale date", "09/14/2026"), ("Amount to cure", money(amount))]
        expected = {"actionType": "Foreclosure", "creditorName": "Mesa Home Loan Servicing", "debtorName": name, "collateral": rows[3][1], "noticeDate": "2026-06-22", "responseDeadline": "2026-08-05", "scheduledSaleDate": "2026-09-14", "amountToCure": amount}
        details = ["NOTICE OF DEFAULT", "FORECLOSURE SALE MAY OCCUR", "Contact the servicer for a current reinstatement quote."]
        title, subtitle = "NOTICE OF DEFAULT AND FORECLOSURE SALE", "IMPORTANT LEGAL NOTICE"
    elif kind == "vehicle-title":
        vin = f"1FA6P8TH{index + 10:02d}G{420000 + index:06d}"[:17]
        title_no = f"CO-26-{840000 + index}"
        rows = [("Registered owner", name), ("Vehicle identification number", vin), ("Vehicle year", "2019"), ("Vehicle make", "Ford"), ("Vehicle model", "Escape"), ("Title number", title_no), ("Lienholder", "Canyon View Credit Union")]
        expected = {"ownerName": name, "vin": vin, "year": "2019", "make": "Ford", "model": "Escape", "titleNumber": title_no, "lienholder": "Canyon View Credit Union"}
        details = ["ACTUAL MILEAGE", "BODY TYPE 4D", "COLOR SILVER", "Issue date 03/19/2023"]
        title, subtitle = "STATE OF COLORADO CERTIFICATE OF TITLE", "MOTOR VEHICLE OWNERSHIP RECORD"
    elif kind == "court-document":
        case = f"2026CV0{12000 + index}"
        rows = [("Court name", "Boulder County District Court"), ("Case number", case), ("Document title", "Summons and Complaint"), ("Plaintiff", "Pioneer Card Services"), ("Defendant", name), ("Filing date", "06/25/2026"), ("Answer deadline", "08/10/2026"), ("Amount claimed", money(4860 + index * 115))]
        expected = {"courtName": "Boulder County District Court", "caseNumber": case, "documentTitle": "Summons and Complaint", "plaintiff": "Pioneer Card Services", "defendant": name, "filingDate": "2026-06-25", "responseDeadline": "2026-08-10", "claimedAmount": 4860 + index * 115}
        details = ["DISTRICT COURT, COUNTY OF BOULDER, STATE OF COLORADO", "You are required to file a written answer.", "This document does not calculate any deadline not printed above."]
        title, subtitle = "DISTRICT COURT SUMMONS", "CIVIL ACTION - RESPONSE REQUIRED"
    elif kind == "counseling-certificate":
        cert = f"CO-2026-{7300 + index}"
        rows = [("Participant name", name), ("Agency name", "Clear Path Credit Counseling"), ("Date completed", "07/20/2026"), ("Certificate ID", cert), ("Course type", "Internet briefing")]
        expected = {"debtorName": name, "providerName": "Clear Path Credit Counseling", "completionDate": "2026-07-20", "certificateNumber": cert, "courseType": "Internet briefing"}
        details = ["PRE-BANKRUPTCY CREDIT COUNSELING", "The participant completed the required individual briefing.", "Provider approval is subject to U.S. Trustee records."]
        title, subtitle = "CERTIFICATE OF COUNSELING", "PRE-BANKRUPTCY CREDIT COUNSELING"
    elif kind == "other-document":
        amount = 146.38 + index * 7
        rows = [("Document title", "Residential Utility Bill"), ("Issuer name", "Front Range Energy Cooperative"), ("Customer name", name), ("Statement date", doc_date), ("Amount due", money(amount)), ("Account number", f"XXXXXX{account_last4}")]
        expected = {"documentTitle": "Residential Utility Bill", "issuerName": "Front Range Energy Cooperative", "personName": name, "documentDate": doc_date_iso, "amount": amount, "referenceLast4": account_last4}
        details = ["Electric service 612 kWh", "Natural gas service 38 therms", "Due date 07/12/2026"]
        title, subtitle = "MONTHLY UTILITY BILL", "SERVICE AND PAYMENT SUMMARY"
    else:
        raise ValueError(f"Unsupported kind: {kind}")

    return {"title": title, "subtitle": subtitle, "rows": rows, "expected": expected, "details": details}


def render_pdf(path: Path, profile: dict[str, str], kind: str, spec: dict, variant: int) -> None:
    card = kind in {"driver-license", "social-security-card"}
    page_size = landscape((243, 153)) if card else letter
    width, height = page_size
    c = canvas.Canvas(str(path), pagesize=page_size, pageCompression=1)
    accent = [colors.HexColor("#24536A"), colors.HexColor("#7A3E2F"), colors.HexColor("#3E6259"), colors.HexColor("#5C4B79")][variant % 4]
    c.setFillColor(colors.HexColor("#F8F7F3"))
    c.rect(0, 0, width, height, fill=1, stroke=0)
    c.setFillColor(accent)
    c.rect(0, height - (34 if card else 76), width, (34 if card else 76), fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 9 if card else 22)
    c.drawString(14 if card else 38, height - (20 if card else 42), spec["title"])
    c.setFont("Helvetica", 4.8 if card else 8.5)
    c.drawString(14 if card else 40, height - (29 if card else 60), spec["subtitle"])

    if card:
        y = height - 47
        for idx, (label, value) in enumerate(spec["rows"]):
            column = 0 if idx < math.ceil(len(spec["rows"]) / 2) else 1
            local = idx if column == 0 else idx - math.ceil(len(spec["rows"]) / 2)
            x = 15 + column * 115
            yy = y - local * 24
            c.setFillColor(colors.HexColor("#56616A"))
            c.setFont("Helvetica-Bold", 4.5)
            c.drawString(x, yy, label.upper())
            c.setFillColor(colors.HexColor("#111820"))
            c.setFont("Helvetica-Bold", 7)
            c.drawString(x, yy - 9, value[:28])
        c.setFillColor(colors.HexColor("#D8E3E8"))
        c.circle(width - 27, 26, 17, fill=1, stroke=0)
        c.setFillColor(colors.HexColor("#344A55"))
        c.setFont("Helvetica-Bold", 5)
        c.drawCentredString(width - 27, 24, "PHOTO")
        c.setFillColor(colors.HexColor("#4D5960"))
        c.setFont("Helvetica", 3.8)
        c.drawString(14, 7, " | ".join(spec["details"])[:92])
    else:
        c.setFillColor(colors.HexColor("#1E2933"))
        c.setFont("Helvetica-Bold", 10)
        c.drawString(40, height - 100, profile["name"])
        c.setFont("Helvetica", 8)
        c.drawString(40, height - 113, profile["address"])
        c.drawString(40, height - 124, f"{profile['city']}, {profile['state']} {profile['zip']}")
        c.setFillColor(colors.HexColor("#65727C"))
        c.drawRightString(width - 40, height - 100, f"Document ref {variant + 1:02d}-{kind[:4].upper()}-26")
        c.drawRightString(width - 40, height - 113, "Prepared 07/24/2026")

        y = height - 154
        layout = variant % 3
        if layout == 0:
            box_w = (width - 90) / 2
            for idx, (label, value) in enumerate(spec["rows"]):
                col = idx % 2
                row = idx // 2
                x = 40 + col * (box_w + 10)
                yy = y - row * 50
                c.setStrokeColor(colors.HexColor("#C9CED2"))
                c.setFillColor(colors.white)
                c.roundRect(x, yy - 37, box_w, 39, 4, fill=1, stroke=1)
                c.setFillColor(colors.HexColor("#5A6872"))
                c.setFont("Helvetica-Bold", 6.5)
                c.drawString(x + 8, yy - 11, label.upper())
                c.setFillColor(colors.HexColor("#18232C"))
                c.setFont("Helvetica-Bold", 9)
                lines = wrap_text(value, "Helvetica-Bold", 9, box_w - 16)[:2]
                for li, line in enumerate(lines):
                    c.drawString(x + 8, yy - 25 - li * 10, line)
            y -= math.ceil(len(spec["rows"]) / 2) * 50 + 10
        elif layout == 1:
            for idx, (label, value) in enumerate(spec["rows"]):
                yy = y - idx * 28
                c.setFillColor(colors.HexColor("#EEF1F2") if idx % 2 == 0 else colors.white)
                c.rect(40, yy - 20, width - 80, 24, fill=1, stroke=0)
                c.setFillColor(colors.HexColor("#3E4A52"))
                c.setFont("Helvetica-Bold", 7.5)
                c.drawString(48, yy - 11, label)
                c.setFillColor(colors.HexColor("#111820"))
                c.setFont("Helvetica", 9)
                c.drawString(245, yy - 11, value[:56])
            y -= len(spec["rows"]) * 28 + 10
        else:
            box_w = (width - 100) / 3
            for idx, (label, value) in enumerate(spec["rows"]):
                col = idx % 3
                row = idx // 3
                x = 40 + col * (box_w + 10)
                yy = y - row * 60
                c.setFillColor(colors.HexColor("#5D6C75"))
                c.setFont("Helvetica-Bold", 6)
                c.drawString(x, yy, label.upper())
                c.setFillColor(colors.HexColor("#172129"))
                c.setFont("Helvetica-Bold", 8.5)
                for li, line in enumerate(wrap_text(value, "Helvetica-Bold", 8.5, box_w)[:2]):
                    c.drawString(x, yy - 14 - li * 10, line)
                c.setStrokeColor(colors.HexColor("#D8DCDD"))
                c.line(x, yy - 37, x + box_w, yy - 37)
            y -= math.ceil(len(spec["rows"]) / 3) * 60 + 10

        y = max(86, y)
        c.setFillColor(accent)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(40, y, "ADDITIONAL DOCUMENT DETAIL")
        c.setFillColor(colors.HexColor("#303A42"))
        c.setFont("Courier", 7.2)
        for idx, detail in enumerate(spec["details"][:6]):
            c.drawString(48, y - 17 - idx * 12, detail[:88])
        c.setFillColor(colors.HexColor("#777F84"))
        c.setFont("Helvetica", 6.5)
        c.drawString(40, 30, "SYNTHETIC BENCHMARK DOCUMENT - NO REAL PERSON, ACCOUNT, OR LEGAL EFFECT")
        c.drawRightString(width - 40, 30, "Page 1 of 1")
    c.showPage()
    c.save()


def perspective_coefficients(destination, source):
    matrix = []
    vector = []
    for (dx, dy), (sx, sy) in zip(destination, source):
        matrix.append([dx, dy, 1, 0, 0, 0, -sx * dx, -sx * dy])
        matrix.append([0, 0, 0, dx, dy, 1, -sy * dx, -sy * dy])
        vector.extend([sx, sy])
    return np.linalg.lstsq(np.array(matrix), np.array(vector), rcond=None)[0]


def add_sensor_noise(image: Image.Image, rng: random.Random, strength: int) -> Image.Image:
    arr = np.asarray(image.convert("RGB"), dtype=np.int16)
    noise_rng = np.random.default_rng(rng.randrange(1, 2**31 - 1))
    noise = noise_rng.normal(0, strength, arr.shape).astype(np.int16)
    return Image.fromarray(np.clip(arr + noise, 0, 255).astype(np.uint8), "RGB")


def make_scan(rendered: Path, destination: Path, rng: random.Random) -> None:
    image = Image.open(rendered).convert("L")
    image = ImageEnhance.Contrast(image).enhance(rng.uniform(0.88, 1.08))
    image = image.rotate(rng.uniform(-0.7, 0.7), expand=True, fillcolor=245)
    image.thumbnail((1500, 1900), Image.Resampling.LANCZOS)
    image = add_sensor_noise(image.convert("RGB"), rng, 2)
    image.save(destination, "JPEG", quality=88, optimize=True)


def make_phone_photo(rendered: Path, background_path: Path, destination: Path, rng: random.Random, card: bool) -> None:
    background = Image.open(background_path).convert("RGB").resize((1024, 1536), Image.Resampling.LANCZOS)
    page = Image.open(rendered).convert("RGB")
    max_width = rng.randint(710, 855) if not card else rng.randint(660, 820)
    max_height = rng.randint(1030, 1290) if not card else rng.randint(430, 560)
    page.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
    pw, ph = page.size
    margin_x = max(40, (1024 - pw) // 2)
    margin_y = max(60, (1536 - ph) // 2)
    x = min(max(18, margin_x + rng.randint(-65, 65)), 1024 - pw - 18)
    y = min(max(22, margin_y + rng.randint(-105, 105)), 1536 - ph - 22)
    skew = rng.randint(18, 58)
    destination_quad = [(x + rng.randint(0, skew), y + rng.randint(0, skew)), (x + pw - rng.randint(0, skew), y + rng.randint(0, skew)), (x + pw - rng.randint(0, skew), y + ph - rng.randint(0, skew)), (x + rng.randint(0, skew), y + ph - rng.randint(0, skew))]
    source_quad = [(0, 0), (pw, 0), (pw, ph), (0, ph)]
    coeffs = perspective_coefficients(destination_quad, source_quad)
    warped = page.transform(background.size, Image.Transform.PERSPECTIVE, coeffs, Image.Resampling.BICUBIC, fillcolor=(0, 0, 0))
    mask_source = Image.new("L", (pw, ph), 255)
    mask = mask_source.transform(background.size, Image.Transform.PERSPECTIVE, coeffs, Image.Resampling.BICUBIC, fillcolor=0)
    shadow = mask.filter(ImageFilter.GaussianBlur(18))
    shadow_layer = Image.new("RGB", background.size, (20, 20, 20))
    background = Image.composite(shadow_layer, background, shadow.point(lambda p: int(p * 0.38)))
    background.paste(warped, (0, 0), mask)
    overlay = Image.new("RGBA", background.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    if rng.random() < 0.8:
        glare_x = rng.randint(120, 760)
        draw.polygon([(glare_x, 0), (glare_x + 170, 0), (glare_x - 40, 1536), (glare_x - 210, 1536)], fill=(255, 248, 226, rng.randint(10, 28)))
    if rng.random() < 0.45:
        draw.ellipse((rng.randint(-100, 200), rng.randint(600, 1000), rng.randint(620, 900), rng.randint(1200, 1600)), fill=(15, 20, 25, 16))
    background = Image.alpha_composite(background.convert("RGBA"), overlay).convert("RGB")
    background = ImageEnhance.Brightness(background).enhance(rng.uniform(0.82, 1.05))
    background = ImageEnhance.Color(background).enhance(rng.uniform(0.82, 1.08))
    background = add_sensor_noise(background, rng, rng.randint(3, 7))
    if rng.random() < 0.6:
        background = background.filter(ImageFilter.GaussianBlur(rng.uniform(0.25, 0.75)))
    background.save(destination, "JPEG", quality=rng.randint(56, 76), optimize=True)


def render_first_page(pdf: Path, output_prefix: Path, pdftoppm: str) -> Path:
    command = [pdftoppm, "-f", "1", "-singlefile", "-r", "190", "-png", str(pdf), str(output_prefix)]
    subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    rendered = output_prefix.with_suffix(".png")
    if not rendered.exists():
        raise FileNotFoundError(f"PDF render did not produce {rendered}")
    return rendered


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--backgrounds", required=True, type=Path)
    parser.add_argument("--pdftoppm", default=shutil.which("pdftoppm") or "pdftoppm")
    parser.add_argument("--seed", type=int, default=7242026)
    args = parser.parse_args()

    output = args.output.resolve()
    if output.exists():
        shutil.rmtree(output)
    (output / "pdf").mkdir(parents=True)
    (output / "rendered").mkdir()
    (output / "scan").mkdir()
    (output / "phone").mkdir()
    background_files = sorted(args.backgrounds.resolve().glob("*.png"))
    if len(background_files) < 3:
        raise SystemExit("At least three PNG backgrounds are required")

    rng = random.Random(args.seed)
    manifest = {"schemaVersion": 1, "synthetic": True, "seed": args.seed, "clients": [], "documents": []}
    document_index = 0
    for client_index, kinds in ASSIGNMENTS:
        profile = PROFILES[client_index]
        client_id = f"client-{client_index + 1:02d}"
        manifest["clients"].append({"id": client_id, "name": profile["name"], "documentKinds": kinds})
        for kind in kinds:
            document_index += 1
            document_id = f"{client_id}-{document_index:02d}-{kind}"
            pdf_path = output / "pdf" / f"{document_id}.pdf"
            rendered_prefix = output / "rendered" / document_id
            scan_path = output / "scan" / f"{document_id}-scan.jpg"
            phone_path = output / "phone" / f"{document_id}-phone.jpg"
            spec = doc_spec(kind, profile, client_index)
            render_pdf(pdf_path, profile, kind, spec, document_index)
            rendered_path = render_first_page(pdf_path, rendered_prefix, args.pdftoppm)
            make_scan(rendered_path, scan_path, rng)
            make_phone_photo(rendered_path, background_files[document_index % len(background_files)], phone_path, rng, kind in {"driver-license", "social-security-card"})
            manifest["documents"].append({
                "id": document_id,
                "clientId": client_id,
                "kind": kind,
                "fileName": pdf_path.name,
                "pdf": str(pdf_path.relative_to(output)).replace("\\", "/"),
                "scan": str(scan_path.relative_to(output)).replace("\\", "/"),
                "phone": str(phone_path.relative_to(output)).replace("\\", "/"),
                "expected": spec["expected"],
            })

    (output / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(json.dumps({"clients": len(manifest["clients"]), "documents": len(manifest["documents"]), "categories": len({item["kind"] for item in manifest["documents"]}), "output": str(output)}, indent=2))


if __name__ == "__main__":
    main()
