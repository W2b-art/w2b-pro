/* Guillaume Delye — pro redesign · shared engine */
(function(){
const CAT={
  fashion:{label:{es:"Moda",en:"Fashion",fr:"Mode"},place:"Medellín · Corse"},
  hospitality:{label:{es:"Gastronomía",en:"Hospitality",fr:"Gastronomie"},place:"Excelsior · A Stretta · La Gaffe"},
  events:{label:{es:"Eventos",en:"Events",fr:"Événements"},place:"Feniks · Blackout · Deglorian"},
  portraits:{label:{es:"Retrato",en:"Portraits",fr:"Portrait"},place:"Medellín"}
};
const RATES={
  es:{EUR:[["Editorial","desde €1.200/día"],["Hospitalidad","paquete desde €2.400"],["Evento y reportaje","desde €300"],["Retratos","desde €350"]],
      COP:[["Editorial","desde $4.800.000/día"],["Hospitalidad","paquete desde $9.600.000"],["Evento y reportaje","desde $1.200.000"],["Retratos","desde $1.400.000"]]},
  en:{EUR:[["Editorial","from €1,200/day"],["Hospitality","package from €2,400"],["Event & reportage","from €300"],["Portraits","from €350"]],
      COP:[["Editorial","from $4,800,000/day"],["Hospitality","package from $9,600,000"],["Event & reportage","from $1,200,000"],["Portraits","from $1,400,000"]]},
  fr:{EUR:[["Éditorial","dès 1 200 €/jour"],["Hospitalité","forfait dès 2 400 €"],["Événement & reportage","dès 300 €"],["Portraits","dès 350 €"]],
      COP:[["Éditorial","dès 4 800 000 $/jour"],["Hospitalité","forfait dès 9 600 000 $"],["Événement & reportage","dès 1 200 000 $"],["Portraits","dès 1 400 000 $"]]}
};
const VIEW={es:"Ver serie",en:"View series",fr:"Voir la série"};
const T={
 es:{nav_work:"Trabajo",nav_studio:"Estudio",nav_services:"Servicios",nav_book:"Reservar",nav_contact:"Contacto",scroll:"Baja",menu:"Menú",
  hero_t1:"Imágenes que",hero_t2:"se ganan la portada.",sec_work:"Trabajo seleccionado",
  stmt1:"No hago fotos bonitas.",stmt2:"Hago imágenes que venden, que se publican y que se recuerdan.",stmt_by:"Guillaume Delye · Fotógrafo · Medellín",
  sec_studio:"Estudio",studio_h:"Fotógrafo francés, con base en Medellín.",
  studio_p1:"Trabajo entre Colombia, Francia y el Mediterráneo. Editorial, gastronomía, eventos y retrato. Cada sesión llega lista para publicar: con color, retoque y una dirección clara.",
  studio_p2:"Del brief a la entrega en 10 a 14 días. Respondo en menos de 48 horas.",
  fact1:"Editorial",fact2:"Gastronomía",fact3:"Eventos",fact4:"Retrato",
  sec_services:"Servicios",st1:"Brief",st2:"Sesión",st3:"Edición",st4:"Entrega",rates_label:"Precio a la medida de tu proyecto",
  rates_note:"Cada proyecto es único. Haz un pre-presupuesto en 2 minutos y recibe un rango, o escríbeme para una cotización detallada en 48 h.",
  nav_art:"Portafolio de autor",svc_estimate:"Estimar mi presupuesto",
  book1:"¿Tienes un proyecto?",book2:"Cuéntamelo.",book_cta:"Enviar un brief",book_book:"Reservar sesión",
  foot_art:"Portafolio de autor ↗",foot_terms:"Términos",foot_privacy:"Privacidad",draft:"Maqueta",
  work_k:"Portafolio",work_h:"Trabajo seleccionado",work_p:"Cuatro series. Moda y editorial, gastronomía, eventos y retrato. Toca una imagen para verla en grande.",
  studio_k:"Estudio",studio_h1:"Hago imágenes que trabajan para ti.",
  studio_lp:"Soy Guillaume Delye, fotógrafo francés con base en Medellín. Hago imágenes que se ganan su lugar en una portada, una carta o un dossier de prensa. Trabajo entre Colombia, Francia y el Mediterráneo, y cada sesión se entrega lista para publicar.",
  studio_lp2:"Del brief a la entrega, normalmente en 10 a 14 días. Editorial, gastronomía, eventos y retrato.",
  svc_k:"Servicios",svc_h:"Cómo trabajamos, y cuánto cuesta.",
  svc_p:"Un proceso claro, un precio cerrado y una entrega lista para usar. Sin sorpresas.",
  con_k:"Contacto",con_big1:"Hablemos de",con_big2:"tu proyecto.",
  con_email:"Correo",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Fotografía de autor",clients_label:"Confían en mí",con_note:"Basado en Medellín, Colombia. Escríbeme por WhatsApp o correo, respondo en menos de 48 h."},
 en:{nav_work:"Work",nav_studio:"Studio",nav_services:"Services",nav_book:"Book",nav_contact:"Contact",scroll:"Scroll",menu:"Menu",
  hero_t1:"Images that",hero_t2:"earn the cover.",sec_work:"Selected Work",
  stmt1:"I don't take pretty pictures.",stmt2:"I make images that sell, that get published, and that stay with you.",stmt_by:"Guillaume Delye · Photographer · Medellín",
  sec_studio:"Studio",studio_h:"French photographer, based in Medellín.",
  studio_p1:"I work between Colombia, France and the Mediterranean. Editorial, hospitality, events and portrait. Every shoot ships ready to publish: colour-graded, retouched, with a clear direction.",
  studio_p2:"Brief to delivery in 10 to 14 days. I reply within 48 hours.",
  fact1:"Editorial",fact2:"Hospitality",fact3:"Events",fact4:"Portrait",
  sec_services:"Services",st1:"Brief",st2:"Shoot",st3:"Edit",st4:"Deliver",rates_label:"Pricing built around your project",
  rates_note:"Every project is different. Get a ballpark in two minutes with the pre-quote, or write to me for a detailed quote within 48h.",
  nav_art:"Fine-art portfolio",svc_estimate:"Estimate my budget",
  book1:"Got a project?",book2:"Tell me about it.",book_cta:"Send a brief",book_book:"Book a session",
  foot_art:"Fine-art portfolio ↗",foot_terms:"Terms",foot_privacy:"Privacy",draft:"Mockup",
  work_k:"Portfolio",work_h:"Selected Work",work_p:"Four series. Fashion and editorial, hospitality, events and portrait. Tap an image to view it large.",
  studio_k:"Studio",studio_h1:"I make images that work for you.",
  studio_lp:"I'm Guillaume Delye, a French photographer based in Medellín. I make pictures that earn their place on a cover, a menu or a press release. I work between Colombia, France and the Mediterranean, and every shoot ships ready to publish.",
  studio_lp2:"Brief to delivery, usually in 10 to 14 days. Editorial, hospitality, events and portrait.",
  svc_k:"Services",svc_h:"How it works, and what it costs.",
  svc_p:"A clear process, a fixed price and a ready-to-use delivery. No surprises.",
  con_k:"Contact",con_big1:"Let's talk about",con_big2:"your project.",
  con_email:"Email",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Fine-art photography",clients_label:"Trusted by",con_note:"Based in Medellín, Colombia. Reach me on WhatsApp or email, I reply within 48h."},
 fr:{nav_work:"Travail",nav_studio:"Studio",nav_services:"Services",nav_book:"Réserver",nav_contact:"Contact",scroll:"Défiler",menu:"Menu",
  hero_t1:"Des images qui",hero_t2:"gagnent la couverture.",sec_work:"Travail sélectionné",
  stmt1:"Je ne fais pas de jolies photos.",stmt2:"Je fais des images qui vendent, qui se publient et qu'on retient.",stmt_by:"Guillaume Delye · Photographe · Medellín",
  sec_studio:"Studio",studio_h:"Photographe français, basé à Medellín.",
  studio_p1:"Je travaille entre la Colombie, la France et la Méditerranée. Éditorial, gastronomie, événements et portrait. Chaque séance est livrée prête à publier : étalonnée, retouchée, avec une direction claire.",
  studio_p2:"Du brief à la livraison en 10 à 14 jours. Je réponds sous 48 heures.",
  fact1:"Éditorial",fact2:"Gastronomie",fact3:"Événements",fact4:"Portrait",
  sec_services:"Services",st1:"Brief",st2:"Séance",st3:"Édition",st4:"Livraison",rates_label:"Prix sur mesure, selon vos besoins",
  rates_note:"Chaque projet est unique. Obtenez une fourchette en deux minutes avec le pré-devis, ou écrivez-moi pour un devis détaillé sous 48 h.",
  nav_art:"Portfolio d'auteur",svc_estimate:"Estimer mon budget",
  book1:"Un projet ?",book2:"Raconte-le-moi.",book_cta:"Envoyer un brief",book_book:"Réserver une séance",
  foot_art:"Portfolio d'auteur ↗",foot_terms:"Conditions",foot_privacy:"Confidentialité",draft:"Maquette",
  work_k:"Portfolio",work_h:"Travail sélectionné",work_p:"Quatre séries. Mode et éditorial, gastronomie, événements et portrait. Touche une image pour la voir en grand.",
  studio_k:"Studio",studio_h1:"Je fais des images qui travaillent pour toi.",
  studio_lp:"Je suis Guillaume Delye, photographe français basé à Medellín. Je fais des images qui gagnent leur place sur une couverture, une carte ou un dossier de presse. Je travaille entre la Colombie, la France et la Méditerranée, et chaque séance est livrée prête à publier.",
  studio_lp2:"Du brief à la livraison, en général sous 10 à 14 jours. Éditorial, gastronomie, événements et portrait.",
  svc_k:"Services",svc_h:"Comment on travaille, et combien ça coûte.",
  svc_p:"Un processus clair, un prix ferme et une livraison prête à l'emploi. Sans surprise.",
  con_k:"Contact",con_big1:"Parlons de",con_big2:"ton projet.",
  con_email:"Email",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Photographie d'auteur",clients_label:"Ils me font confiance",con_note:"Basé à Medellín, Colombie. Écris-moi sur WhatsApp ou par email, je réponds sous 48 h."}
};
const MENU=[["work","work.html","nav_work"],["studio","studio.html","nav_studio"],["services","services.html","nav_services"],["booking","booking.html","nav_book"],["contact","contact.html","nav_contact"]];

let lang=localStorage.getItem('w2b_lang')||'es'; if(!T[lang])lang='es';
let cur=localStorage.getItem('w2b_currency')||(lang==='es'?'COP':'EUR'); if(cur!=='EUR'&&cur!=='COP')cur='EUR';
const REDUCE=matchMedia('(prefers-reduced-motion:reduce)').matches;
const page=document.body.dataset.page||'home';
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);

/* ---- inject right rail ---- */
function buildRail(){
  const rail=document.createElement('header');rail.className='rail';rail.id='rail';
  rail.innerHTML=`
    <a class="wm fr" href="index.html"><img class="wm-mark" src="images/ui/gd-mark-light.svg" alt=""><span class="wm-name">Guillaume<br>Delye</span><span class="dot"></span></a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <nav>${MENU.map(([id,href,k])=>`<a href="${href}" data-i18n="${k}" ${page===id?'aria-current="page"':''}>${T[lang][k]}</a>`).join('')}
      <a class="xart" href="https://w2bphotography.com/" aria-label="${T[lang].nav_art}"><img src="images/ui/w2b-logo.png" alt=""><span data-i18n="nav_art">${T[lang].nav_art}</span></a></nav>
    <div class="bottom">
      <div class="switch" role="group" aria-label="Language">
        <button data-lang="es">ES</button><span class="sep">·</span><button data-lang="en">EN</button><span class="sep">·</span><button data-lang="fr">FR</button>
      </div>
      <div class="switch" role="group" aria-label="Currency">
        <button data-cur="EUR">€</button><span class="sep">·</span><button data-cur="COP">$</button>
      </div>
    </div>`;
  document.body.insertBefore(rail,document.body.firstChild);
  rail.querySelector('.menu-btn').addEventListener('click',e=>{const o=rail.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});
  rail.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  rail.querySelectorAll('[data-cur]').forEach(b=>b.addEventListener('click',()=>applyCur(b.dataset.cur)));
  addEventListener('scroll',()=>rail.classList.toggle('solid',scrollY>60),{passive:true});
}

/* ---- i18n apply ---- */
function applyLang(l){
  lang=l;localStorage.setItem('w2b_lang',l);document.documentElement.lang=l;
  const d=T[l];$$('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k]!=null)el.textContent=d[k];});
  $$('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  if(typeof renderWork==='function')renderWork();
  if(typeof renderGalleries==='function')renderGalleries();
  if(typeof renderRates==='function')renderRates();
  observe();
}
function applyCur(c){cur=c;localStorage.setItem('w2b_currency',c);$$('[data-cur]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.cur===c));if(typeof renderRates==='function')renderRates();}

/* ---- reveals ---- */
let io=null;
function observe(){if(REDUCE){$$('.reveal').forEach(e=>e.classList.add('in'));return;}if(io)io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal:not(.in)').forEach(e=>io.observe(e))}

/* ---- hero slideshow (home) ---- */
function initHero(){
  const slidesEl=$('#slides'),dotsEl=$('#dots'),capEl=$('#hcap');if(!slidesEl)return;
  slidesEl.innerHTML=window.HERO.map((s,i)=>`<div class="slide${i?'':' on'}"><img src="${s}" ${i?'loading="lazy"':'fetchpriority="high"'} alt="${window.HCAP[i]||''}"></div>`).join('');
  dotsEl.innerHTML=window.HERO.map((_,i)=>`<button aria-label="Slide ${i+1}" aria-current="${i===0}"></button>`).join('');
  const S=[...slidesEl.children],D=[...dotsEl.children];let hi=0,timer=null;
  const cap=()=>{if(capEl)capEl.textContent=window.HCAP[hi]||''};
  function go(i){hi=(i+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle('on',k===hi));D.forEach((d,k)=>d.setAttribute('aria-current',k===hi));cap()}
  D.forEach((d,i)=>d.addEventListener('click',()=>{go(i);restart()}));
  function restart(){clearInterval(timer);timer=setInterval(()=>go(hi+1),5000)} // auto-advance always
  cap();restart();
}

/* ---- work plates (home) ---- */
window.renderWork=function(){
  const el=$('#plates');if(!el||!window.WORKCOV)return;
  el.innerHTML=window.WORKCOV.map((w,i)=>{const c=CAT[w.cat];
    return `<a class="plate reveal" href="work.html#${w.cat}"><img src="${w.cover}" alt="${c.label[lang]}">
      <div class="cap"><div><b>${c.label[lang]}</b><span class="sub meta">0${i+1} · ${c.place}</span></div>
      <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></a>`;}).join('');
}

/* ---- galleries (work page) + lightbox ---- */
let FLAT=[];
const GCFG={fashion:{f:'wide',cols:3},hospitality:{f:'wide',cols:2},events:{f:'full',cols:2},portraits:{f:'wide',cols:2}};
window.renderGalleries=function(){
  const host=$('#series-host');if(!host||!window.GALLERY)return;
  FLAT=[];let html='';let n=0;
  for(const cat of ['fashion','hospitality','events','portraits']){
    const c=CAT[cat],items=window.GALLERY[cat]||[],cfg=GCFG[cat]||{f:'wide',cols:2};n++;
    if(!items.length)continue;
    const featIdx=FLAT.length;FLAT.push(items[0]);
    let mas='';
    for(let i=1;i<items.length;i++){const idx=FLAT.length;FLAT.push(items[i]);
      mas+=`<button class="mitem" data-idx="${idx}" aria-label="${items[i].alt}"><img src="${items[i].src}" alt="${items[i].alt}" loading="lazy"></button>`;}
    html+=`<section class="series" id="${cat}">
      <div class="series-head"><span class="n meta">0${n}</span><h2>${c.label[lang]}</h2><span class="scount meta">— ${items.length}</span><span class="ln"></span><span class="splace meta">${c.place}</span></div>
      <button class="feature feat-${cfg.f}" data-idx="${featIdx}" aria-label="${items[0].alt}"><img src="${items[0].full}" alt="${items[0].alt}"></button>
      <div class="masonry m${cfg.cols}">${mas}</div></section>`;
  }
  host.innerHTML=html;
  host.querySelectorAll('[data-idx]').forEach(b=>b.addEventListener('click',()=>openLB(+b.dataset.idx)));
}
let lbi=0;
function openLB(i){let lb=$('#lb');if(!lb){lb=document.createElement('div');lb.id='lb';lb.className='lb';lb.innerHTML=`
  <button class="x" aria-label="Close">✕ Esc</button>
  <button class="nav prev" aria-label="Prev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>
  <img alt=""><button class="nav next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>
  <div class="cap"></div>`;document.body.appendChild(lb);
  lb.querySelector('.x').addEventListener('click',closeLB);
  lb.querySelector('.prev').addEventListener('click',()=>show(lbi-1));
  lb.querySelector('.next').addEventListener('click',()=>show(lbi+1));
  lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});
}
  show(i);$('#lb').classList.add('open');document.body.style.overflow='hidden';
}
function show(i){lbi=(i+FLAT.length)%FLAT.length;const it=FLAT[lbi],lb=$('#lb');lb.querySelector('img').src=it.full;lb.querySelector('img').alt=it.alt;lb.querySelector('.cap').textContent=it.alt;}
function closeLB(){const lb=$('#lb');if(lb)lb.classList.remove('open');document.body.style.overflow=''}
addEventListener('keydown',e=>{if(!$('#lb')||!$('#lb').classList.contains('open'))return;if(e.key==='Escape')closeLB();else if(e.key==='ArrowRight')show(lbi+1);else if(e.key==='ArrowLeft')show(lbi-1)});

/* ---- services: vision per domain (replaces the public price grid) ---- */
const SVISION=[
  {k:'editorial',label:{es:"Editorial y moda",en:"Editorial & fashion",fr:"Éditorial & mode"},
    text:{es:"Moda y editorial pensados como un relato, no un catálogo. Una dirección clara, una estética que se sostiene y planos hechos para ganar la portada.",
      en:"Fashion and editorial built like a story, not a catalogue. A clear direction, a look that holds together, and frames made to earn the cover.",
      fr:"Mode et éditorial pensés comme un récit, pas un catalogue. Une direction claire, un parti pris qui tient, et des images faites pour gagner la couverture."}},
  {k:'hospitality',label:{es:"Gastronomía y hostelería",en:"Hospitality",fr:"Gastronomie & hôtellerie"},
    text:{es:"Restaurantes, bares y hostelería fotografiados para dar hambre. Los platos, la sala y el oficio en su luz real, listos para la carta, el kit de prensa y las redes.",
      en:"Restaurants, bars and hospitality shot to make people hungry. The dishes, the room and the craft in their real light, ready for the menu, the press kit and the feed.",
      fr:"Restaurants, bars et hôtellerie photographiés pour donner faim. Les plats, la salle et le geste dans leur vraie lumière, prêts pour la carte, le dossier de presse et les réseaux."}},
  {k:'events',label:{es:"Eventos y reportaje",en:"Events & reportage",fr:"Événements & reportage"},
    text:{es:"Eventos y reportaje cubiertos al ritmo del momento. Los instantes clave, los rostros y la atmósfera, entregados rápido y listos para publicar.",
      en:"Events and reportage covered as they unfold. The key moments, the faces and the atmosphere, delivered fast and ready to publish.",
      fr:"Événements et reportage couverts au fil de l'instant. Les moments clés, les visages et l'ambiance, livrés vite et prêts à publier."}},
  {k:'portrait',label:{es:"Retrato",en:"Portrait",fr:"Portrait"},
    text:{es:"Retratos con presencia, para una marca, un equipo o una página de prensa. Dirigidos para sentirse naturales, iluminados para mostrar a cada quien en su mejor versión.",
      en:"Portraits with presence, for a brand, a team or a press page. Directed to feel natural, lit to show each person at their best.",
      fr:"Des portraits qui ont de la présence, pour une marque, une équipe ou une page de presse. Dirigés pour rester naturels, éclairés pour montrer chacun sous son meilleur jour."}}
];
window.renderRates=function(){const el=$('#rates');if(!el)return;
  el.innerHTML=SVISION.map(d=>`<details class="sv-item"><summary>${d.label[lang]}<span class="sv-ico" aria-hidden="true"></span></summary><p>${d.text[lang]}</p></details>`).join('');
}

/* ---- init ---- */
buildRail();
const pt=$('#portrait');if(pt&&window.PORTRAIT)pt.src=window.PORTRAIT;
if(page==='home')initHero();
applyLang(lang);applyCur(cur);
})();
