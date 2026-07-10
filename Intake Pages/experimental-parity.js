(function(){
  'use strict';

  var STORAGE_KEY='bkfl_experimental_intake_v1';
  var PAGE_ORDER=['personal','income','assets','debts','expenses','financial-affairs','counseling','documents'];
  var PAGE_LABELS={
    personal:{en:'Personal information',es:'Informacion personal'},
    income:{en:'Income',es:'Ingresos'},
    assets:{en:'Assets',es:'Bienes'},
    debts:{en:'Debts',es:'Deudas'},
    expenses:{en:'Expenses',es:'Gastos'},
    'financial-affairs':{en:'Financial affairs',es:'Asuntos financieros'},
    counseling:{en:'Counseling class',es:'Clase de asesoria'},
    documents:{en:'Documents',es:'Documentos'}
  };
  var GUIDANCE={
    login:{
      en:'Your progress is saved in this browser so you can return to the last section you visited.',
      es:'Su progreso se guarda en este navegador para que pueda volver a la ultima seccion que visito.'
    },
    personal:{
      en:'Start with the people and addresses connected to the case. Use the information exactly as it appears on official records.',
      es:'Comience con las personas y direcciones relacionadas con el caso. Use la informacion exactamente como aparece en los registros oficiales.'
    },
    income:{
      en:'Add every household income source. The experimental assistants below show how paystubs and bank statements can be organized for attorney review.',
      es:'Agregue todas las fuentes de ingresos del hogar. Los asistentes experimentales muestran como organizar recibos de pago y estados bancarios para la revision del abogado.'
    },
    assets:{
      en:'List everything you own or have an interest in. Estimates should reflect current resale value, not replacement cost.',
      es:'Enumere todo lo que posee o en lo que tiene interes. Las estimaciones deben reflejar el valor de reventa actual, no el costo de reemplazo.'
    },
    debts:{
      en:'Add every creditor, even when the balance is disputed or unknown. Common creditor suggestions are a starting point; verify each entry against the latest statement.',
      es:'Agregue cada acreedor, incluso si el saldo esta en disputa o es desconocido. Verifique cada sugerencia con el estado de cuenta mas reciente.'
    },
    expenses:{
      en:'Use a realistic monthly average. Include expenses paid by someone else when they support your household.',
      es:'Use un promedio mensual realista. Incluya los gastos pagados por otra persona cuando apoyen a su hogar.'
    },
    'financial-affairs':{
      en:'Answer every question. A Yes answer may open details or request supporting court records for attorney review.',
      es:'Responda cada pregunta. Una respuesta Si puede abrir detalles o solicitar documentos judiciales para la revision del abogado.'
    },
    counseling:{
      en:'Complete the required course and keep the certificate. The case cannot be filed until the attorney confirms the counseling requirement.',
      es:'Complete el curso requerido y guarde el certificado. El caso no puede presentarse hasta que el abogado confirme el requisito de asesoria.'
    },
    documents:{
      en:'Resolve each required item. Upload the clearest source document available and explain anything you cannot provide.',
      es:'Resuelva cada elemento requerido. Cargue el documento fuente mas claro disponible y explique lo que no pueda proporcionar.'
    },
    confirmation:{
      en:'Your intake is ready for attorney review. Keep the portal available in case the firm requests a correction or another document.',
      es:'Su formulario esta listo para la revision del abogado. Mantenga el portal disponible por si la firma solicita una correccion u otro documento.'
    },
    'jimmy-changes':{
      en:'Experimental changes are isolated from the stable Matt and Jimmy review branches.',
      es:'Los cambios experimentales estan aislados de las ramas estables de revision de Matt y Jimmy.'
    }
  };
  var COMMON_CREDITORS=[
    'Aidvantage','Ally Financial','American Express','AT&T','Bank of America','Capital One',
    'Chase','Citi','Comcast / Xfinity','Discover','Ford Credit','GM Financial',
    'LendingClub','Midland Credit Management','Navient','Nelnet','OneMain Financial',
    'Portfolio Recovery Associates','Synchrony Bank','T-Mobile','TD Auto Finance',
    'Toyota Financial Services','Verizon','Wells Fargo'
  ];

  function pageKey(){
    return (location.pathname.split('/').pop()||'login.html').replace(/\.html$/,'');
  }
  function readState(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')||{};}catch(error){return {};}
  }
  function writeState(state){
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(error){}
  }
  function escapeHtml(value){
    return String(value==null?'':value).replace(/[&<>"']/g,function(char){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char];
    });
  }
  function addStyles(){
    var style=document.createElement('style');
    style.textContent='\
      .xp-toolbar{position:sticky;top:0;z-index:1200;background:#26353a;color:#fff;border-bottom:3px solid #d7a23f;padding:9px 18px;display:grid;grid-template-columns:minmax(190px,auto) minmax(180px,1fr) auto;align-items:center;gap:16px;font-family:var(--font,Arial,sans-serif);box-shadow:0 2px 8px rgba(31,42,46,.14)}\
      .xp-identity{display:flex;align-items:center;gap:9px;min-width:0}.xp-badge{background:#d7a23f;color:#202b30;border-radius:4px;padding:4px 7px;font-size:10px;font-weight:800;text-transform:uppercase;white-space:nowrap}.xp-section{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\
      .xp-progress-wrap{display:grid;grid-template-columns:auto minmax(80px,1fr);align-items:center;gap:9px}.xp-progress-label{font-size:11px;color:#dce5e2;white-space:nowrap}.xp-progress{height:6px;background:#425157;border-radius:3px;overflow:hidden}.xp-progress i{display:block;height:100%;background:#7fa98a;border-radius:3px}\
      .xp-language{display:flex;border:1px solid #80908b;border-radius:6px;overflow:hidden}.xp-language button{width:36px;height:30px;border:0;border-right:1px solid #80908b;background:transparent;color:#dce5e2;font-size:11px;font-weight:800;cursor:pointer}.xp-language button:last-child{border-right:0}.xp-language button[aria-pressed="true"]{background:#fff;color:#26353a}.xp-language button:focus-visible,.xp-action:focus-visible,.xp-resume a:focus-visible{outline:3px solid rgba(215,162,63,.55);outline-offset:2px}\
      .xp-guide{margin:0 0 18px;border:1px solid #cbd8d2;border-left:4px solid #d7a23f;border-radius:6px;background:#f8faf8;padding:12px 14px;display:flex;gap:10px;align-items:flex-start}.xp-guide strong{display:block;font-size:12px;color:#315f57;margin-bottom:2px}.xp-guide p{margin:0;font-size:13px;line-height:1.5;color:#52616a}\
      .xp-resume{max-width:980px;margin:0 auto 16px;border:1px solid #cbd8d2;border-radius:6px;background:#fff;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px}.xp-resume strong{display:block;font-size:13px;color:#25313a}.xp-resume span{display:block;font-size:12px;color:#65717a;margin-top:2px}.xp-resume a,.xp-action{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:6px;background:#315f57;color:#fff;text-decoration:none;padding:8px 12px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}.xp-action[disabled]{background:#8b9995;cursor:default}\
      .xp-assistants{margin:0 0 18px;border:1px solid #d9dedb;border-radius:8px;background:#fff;overflow:hidden}.xp-assistants-head{padding:12px 14px;background:#eef2ef;border-bottom:1px solid #d9dedb;display:flex;align-items:center;justify-content:space-between;gap:12px}.xp-assistants-head h3{margin:0;font-size:14px;color:#25313a}.xp-sim{font-size:10px;font-weight:800;color:#805d16;background:#fff5dc;border:1px solid #e4c476;border-radius:4px;padding:3px 6px;text-transform:uppercase}.xp-assistant-row{padding:12px 14px;border-bottom:1px solid #edf0ee;display:grid;grid-template-columns:minmax(180px,1fr) auto auto;align-items:center;gap:12px}.xp-assistant-row:last-child{border-bottom:0}.xp-assistant-row strong{font-size:13px;color:#25313a}.xp-assistant-row p{font-size:12px;color:#65717a;margin:2px 0 0}.xp-assistant-status{min-width:120px;font-size:11px;font-weight:700;color:#497356;text-align:right}\
      .xp-creditor-note{margin:0 0 16px;padding:10px 12px;border:1px solid #dbc27d;border-radius:6px;background:#fff9e8;color:#5f4a1d;font-size:12px;line-height:1.5}.xp-creditor-status{display:block;font-size:11px;color:#497356;font-weight:700;margin-top:4px}\
      @media(max-width:720px){.xp-toolbar{grid-template-columns:1fr auto;gap:8px;padding:8px 10px}.xp-progress-wrap{grid-column:1/-1;grid-row:2}.xp-section{max-width:170px}.xp-resume{margin:0 12px 14px;align-items:flex-start;flex-direction:column}.xp-assistant-row{grid-template-columns:1fr auto}.xp-assistant-status{grid-column:1/-1;text-align:left;min-width:0}.xp-guide{margin-left:0;margin-right:0}}';
    document.head.appendChild(style);
  }
  function recordVisit(state,current){
    state.language=state.language==='es'?'es':'en';
    state.visited=Array.isArray(state.visited)?state.visited:[];
    if(PAGE_ORDER.indexOf(current)!==-1){
      if(state.visited.indexOf(current)===-1)state.visited.push(current);
      state.lastPage=current;
    }
    if(current==='confirmation')state.completed=true;
    state.updatedAt=new Date().toISOString();
    writeState(state);
  }
  function progressFor(state,current){
    var currentIndex=PAGE_ORDER.indexOf(current);
    var furthest=state.visited.reduce(function(max,key){return Math.max(max,PAGE_ORDER.indexOf(key));},-1);
    var index=Math.max(currentIndex,furthest);
    return state.completed?100:Math.max(0,Math.round(((index+1)/PAGE_ORDER.length)*100));
  }
  function addToolbar(state,current){
    var index=PAGE_ORDER.indexOf(current);
    var progress=progressFor(state,current);
    var section=index===-1?(current==='confirmation'?'Complete':'Experimental review'):(state.language==='es'?'Paso ':'Step ')+(index+1)+' / '+PAGE_ORDER.length+' - '+PAGE_LABELS[current][state.language];
    var bar=document.createElement('div');
    bar.className='xp-toolbar';
    bar.setAttribute('data-testid','experimental-toolbar');
    bar.innerHTML='<div class="xp-identity"><span class="xp-badge">Jimmy Experimental</span><span class="xp-section"></span></div><div class="xp-progress-wrap"><span class="xp-progress-label"></span><span class="xp-progress" role="progressbar" aria-label="Intake progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+progress+'"><i style="width:'+progress+'%"></i></span></div><div class="xp-language" role="group" aria-label="Guidance language"><button type="button" data-xp-lang="en">EN</button><button type="button" data-xp-lang="es">ES</button></div>';
    document.body.insertBefore(bar,document.body.firstChild);
    function render(){
      var lang=state.language;
      document.documentElement.lang=lang;
      bar.querySelector('.xp-section').textContent=index===-1?(current==='confirmation'?(lang==='es'?'Completado':'Complete'):(lang==='es'?'Revision experimental':'Experimental review')):(lang==='es'?'Paso ':'Step ')+(index+1)+' / '+PAGE_ORDER.length+' - '+PAGE_LABELS[current][lang];
      bar.querySelector('.xp-progress-label').textContent=(lang==='es'?'Progreso en este navegador: ':'This-browser progress: ')+progress+'%';
      bar.querySelectorAll('[data-xp-lang]').forEach(function(button){button.setAttribute('aria-pressed',String(button.getAttribute('data-xp-lang')===lang));});
    }
    bar.addEventListener('click',function(event){
      var button=event.target.closest('[data-xp-lang]');
      if(!button)return;
      state.language=button.getAttribute('data-xp-lang');
      writeState(state);
      render();
      renderGuide(state,current);
      renderAssistantCopy(state);
    });
    render();
  }
  function guideTarget(){
    return document.querySelector('.content .sec-title,.content h2.sec-title,.authrow,.changes-head,.confirm-card')||document.querySelector('.content,.app');
  }
  function renderGuide(state,current){
    var copy=GUIDANCE[current];
    if(!copy)return;
    var existing=document.querySelector('.xp-guide');
    if(!existing){
      existing=document.createElement('aside');
      existing.className='xp-guide';
      existing.setAttribute('aria-label','Section guidance');
      var target=guideTarget();
      if(!target)return;
      target.parentNode.insertBefore(existing,target);
    }
    existing.innerHTML='<div><strong>'+(state.language==='es'?'Guia de esta seccion':'Section guide')+'</strong><p>'+escapeHtml(copy[state.language])+'</p></div>';
  }
  function addResume(state,current){
    if(current!=='login'||!state.lastPage||PAGE_ORDER.indexOf(state.lastPage)===-1)return;
    var target=document.querySelector('.authrow');
    if(!target)return;
    var label=PAGE_LABELS[state.lastPage][state.language];
    var box=document.createElement('div');
    box.className='xp-resume';
    box.innerHTML='<div><strong>'+(state.language==='es'?'Continuar donde termino':'Continue where you left off')+'</strong><span>'+escapeHtml(label)+' - '+escapeHtml(state.updatedAt?new Date(state.updatedAt).toLocaleString():'')+'</span></div><a href="'+encodeURIComponent(state.lastPage)+'.html">'+(state.language==='es'?'Continuar':'Resume')+'</a>';
    target.parentNode.insertBefore(box,target);
  }
  function addSourceAssistants(state,current){
    if(current!=='income')return;
    var target=document.querySelector('.section-video');
    if(!target)return;
    state.assistants=state.assistants||{};
    var panel=document.createElement('section');
    panel.className='xp-assistants';
    panel.setAttribute('data-testid','source-assistants');
    panel.innerHTML='<div class="xp-assistants-head"><h3 data-xp-assistant-title></h3><span class="xp-sim">Experimental simulation</span></div>'+
      '<div class="xp-assistant-row" data-assistant-row="paystubs"><div><strong>Paystub Assistant</strong><p data-xp-paystub-copy></p></div><button class="xp-action" type="button" data-assistant="paystubs"></button><span class="xp-assistant-status" role="status"></span></div>'+
      '<div class="xp-assistant-row" data-assistant-row="bank-statements"><div><strong>Bank Statement Assistant</strong><p data-xp-bank-copy></p></div><button class="xp-action" type="button" data-assistant="bank-statements"></button><span class="xp-assistant-status" role="status"></span></div>';
    target.parentNode.insertBefore(panel,target.nextSibling);
    panel.addEventListener('click',function(event){
      var button=event.target.closest('[data-assistant]');
      if(!button)return;
      state.assistants[button.getAttribute('data-assistant')]='ready';
      writeState(state);
      renderAssistantCopy(state);
    });
    renderAssistantCopy(state);
  }
  function renderAssistantCopy(state){
    var panel=document.querySelector('.xp-assistants');
    if(!panel)return;
    var lang=state.language;
    panel.querySelector('[data-xp-assistant-title]').textContent=lang==='es'?'Asistentes de documentos fuente':'Source document assistants';
    panel.querySelector('[data-xp-paystub-copy]').textContent=lang==='es'?'Organiza seis meses de recibos por periodo de pago para la revision.':'Organizes six months of paystubs by pay period for review.';
    panel.querySelector('[data-xp-bank-copy]').textContent=lang==='es'?'Organiza estados por cuenta y mes y senala meses faltantes.':'Organizes statements by account and month and flags missing months.';
    panel.querySelectorAll('[data-assistant-row]').forEach(function(row){
      var key=row.getAttribute('data-assistant-row');
      var ready=state.assistants&&state.assistants[key]==='ready';
      var button=row.querySelector('button');
      button.textContent=ready?(lang==='es'?'Preparado':'Prepared'):(lang==='es'?'Iniciar demo':'Start demo');
      button.disabled=ready;
      row.querySelector('.xp-assistant-status').textContent=ready?(lang==='es'?'Listo para revision humana':'Ready for human review'):(lang==='es'?'No conectado':'Not connected');
    });
  }
  function labelFor(input){
    var field=input.closest('.field,.item,.debtitem');
    var label=field&&field.querySelector('label');
    return (label?label.textContent:input.getAttribute('aria-label')||input.placeholder||'').trim();
  }
  function addCreditorAutocomplete(state,current){
    if(current!=='debts')return;
    var title=document.querySelector('.content .sec-title');
    if(title){
      var note=document.createElement('div');
      note.className='xp-creditor-note';
      note.textContent=state.language==='es'?'Las sugerencias de acreedores son datos de demostracion. Verifique el nombre y la direccion con el estado de cuenta mas reciente.':'Common creditor suggestions are demo data. Verify the legal name and mailing address against the latest statement.';
      title.parentNode.insertBefore(note,title.nextSibling);
    }
    var list=document.createElement('datalist');
    list.id='xp-common-creditors';
    list.innerHTML=COMMON_CREDITORS.map(function(name){return '<option value="'+escapeHtml(name)+'"></option>';}).join('');
    document.body.appendChild(list);
    state.creditorMatches=Array.isArray(state.creditorMatches)?state.creditorMatches:[];
    function enhance(input,index){
      if(input.__xpCreditorEnhanced)return;
      var label=labelFor(input);
      if(/address|city|state|zip|account|balance|amount|payment|phone/i.test(label))return;
      if(!/(creditor name|lender|servicer|collection agency|card issuer|company you owe|who you owe)/i.test(label))return;
      input.__xpCreditorEnhanced=true;
      input.setAttribute('list',list.id);
      input.setAttribute('autocomplete','organization');
      var status=document.createElement('span');
      status.className='xp-creditor-status';
      status.id='xp-creditor-status-'+index;
      status.textContent=state.language==='es'?'Escriba para ver acreedores comunes.':'Type to see common creditors.';
      input.setAttribute('aria-describedby',status.id);
      input.insertAdjacentElement('afterend',status);
      input.addEventListener('change',function(){
        var match=COMMON_CREDITORS.find(function(name){return name.toLowerCase()===input.value.trim().toLowerCase();});
        if(!match){status.textContent=state.language==='es'?'Use el nombre del estado de cuenta.':'Use the name shown on the latest statement.';return;}
        status.textContent=state.language==='es'?'Acreedor comun encontrado; verifique la direccion.':'Common creditor matched; verify the mailing address.';
        state.creditorMatches.push({name:match,label:label,matchedAt:new Date().toISOString()});
        state.creditorMatches=state.creditorMatches.slice(-25);
        writeState(state);
      });
    }
    function enhanceAll(){document.querySelectorAll('input:not([type="hidden"]):not([type="file"])').forEach(enhance);}
    enhanceAll();
    if(window.MutationObserver)new MutationObserver(enhanceAll).observe(document.body,{childList:true,subtree:true});
  }

  var current=pageKey();
  var state=readState();
  recordVisit(state,current);
  addStyles();
  document.title='Experimental | '+document.title;
  addToolbar(state,current);
  renderGuide(state,current);
  addResume(state,current);
  addSourceAssistants(state,current);
  addCreditorAutocomplete(state,current);
})();
