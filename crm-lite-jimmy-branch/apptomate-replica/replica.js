(function(){
  "use strict";

  const app=document.getElementById("app");
  const modalRoot=document.getElementById("modal-root");
  const toast=document.getElementById("toast");

  const steps=["Personal Info","Income","Assets","Debts","Expenses","Financial affairs","Counseling class","Documents"];
  const state={
    view:"crm",
    crmPage:"dashboard",
    modal:false,
    contactTab:"new",
    joint:false,
    step:0,
    answers:{},
    uploads:new Set()
  };

  const stepDocs=[
    [
      {key:"license",name:"Driver’s license",status:"Required to upload"},
      {key:"ssn",name:"Social Security card, W-2, or 1099",status:"Required to upload"},
      {key:"tax1",name:"Tax return — last year",status:"Needed"},
      {key:"tax2",name:"Tax return — two years ago",status:"Needed"}
    ],
    [
      {key:"paystubs",name:"Pay stubs — last 60 days",status:"Needed"},
      {key:"incomeproof",name:"Other income proof",status:"If applicable"}
    ],
    [],
    [{key:"debts",name:"Debt statements and collection letters",status:"Needed"}],
    [{key:"expenses",name:"Lease or recurring expense proof",status:"If applicable"}],
    [{key:"lawsuit",name:"Court or claim documents",status:"If applicable"}],
    [{key:"counseling",name:"Counseling class certificate",status:"Needed"}],
    [{key:"other",name:"Other documents",status:"Optional",optional:true}]
  ];

  const requiredDocuments=[
    {key:"license",name:"Driver’s license or photo ID",note:"Identity verification · Personal",strict:true},
    {key:"ssn",name:"Social Security card, W-2, or 1099",note:"Proof of Social Security number · Personal",strict:true},
    {key:"bank",name:"Bank statements — last 6 months",note:"All accounts, all pages · Income",strict:true},
    {key:"debts",name:"Statements for credit cards, medical bills & other debts",note:"Include collection or attorney letters · Debts",strict:true},
    {key:"tax1",name:"Tax return — last year",note:"Federal return, all schedules · Personal"},
    {key:"tax2",name:"Tax return — two years ago",note:"Federal return, all schedules · Personal"},
    {key:"counseling",name:"Counseling class certificate",note:"Comes automatically if taken through the firm link · Counseling"}
  ];

  const householdRows=[
    ["Household goods & furnishings","Appliances, furniture, linens, china, kitchenware"],
    ["Electronics","TVs, audio/video, computers, phones, cameras"],
    ["Collectibles of value","Antiques, artwork, books, coins"],
    ["Sports & hobby equipment","Exercise gear, bicycles, golf clubs, instruments"],
    ["Firearms","Pistols, rifles, shotguns, ammunition"],
    ["Clothes","Everyday clothes, coats, shoes, accessories"],
    ["Jewelry","Everyday and costume jewelry, rings, watches"],
    ["Animals / pets","Dogs, cats, birds, horses"]
  ];

  const genericQuestions={
    1:{
      title:"Income",
      description:"Tell us about every source of income received by you and anyone in your household.",
      sections:[
        ["Employment","Are you currently employed?","Do you receive overtime, bonuses, commissions, or tips?"],
        ["Other income","Do you receive Social Security, unemployment, retirement, or disability income?","Does anyone else in your household contribute income?"]
      ]
    },
    3:{
      title:"Debts",
      description:"List everyone you owe, including collection agencies, medical providers, personal loans, and disputed debts.",
      sections:[
        ["Secured debts","Do you have a mortgage, vehicle loan, or other debt secured by property?","Are any payments currently past due?"],
        ["Unsecured debts","Do you owe money on credit cards, medical bills, personal loans, or judgments?","Are any creditors suing or garnishing you?"]
      ]
    },
    4:{
      title:"Expenses",
      description:"Estimate your household’s regular monthly expenses. Use realistic current amounts.",
      sections:[
        ["Housing","Rent or mortgage","Electricity, gas, water, and trash","Home maintenance"],
        ["Household","Food and housekeeping supplies","Clothing and laundry","Medical and dental expenses"],
        ["Transportation","Vehicle payments","Fuel and maintenance","Insurance"]
      ],
      money:true
    },
    5:{
      title:"Financial Affairs",
      description:"These questions help your attorney identify transactions or events that must be disclosed.",
      sections:[
        ["Recent financial activity","Have you transferred property or paid any creditor more than usual?","Has any property been repossessed, foreclosed, or returned?"],
        ["Claims and proceedings","Are you involved in any lawsuit, administrative proceeding, or collection action?","Have you closed, sold, or transferred a business in recent years?"]
      ]
    },
    6:{
      title:"Counseling Class",
      description:"Bankruptcy law requires an approved credit-counseling course before filing.",
      sections:[
        ["Course status","Have you completed the required credit-counseling class?","Did you take the class using the link provided by your firm?"],
        ["Certificate","Do you have a certificate ready to upload?"]
      ]
    }
  };

  function esc(value){
    return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]);
  }

  function showToast(message){
    toast.textContent=message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer=setTimeout(()=>toast.classList.remove("show"),2600);
  }

  function syncToolbar(){
    document.querySelectorAll("[data-view]").forEach(button=>button.classList.toggle("active",button.dataset.view===state.view));
  }

  function render(){
    syncToolbar();
    if(state.view==="crm") app.innerHTML=renderCrm();
    if(state.view==="intake") app.innerHTML=renderIntake();
    if(state.view==="signin") app.innerHTML=renderSignIn();
    if(state.view==="onboarding") app.innerHTML=renderOnboarding();
    modalRoot.innerHTML=state.modal?renderLeadModal():"";
  }

  function logo(){
    return '<div class="brand-wordmark">BK <em>FASTLANE</em></div>';
  }

  function renderCrm(){
    const page=state.crmPage;
    const title=page.charAt(0).toUpperCase()+page.slice(1);
    return `
      <div class="crm-shell">
        <aside class="crm-sidebar">
          <div class="crm-logo">${logo()}</div>
          <nav class="crm-nav" aria-label="CRM navigation">
            ${crmNavButton("dashboard","⌂","DASHBOARD")}
            ${crmNavButton("leads","♙","LEADS")}
            ${crmNavButton("contacts","♧","CONTACTS")}
            ${crmNavButton("settings","⚙","SETTINGS")}
          </nav>
          <div class="crm-side-bottom"><div class="avatar">ML</div><span>McCune Legal</span></div>
        </aside>
        <section class="crm-main">
          <header class="crm-topbar">
            <input class="search-box" aria-label="Search by name or email" placeholder="⌕  Search by name or email...">
            <button type="button" class="primary-btn" id="create-lead">Create New Lead&nbsp; +</button>
          </header>
          <div class="crm-coming">
            <div>
              <h1>${esc(title)}</h1>
              <p>Coming soon</p>
              <div class="source-truth-note">This is faithful to Apptomate’s current <strong>dev_v2</strong> route. The CRM shell and Create Lead modal are implemented; this route’s main content still says “Coming soon.”</div>
            </div>
          </div>
        </section>
      </div>`;
  }

  function crmNavButton(key,icon,label){
    return `<button type="button" data-crm-nav="${key}" class="${state.crmPage===key?"active":""}"><span class="nav-icon">${icon}</span><span>${label}</span></button>`;
  }

  function renderLeadModal(){
    return `
      <div class="modal-backdrop" data-close-modal="backdrop">
        <section class="lead-modal" role="dialog" aria-modal="true" aria-labelledby="new-lead-title">
          <div class="modal-head"><h2 id="new-lead-title">New Lead</h2><button type="button" class="icon-btn" data-close-modal="button" aria-label="Close">×</button></div>
          <label class="field-label">Contact</label>
          <div class="segmented">
            <button type="button" data-contact-tab="new" class="${state.contactTab==="new"?"active":""}">New Contact</button>
            <button type="button" data-contact-tab="existing" class="${state.contactTab==="existing"?"active":""}">Existing Contact</button>
          </div>
          ${state.contactTab==="existing"?renderExistingContact():renderNewContactFields()}
          <div class="intake-link-box">
            <input type="checkbox" id="send-intake">
            <label for="send-intake"><strong>Send Intake Form Link</strong><p>Sends the “Intake Form Link” template email, logs it under Communications, and sets the stage to Intake Sent. Demo clicks do not send email.</p></label>
          </div>
          <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="button">Cancel</button><button type="button" class="primary-btn" id="save-lead">Save Lead</button></div>
        </section>
      </div>`;
  }

  function renderExistingContact(){
    return `<div class="form-grid"><div class="col-6"><label class="field-label">Find an existing contact</label><select class="select-input"><option>Select a contact</option><option>Jordan Sample — demo@example.test</option><option>Taylor Sample — taylor@example.test</option></select></div><div class="col-6"><label class="field-label">Notes</label><textarea class="text-area" placeholder="Initial notes..."></textarea></div></div>`;
  }

  function renderNewContactFields(){
    return `<div class="form-grid">
      ${inputField("First Name","First name","col-2","lead-first")}
      ${inputField("Middle Name","Middle name","col-2")}
      ${inputField("Last Name","Last name","col-2","lead-last")}
      ${inputField("Email","email@example.com","col-3","lead-email","email")}
      ${inputField("Phone","(555) 555-0000","col-3")}
      <div class="col-6 check-line"><input type="checkbox" id="joint-case" ${state.joint?"checked":""}><label for="joint-case"><strong>Joint Case</strong> &nbsp;(add second contact)</label></div>
      ${state.joint?`${inputField("Second contact first name","First name","col-3")}${inputField("Second contact last name","Last name","col-3")}${inputField("Second contact email","email@example.com","col-3","","email")}${inputField("Second contact phone","(555) 555-0000","col-3")}`:""}
      <div class="col-6"><label class="field-label">Notes</label><textarea class="text-area" placeholder="Initial notes..."></textarea></div>
    </div>`;
  }

  function inputField(label,placeholder,column,id="",type="text"){
    return `<div class="${column}"><label class="field-label"${id?` for="${id}"`:""}>${label}</label><input class="text-input" type="${type}" ${id?`id="${id}"`:""} placeholder="${placeholder}"></div>`;
  }

  function renderSignIn(){
    return `<main class="auth-screen">
      <div class="auth-logo" aria-hidden="true">▰</div>
      <section class="auth-card">
        <h1>Sign in to your CRM workspace</h1>
        <p class="subtitle">Your secure workspace for managing leads, matters, and case workflows.</p>
        <div class="auth-field"><label class="field-label">Email</label><input class="text-input" type="email" placeholder="you@email.com"></div>
        <div class="auth-field"><label class="field-label">Password</label><input class="text-input" type="password" placeholder="Password"></div>
        <div class="auth-row"><label class="check-line"><input type="checkbox"> Remember Me</label><a href="#" data-noop>Forgot password?</a></div>
        <div class="captcha"><div class="captcha-code">3dkOk2</div><input class="text-input" placeholder="Enter captcha here..."><div class="captcha-actions">↻ ♪</div></div>
        <button type="button" class="primary-btn" style="width:100%" data-preview-crm>Preview workspace&nbsp; →</button>
        <p style="text-align:center;font-size:10px;margin:19px 0 0;color:#777f79">Need Help? <u>Contact Your Administration</u></p>
      </section>
      <p class="auth-note">Synthetic review only. No credentials are accepted or transmitted. The production screen states that authorized case information may be organized using AI-assisted tools and kept confidential.</p>
    </main>`;
  }

  function renderOnboarding(){
    return `<main class="onboarding-screen"><div class="onboarding-wrap">
      <div class="onboarding-head">${logo()}<h1>Add Organization</h1><p>Set up the firm workspace and primary administrator.</p></div>
      <section class="onboarding-card">
        <h2>Organization details</h2><p>Enter the business information shown to users in the workspace.</p>
        <div class="form-grid">
          <div class="col-2"><label class="field-label">Organization logo</label><div class="upload-logo">＋<br>Upload logo<br><small>PNG or JPG</small></div></div>
          <div class="col-2">${inputField("Organization name","McCune Legal","col-6")}${inputField("Subdomain","mccune","col-6")}</div>
          <div class="col-2">${inputField("Administrator first name","First name","col-6")}${inputField("Administrator last name","Last name","col-6")}</div>
          ${inputField("Administrator email","admin@example.com","col-3","","email")}
          ${inputField("Phone","(555) 555-0000","col-3")}
          ${inputField("Website","https://example.com","col-3")}
          <div class="col-3"><label class="field-label">Time zone</label><select class="select-input"><option>Mountain Time</option><option>Pacific Time</option><option>Central Time</option><option>Eastern Time</option></select></div>
        </div>
        <div class="modal-actions"><button type="button" class="secondary-btn" data-view="signin">Cancel</button><button type="button" class="primary-btn" data-create-demo-org>Create demo organization</button></div>
      </section>
    </div></main>`;
  }

  function renderIntake(){
    return `<main class="intake-page"><section class="intake-card">
      <header class="intake-head">
        <div class="firm-brand"><strong>MCCUNE LEGAL</strong><span>WE HELP PEOPLE STRUGGLING WITH DEBT</span></div>
        <div class="intake-title">Intake Form</div>
        <div class="debtor"><span>Jordan Sample</span><div class="avatar">JS</div></div>
      </header>
      <nav class="stepper" aria-label="Intake steps">${steps.map((label,index)=>`<button type="button" class="step-button ${index===state.step?"active":""} ${index<state.step?"done":""}" data-step="${index}"><span class="step-num">${index<state.step?"✓":index+1}</span><span>${label}</span></button>`).join("")}</nav>
      <div class="intake-body">${renderDocSidebar()}<section class="intake-content">${renderStep()}</section></div>
    </section></main>`;
  }

  function renderDocSidebar(){
    const docs=stepDocs[state.step];
    const completed=docs.filter(doc=>state.uploads.has(doc.key)).length;
    const percent=docs.length?Math.round(completed/docs.length*100):0;
    return `<aside class="doc-sidebar">
      <div class="secure-box">♙ &nbsp; Secure upload<span>ENCRYPTED &amp; VERIFIED</span></div>
      ${docs.length?`<h3>Upload documents <span style="float:right;color:#79917f;font-size:10px">${completed} / ${docs.length}</span></h3><p>${state.step===7?"Everything still needed is listed on this page. Upload here or use the buttons on each row.":"Upload the documents for this section here."}</p><div class="doc-progress"><span style="width:${percent}%"></span></div>${docs.map(doc=>`<button type="button" class="doc-chip ${state.uploads.has(doc.key)?"done":""} ${doc.optional?"optional":""}" data-demo-upload="${doc.key}"><span>⇧ &nbsp; ${esc(doc.name)}<small>${state.uploads.has(doc.key)?"Uploaded in demo":esc(doc.status)}</small></span><b>${state.uploads.has(doc.key)?"✓":""}</b></button>`).join("")}`:`<p style="margin-top:44px;text-align:center">No documents needed for this step yet.</p>`}
    </aside>`;
  }

  function renderStep(){
    if(state.step===0)return renderPersonal();
    if(state.step===2)return renderAssets();
    if(state.step===7)return renderDocuments();
    return renderGenericStep(state.step);
  }

  function guide(title,text){
    return `<div class="guide-row"><div class="guide-copy"><h2>${esc(title)}</h2><p>${esc(text)}</p></div><div class="guide-video"><div class="play-button">▶</div></div></div>`;
  }

  function pageHeading(title,description){
    return `<div class="page-heading"><h1>${esc(title)}</h1><p>${esc(description)}</p></div>`;
  }

  function labeledInput(label,placeholder,column="col-2",required=false,type="text"){
    return `<div class="${column}"><label class="field-label">${esc(label)}${required?'<span class="required"> *</span>':""}</label><input class="text-input" type="${type}" placeholder="${esc(placeholder)}"></div>`;
  }

  function renderPersonal(){
    return `${pageHeading("Personal Information","Please provide your legal details below for our records. Your data is encrypted and secure.")}
      ${guide("Personal Information","Please provide your legal details below — your data is encrypted and secure. Upload to the left: your driver’s license; proof of Social Security number; and tax returns for the last two years.")}
      <div class="personal-grid">
        ${labeledInput("First name","Full legal first name","col-2",true)}
        ${labeledInput("Middle name","Full legal middle name","col-2")}
        ${labeledInput("Last name","Full legal last name (include suffix)","col-2",true)}
        ${labeledInput("Other names used in the last 8 years","Maiden name or prior names","col-3")}
        ${labeledInput("Email address","you@email.com","col-3",true,"email")}
        ${labeledInput("Contact number","(303) 000-0000","col-2",true)}
        ${labeledInput("Number and street","","col-2",true)}
        ${labeledInput("City","","col-2",true)}
        ${labeledInput("State","Select state","col-2",true)}
        ${labeledInput("ZIP code","","col-2",true)}
        ${labeledInput("County","","col-2",true)}
        ${labeledInput("Date of birth","MM / DD / YYYY","col-2",true)}
        ${labeledInput("Social Security number","123-45-6789","col-2",true,"password")}
      </div>
      ${yesNoQuestion("filed","Have you filed for bankruptcy before?")}
      ${yesNoQuestion("dependents","Do you have dependents?")}
      <div class="question"><div class="question-label">Marital status <span class="required">*</span></div><select class="select-input" style="max-width:320px"><option>Select marital status</option><option>Single</option><option>Married</option><option>Divorced</option><option>Separated</option></select></div>
      <div class="section-title">Anything else for your attorney?</div><textarea class="text-area" placeholder="Share anything you think would help your attorney understand your situation."></textarea>
      ${formActions()}`;
  }

  function yesNoQuestion(key,label,note=""){
    const answer=state.answers[key];
    return `<div class="question"><div class="question-label">${esc(label)} <span class="required">*</span>${note?` <small>${esc(note)}</small>`:""}</div><div class="yesno"><button type="button" data-yn="${key}:yes" class="${answer==="yes"?"active":""}">Yes</button><button type="button" data-yn="${key}:no" class="${answer==="no"?"active":""}">No</button></div></div>`;
  }

  function renderAssets(){
    const financial=[
      ["cash","Cash on hand",""],
      ["accounts","Bank or financial accounts","checking, savings, brokerage, Venmo, PayPal — even $0 balances"],
      ["stocks","Bonds, mutual funds, or publicly traded stocks",""],
      ["business","Ownership in a business","LLC, partnership, sole proprietorship, non-public stock"],
      ["retirement","Retirement or pension accounts","401(k), IRA, pension"],
      ["refund","Tax refunds owed to you",""],
      ["claims","Legal claims or lawsuits","personal injury, workers comp, money owed, any claim you could win"],
      ["other-assets","Other financial assets not already listed",""]
    ];
    return `${pageHeading("Assets","You must list everything you own or have any sort of interest in. Most assets are protected, but your attorney needs a detailed list and realistic values.")}
      ${guide("Assets","List everything you own or have an interest in. If you are filing jointly, list assets owned by you, your spouse, and jointly.")}
      <div class="section-title">Real Estate</div>${yesNoQuestion("real-estate","Do you own or have any interest in any real estate?","residence, condo, land, timeshare, or mobile home")}
      <div class="section-title">Vehicles</div>${yesNoQuestion("vehicles","Do you own or have any interest in any vehicles?","cars, trucks, motorcycles, RVs, trailers, boats, or ATVs")}
      <div class="section-title">Personal and Household Items</div><p style="font-size:11px;color:#778079">Estimate what you would actually get selling these items used — think garage-sale value.</p>
      <table class="money-table"><tbody>${householdRows.map(row=>`<tr><td><strong>${esc(row[0])}</strong><small>${esc(row[1])}</small></td><td><div class="money-input">$<input inputmode="decimal" placeholder="0.00"></div></td></tr>`).join("")}</tbody></table>
      <div class="section-title">Financial Assets</div>${financial.map(item=>yesNoQuestion(item[0],item[1],item[2])).join("")}
      <div class="info-callout"><strong>Legal claims must be listed.</strong> A personal injury case, workers compensation claim, or money owed to you can count as an asset. When in doubt, list it.</div>
      <div class="section-title">Business Related Property</div>${yesNoQuestion("business-property","Do you own or have any interest in any business related property?")}
      ${formActions()}`;
  }

  function renderGenericStep(index){
    const data=genericQuestions[index];
    const content=data.sections.map((section,sectionIndex)=>{
      const title=section[0];
      const questions=section.slice(1);
      return `<div class="section-title">${esc(title)}</div>${questions.map((question,questionIndex)=>data.money?`<div class="question"><div class="question-label">${esc(question)}</div><div class="money-input" style="max-width:250px">$<input inputmode="decimal" placeholder="0.00"></div></div>`:yesNoQuestion(`generic-${index}-${sectionIndex}-${questionIndex}`,question)).join("")}`;
    }).join("");
    return `${pageHeading(data.title,data.description)}${guide(data.title,`Complete each question in this section. The information and documents you provide help your attorney review your ${data.title.toLowerCase()}.`)}${content}${formActions()}`;
  }

  function renderDocuments(){
    const completed=requiredDocuments.filter(doc=>state.uploads.has(doc.key)).length;
    const strictOpen=requiredDocuments.filter(doc=>doc.strict&&!state.uploads.has(doc.key)).length;
    return `${pageHeading("Documents","Almost done. Your list below only shows what applies to you, based on your answers. Upload what you have — anything marked required is needed before submission.")}
      ${guide("You’re almost done","This checklist was built from your answers. Anything still open can be uploaded here, and most non-blocking items can be resolved by explaining why you do not have them.")}
      <div class="doc-check-card"><h3>Required documents <span style="float:right;font-weight:400;color:#7c847e">${completed} of ${requiredDocuments.length} resolved</span></h3><div class="doc-progress"><span style="width:${Math.round(completed/requiredDocuments.length*100)}%"></span></div><p>Optional items do not count toward this bar — they never hold you up.</p></div>
      <div class="info-callout">✓ Based on your answers, we’re not asking for home paperwork, vehicle paperwork, spouse documents, court paperwork, support documents, or student-loan paperwork.</div>
      <div class="doc-check-card"><h3>Required to submit</h3><p>MUST UPLOAD — we can’t move forward without these.</p>${requiredDocuments.filter(doc=>doc.strict).map(renderDocumentRow).join("")}</div>
      <div class="doc-check-card"><h3>Upload these — or tell us why you can’t</h3><p>Have it? Upload it. Don’t have it? Tell us why.</p>${requiredDocuments.filter(doc=>!doc.strict).map(renderDocumentRow).join("")}</div>
      <div class="form-actions"><span class="auto-save">✓ Saved automatically</span><button type="button" class="secondary-btn" data-save-exit>Save &amp; exit</button><button type="button" class="primary-btn" data-submit-intake ${strictOpen?"disabled":""}>Submit my intake&nbsp; →</button></div>
      ${strictOpen?`<p style="text-align:right;color:#8d6a5f;font-size:10px"><strong>${strictOpen} required items</strong> still need to be uploaded before you can submit.</p>`:""}`;
  }

  function renderDocumentRow(doc){
    const uploaded=state.uploads.has(doc.key);
    return `<div class="doc-row"><div><strong>${esc(doc.name)}</strong><small>${esc(doc.note)}</small></div><div class="doc-actions"><button type="button" class="mini-btn ${uploaded?"uploaded":""}" data-demo-upload="${doc.key}">${uploaded?"✓ Uploaded":"Upload"}</button>${doc.strict?"":`<button type="button" class="mini-btn" data-missing-doc="${doc.key}">I don’t have this</button>`}</div></div>`;
  }

  function formActions(){
    return `<div class="form-actions"><span class="auto-save">✓ Demo changes stay in this browser</span><button type="button" class="secondary-btn" data-save-exit>Save &amp; exit</button><button type="button" class="primary-btn" data-continue>Save &amp; continue&nbsp; →</button></div>`;
  }

  document.addEventListener("click",event=>{
    const viewButton=event.target.closest("[data-view]");
    if(viewButton){state.view=viewButton.dataset.view;state.modal=false;render();return;}

    const crmNav=event.target.closest("[data-crm-nav]");
    if(crmNav){state.crmPage=crmNav.dataset.crmNav;render();return;}

    if(event.target.closest("#create-lead")){state.modal=true;render();return;}

    const close=event.target.closest("[data-close-modal]");
    if(close){
      if(close.dataset.closeModal==="backdrop"&&event.target!==close)return;
      state.modal=false;render();return;
    }

    const contactTab=event.target.closest("[data-contact-tab]");
    if(contactTab){state.contactTab=contactTab.dataset.contactTab;render();return;}

    if(event.target.closest("#save-lead")){
      const first=document.getElementById("lead-first")?.value.trim();
      const last=document.getElementById("lead-last")?.value.trim();
      const email=document.getElementById("lead-email")?.value.trim();
      if(state.contactTab==="new"&&(!first||!last||!email)){showToast("Add first name, last name, and email to save the demo lead.");return;}
      state.modal=false;render();showToast("Demo lead saved locally. No email or API request was sent.");return;
    }

    const stepButton=event.target.closest("[data-step]");
    if(stepButton){state.step=Number(stepButton.dataset.step);render();return;}

    const yn=event.target.closest("[data-yn]");
    if(yn){const [key,value]=yn.dataset.yn.split(":");state.answers[key]=value;render();return;}

    const upload=event.target.closest("[data-demo-upload]");
    if(upload){
      const key=upload.dataset.demoUpload;
      if(state.uploads.has(key))state.uploads.delete(key);else state.uploads.add(key);
      render();showToast(state.uploads.has(key)?"Demo document marked uploaded.":"Demo upload removed.");return;
    }

    const missing=event.target.closest("[data-missing-doc]");
    if(missing){state.uploads.add(missing.dataset.missingDoc);render();showToast("Marked unavailable for attorney follow-up.");return;}

    if(event.target.closest("[data-continue]")){state.step=Math.min(state.step+1,steps.length-1);render();showToast("Step saved in the synthetic replica.");return;}
    if(event.target.closest("[data-save-exit]")){showToast("Synthetic progress saved for this open page.");return;}
    if(event.target.closest("[data-submit-intake]")){showToast("Synthetic intake submitted for review. Nothing was transmitted.");return;}
    if(event.target.closest("[data-preview-crm]")){state.view="crm";render();showToast("Opened the synthetic CRM workspace.");return;}
    if(event.target.closest("[data-create-demo-org]")){state.view="crm";render();showToast("Demo organization created locally.");return;}
    if(event.target.closest("[data-noop]")){event.preventDefault();showToast("This control is visual only in the public replica.");}
  });

  document.addEventListener("change",event=>{
    if(event.target.id!=="joint-case")return;
    state.joint=event.target.checked;
    render();
  });

  render();
})();
