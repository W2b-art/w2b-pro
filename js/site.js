/* Guillaume Delye — pro redesign · shared engine */
(function(){
const CAT={
  fashion:{label:{es:"Moda",en:"Fashion",fr:"Mode"},place:"Medellín · Corse"},
  hospitality:{label:{es:"Gastronomía",en:"Hospitality",fr:"Gastronomie"},place:"A Stretta · La Gaffe"},
  events:{label:{es:"Eventos",en:"Events",fr:"Événements"},place:"Feniks · Blackout · Deglorian"},
  portraits:{label:{es:"Retrato",en:"Portraits",fr:"Portrait"},place:"Medellín"},
  products:{label:{es:"Producto",en:"Product",fr:"Produit"},place:"Marca · a medida"}
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
 es:{nav_work:"Trabajo",nav_gastro:"Gastronomía",nav_eventos:"Eventos",nav_moda:"Moda",nav_retrato:"Retrato",nav_studio:"Estudio",nav_services:"Servicios",nav_book:"Reservar",nav_contact:"Contacto",scroll:"Baja",menu:"Menú",menu_close:"Cerrar",
  room_gastro_k:"01.1",room_gastro_h:"Gastronomía",room_gastro_p:"Platos, sala y oficio en su luz real, listos para la carta y la prensa.",
  room_eventos_k:"01.2",room_eventos_h:"Eventos",room_eventos_p:"Los instantes clave y la atmósfera, entregados rápido y listos para publicar.",
  room_moda_k:"01.3",room_moda_h:"Moda",room_moda_p:"Medellín · Córcega",
  room_retrato_k:"01.4",room_retrato_h:"Retrato",room_retrato_p:"Medellín",
  room_cta:"Ver la serie",
  hero_t1:"Imágenes que",hero_t2:"se ganan su lugar.",sec_work:"Trabajo seleccionado",
  stmt1:"Hago las fotos para que se usen: en la carta, en un feed, en una campaña. Siempre pensadas para publicarse.",stmt_by:"Guillaume Delye · Fotógrafo · Medellín",
  sec_studio:"Estudio",studio_h:"Fotógrafo francés, con base en Medellín.",
  studio_p1:"Trabajo entre Colombia, Francia y el Mediterráneo. Editorial, gastronomía, eventos y retrato. Cada sesión llega lista para publicar: con color, retoque y una dirección clara.",
  studio_p2:"Del brief a la entrega en 10 a 14 días. Respondo en menos de 48 horas.",
  fact1:"Editorial",fact2:"Gastronomía",fact3:"Eventos",fact4:"Retrato",
  sec_services:"Servicios",st1:"Brief",st2:"Sesión",st3:"Edición",st4:"Entrega",rates_label:"Precio a la medida de tu proyecto",faq_h:"Preguntas frecuentes",
  rates_note:"Cada proyecto es único. Haz un pre-presupuesto en 2 minutos y recibe un rango, o escríbeme para una cotización detallada en 48 h.",
  nav_art:"Portafolio de autor",svc_estimate:"Estimar mi presupuesto",
  book1:"¿Tienes un proyecto? Cuéntamelo.",book_cta:"Enviar un brief",book_book:"Reservar sesión",
  foot_art:"Portafolio de autor ↗",foot_terms:"Términos",foot_privacy:"Privacidad",draft:"Maqueta",
  work_k:"Portafolio",work_h:"Trabajo seleccionado",work_p:"Moda y editorial, retrato y producto. Gastronomía y eventos tienen su propia página. Toca una imagen para verla en grande.",
  studio_k:"Estudio",studio_h1:"Hago imágenes que trabajan para ti.",
  studio_lp:"Soy Guillaume Delye, fotógrafo francés con base en Medellín. Hago imágenes que se ganan su lugar en una carta o un dossier de prensa. Trabajo entre Colombia, Francia y el Mediterráneo, y cada sesión se entrega lista para publicar.",
  studio_lp2:"Del brief a la entrega, normalmente en 10 a 14 días. Editorial, gastronomía, eventos y retrato.",
  svc_k:"Servicios",svc_h:"Cómo trabajamos, y cuánto cuesta.",
  svc_p:"Un proceso claro, un precio cerrado y una entrega lista para usar. Sin sorpresas.",
  con_k:"Contacto",con_big1:"Hablemos de",con_big2:"tu proyecto.",
  con_email:"Correo",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Fotografía de autor",clients_label:"Confían en mí",con_note:"Basado en Medellín, Colombia. Escríbeme por WhatsApp o correo, respondo en menos de 48 h."},
 en:{nav_work:"Work",nav_gastro:"Hospitality",nav_eventos:"Events",nav_moda:"Fashion",nav_retrato:"Portraits",nav_studio:"Studio",nav_services:"Services",nav_book:"Book",nav_contact:"Contact",scroll:"Scroll",menu:"Menu",menu_close:"Close",
  room_gastro_k:"01.1",room_gastro_h:"Hospitality",room_gastro_p:"Dishes, room and craft in their real light, ready for the menu and the press.",
  room_eventos_k:"01.2",room_eventos_h:"Events",room_eventos_p:"Key moments and atmosphere, delivered fast and ready to publish.",
  room_moda_k:"01.3",room_moda_h:"Fashion",room_moda_p:"Medellín · Corsica",
  room_retrato_k:"01.4",room_retrato_h:"Portraits",room_retrato_p:"Medellín",
  room_cta:"View the series",
  hero_t1:"Images that",hero_t2:"earn their place.",sec_work:"Selected Work",
  stmt1:"I make images meant to be used: on the menu, on a feed, in a campaign. Always made to be published.",stmt_by:"Guillaume Delye · Photographer · Medellín",
  sec_studio:"Studio",studio_h:"French photographer, based in Medellín.",
  studio_p1:"I work between Colombia, France and the Mediterranean. Editorial, hospitality, events and portrait. Every shoot ships ready to publish: colour-graded, retouched, with a clear direction.",
  studio_p2:"Brief to delivery in 10 to 14 days. I reply within 48 hours.",
  fact1:"Editorial",fact2:"Hospitality",fact3:"Events",fact4:"Portrait",
  sec_services:"Services",st1:"Brief",st2:"Shoot",st3:"Edit",st4:"Deliver",rates_label:"Pricing built around your project",faq_h:"Frequently asked questions",
  rates_note:"Every project is different. Get a ballpark in two minutes with the pre-quote, or write to me for a detailed quote within 48h.",
  nav_art:"Fine-art portfolio",svc_estimate:"Estimate my budget",
  book1:"Got a project? Tell me about it.",book_cta:"Send a brief",book_book:"Book a session",
  foot_art:"Fine-art portfolio ↗",foot_terms:"Terms",foot_privacy:"Privacy",draft:"Mockup",
  work_k:"Portfolio",work_h:"Selected Work",work_p:"Fashion and editorial, portraits and product. Hospitality and events each have their own page. Tap an image to view it large.",
  studio_k:"Studio",studio_h1:"I make images that work for you.",
  studio_lp:"I'm Guillaume Delye, a French photographer based in Medellín. I make pictures that earn their place on a menu or a press release. I work between Colombia, France and the Mediterranean, and every shoot ships ready to publish.",
  studio_lp2:"Brief to delivery, usually in 10 to 14 days. Editorial, hospitality, events and portrait.",
  svc_k:"Services",svc_h:"How it works, and what it costs.",
  svc_p:"A clear process, a fixed price and a ready-to-use delivery. No surprises.",
  con_k:"Contact",con_big1:"Let's talk about",con_big2:"your project.",
  con_email:"Email",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Fine-art photography",clients_label:"Trusted by",con_note:"Based in Medellín, Colombia. Reach me on WhatsApp or email, I reply within 48h."},
 fr:{nav_work:"Travail",nav_gastro:"Gastronomie",nav_eventos:"Événements",nav_moda:"Mode",nav_retrato:"Portrait",nav_studio:"Studio",nav_services:"Services",nav_book:"Réserver",nav_contact:"Contact",scroll:"Défiler",menu:"Menu",menu_close:"Fermer",
  room_gastro_k:"01.1",room_gastro_h:"Gastronomie",room_gastro_p:"Les plats, la salle et le geste dans leur vraie lumière, prêts pour la carte et la presse.",
  room_eventos_k:"01.2",room_eventos_h:"Événements",room_eventos_p:"Les moments clés et l'ambiance, livrés vite et prêts à publier.",
  room_moda_k:"01.3",room_moda_h:"Mode",room_moda_p:"Medellín · Corse",
  room_retrato_k:"01.4",room_retrato_h:"Portrait",room_retrato_p:"Medellín",
  room_cta:"Voir la série",
  hero_t1:"Des images qui",hero_t2:"gagnent leur place.",sec_work:"Travail sélectionné",
  stmt1:"Je fais des images faites pour servir : sur la carte, sur un feed, dans une campagne. Toujours pensées pour être publiées.",stmt_by:"Guillaume Delye · Photographe · Medellín",
  sec_studio:"Studio",studio_h:"Photographe français, basé à Medellín.",
  studio_p1:"Je travaille entre la Colombie, la France et la Méditerranée. Éditorial, gastronomie, événements et portrait. Chaque séance est livrée prête à publier : étalonnée, retouchée, avec une direction claire.",
  studio_p2:"Du brief à la livraison en 10 à 14 jours. Je réponds sous 48 heures.",
  fact1:"Éditorial",fact2:"Gastronomie",fact3:"Événements",fact4:"Portrait",
  sec_services:"Services",st1:"Brief",st2:"Séance",st3:"Édition",st4:"Livraison",rates_label:"Prix sur mesure, selon vos besoins",faq_h:"Questions fréquentes",
  rates_note:"Chaque projet est unique. Obtenez une fourchette en deux minutes avec le pré-devis, ou écrivez-moi pour un devis détaillé sous 48 h.",
  nav_art:"Portfolio d'auteur",svc_estimate:"Estimer mon budget",
  book1:"Un projet ? Raconte-le-moi.",book_cta:"Envoyer un brief",book_book:"Réserver une séance",
  foot_art:"Portfolio d'auteur ↗",foot_terms:"Conditions",foot_privacy:"Confidentialité",draft:"Maquette",
  work_k:"Portfolio",work_h:"Travail sélectionné",work_p:"Mode et éditorial, portrait et produit. Gastronomie et événements ont leur propre page. Touchez une image pour la voir en grand.",
  studio_k:"Studio",studio_h1:"Je fais des images qui travaillent pour toi.",
  studio_lp:"Je suis Guillaume Delye, photographe français basé à Medellín. Je fais des images qui gagnent leur place sur une carte ou un dossier de presse. Je travaille entre la Colombie, la France et la Méditerranée, et chaque séance est livrée prête à publier.",
  studio_lp2:"Du brief à la livraison, en général sous 10 à 14 jours. Éditorial, gastronomie, événements et portrait.",
  svc_k:"Services",svc_h:"Comment on travaille, et combien ça coûte.",
  svc_p:"Un processus clair, un prix ferme et une livraison prête à l'emploi. Sans surprise.",
  con_k:"Contact",con_big1:"Parlons de",con_big2:"ton projet.",
  con_email:"Email",con_ig:"Instagram",con_wa:"WhatsApp",con_art:"Photographie d'auteur",clients_label:"Ils me font confiance",con_note:"Basé à Medellín, Colombie. Écris-moi sur WhatsApp ou par email, je réponds sous 48 h."}
};
/* rail link set — reduced to reflect real delivered proof: Gastronomía and
   Eventos get full-weight primary entries, Moda and Retrato (no delivered
   case study yet per the council) get smaller "sec" entries. */
const MENU_PRI=[["hospitality","restaurants.html","nav_gastro"],["events","eventos.html","nav_eventos"]];
const MENU_SEC=[["fashion","work.html#fashion","nav_moda"],["portraits","work.html#portraits","nav_retrato"]];
const MENU_REST=[["studio","studio.html","nav_studio"],["services","services.html","nav_services"],["booking","booking.html","nav_book"],["contact","contact.html","nav_contact"]];

let lang=localStorage.getItem('w2b_lang')||'es'; if(!T[lang])lang='es';
let cur=localStorage.getItem('w2b_currency')||(lang==='es'?'COP':'EUR'); if(cur!=='EUR'&&cur!=='COP')cur='EUR';
const REDUCE=matchMedia('(prefers-reduced-motion:reduce)').matches;
const page=document.body.dataset.page||'home';
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);

/* ---- inject right rail ---- */
function navLink(id,href,k,cls){return `<a href="${href}" data-i18n="${k}" class="${cls||''}" ${page===id?'aria-current="page"':''}>${T[lang][k]}</a>`}
function buildRail(){
  const rail=document.createElement('header');rail.className='rail';rail.id='rail';
  rail.innerHTML=`
    <a class="wm fr" href="index.html"><img class="wm-mark" src="images/ui/gd-mark-light.svg" alt=""><span class="wm-name">Guillaume<br>Delye</span><span class="dot"></span></a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false">
      <span class="menu-txt">${T[lang].menu}</span>
      <svg class="ic-menu" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="13" y2="12"/><line x1="4" y1="17" x2="17" y2="17"/></svg>
      <svg class="ic-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" style="display:none"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <nav>${MENU_PRI.map(([id,href,k])=>navLink(id,href,k)).join('')}
      ${MENU_SEC.map(([id,href,k])=>navLink(id,href,k,'sec')).join('')}
      <span class="rail-div" aria-hidden="true"></span>
      ${MENU_REST.map(([id,href,k])=>navLink(id,href,k)).join('')}
      <a class="xart" href="https://w2bphotography.com/" aria-label="${T[lang].nav_art}"><img src="images/ui/w2b-logo.png" alt=""><span data-i18n="nav_art">${T[lang].nav_art}</span></a>
      <div class="bottom nav-switches">
        <div class="switch" role="group" aria-label="Language">
          <button data-lang="es">ES</button><span class="sep">·</span><button data-lang="en">EN</button><span class="sep">·</span><button data-lang="fr">FR</button>
        </div>
        <div class="switch" role="group" aria-label="Currency">
          <button data-cur="EUR">€</button><span class="sep">·</span><button data-cur="COP">$</button>
        </div>
      </div></nav>
    <div class="bottom top-switches">
      <div class="switch" role="group" aria-label="Language">
        <button data-lang="es">ES</button><span class="sep">·</span><button data-lang="en">EN</button><span class="sep">·</span><button data-lang="fr">FR</button>
      </div>
      <div class="switch" role="group" aria-label="Currency">
        <button data-cur="EUR">€</button><span class="sep">·</span><button data-cur="COP">$</button>
      </div>
    </div>`;
  document.body.insertBefore(rail,document.body.firstChild);
  const scrim=document.createElement('div');scrim.className='rail-scrim';scrim.id='railScrim';
  document.body.insertBefore(scrim,rail.nextSibling);
  function toggleMenu(open){
    const btn=rail.querySelector('.menu-btn');
    rail.classList.toggle('open',open);scrim.classList.toggle('show',open);
    btn.setAttribute('aria-expanded',open);
    document.body.style.overflow=open?'hidden':'';
    btn.querySelector('.ic-menu').style.display=open?'none':'';
    btn.querySelector('.ic-close').style.display=open?'':'none';
    btn.querySelector('.menu-txt').textContent=open?T[lang].menu_close:T[lang].menu;
  }
  rail.querySelector('.menu-btn').addEventListener('click',()=>toggleMenu(!rail.classList.contains('open')));
  scrim.addEventListener('click',()=>toggleMenu(false));
  rail.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  rail.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  rail.querySelectorAll('[data-cur]').forEach(b=>b.addEventListener('click',()=>applyCur(b.dataset.cur)));
  addEventListener('scroll',()=>rail.classList.toggle('solid',scrollY>60),{passive:true});
}

/* ---- i18n apply ---- */
function applyLang(l){
  lang=l;localStorage.setItem('w2b_lang',l);document.documentElement.lang=l;
  const d=T[l];$$('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k]!=null)el.textContent=d[k];});
  $$('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  const mt=$('.menu-txt');if(mt){const railOpen=$('#rail')&&$('#rail').classList.contains('open');mt.textContent=railOpen?d.menu_close:d.menu;}
  if(typeof renderGalleries==='function')renderGalleries();
  if(typeof renderRates==='function')renderRates();
  if(typeof renderFaq==='function')renderFaq();
  observe();
}
function applyCur(c){cur=c;localStorage.setItem('w2b_currency',c);$$('[data-cur]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.cur===c));if(typeof renderRates==='function')renderRates();}

/* ---- reveals (fade-up .reveal, clip-path .clip-reveal — same observer) ----
   .clip-reveal wrappers are never themselves clip-path'd (see site.css) so
   IntersectionObserver always has real geometry to measure. A timeout
   fallback still force-reveals anything left unrevealed after 2.5s, as a
   safety net against IO edge cases (fast scroll, odd container timing). */
let io=null;
function observe(){
  if(REDUCE){$$('.reveal,.clip-reveal').forEach(e=>e.classList.add('in'));return;}
  if(io)io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal:not(.in), .clip-reveal:not(.in)').forEach(e=>io.observe(e));
  clearTimeout(window.__revealFallback);
  window.__revealFallback=setTimeout(function(){
    $$('.reveal:not(.in), .clip-reveal:not(.in)').forEach(e=>e.classList.add('in'));
  },2500);
}

/* ---- hero parallax — transform-only, capped small, skipped if reduced motion ---- */
function initParallax(){
  if(REDUCE)return;
  const slides=$('#slides');if(!slides)return;
  let ticking=false;
  addEventListener('scroll',()=>{
    if(ticking)return;ticking=true;
    requestAnimationFrame(()=>{
      const y=Math.max(-24,Math.min(24,scrollY*0.06));
      slides.style.transform=`translateY(${y}px)`;
      ticking=false;
    });
  },{passive:true});
}

/* ---- hero slideshow (home) ---- */
function initHero(){
  const slidesEl=$('#slides'),dotsEl=$('#dots'),capEl=$('#hcap');if(!slidesEl)return;
  /* 2026-10-31: hero now theme-aware — event/nightlife photos (neon pink,
     red stage light) clashed with the navy+gold night palette and the
     cream+gold day palette alike. data-theme is set once pre-paint (see
     <head>, hour-of-day based) and never changes without a reload, so a
     one-time read here is enough — no live listener needed. */
  const isDay=document.documentElement.getAttribute('data-theme')==='light';
  const HERO=(isDay?window.HERO_DAY:window.HERO_NIGHT)||window.HERO_NIGHT||[];
  const HCAP=(isDay?window.HCAP_DAY:window.HCAP_NIGHT)||window.HCAP_NIGHT||[];
  slidesEl.innerHTML=HERO.map((s,i)=>`<div class="slide${i?'':' on'}"><img src="${s}" ${i?'loading="lazy"':'fetchpriority="high"'} alt="${HCAP[i]||''}"></div>`).join('');
  dotsEl.innerHTML=HERO.map((_,i)=>`<button aria-label="Slide ${i+1}" aria-current="${i===0}"></button>`).join('');
  const S=[...slidesEl.children],D=[...dotsEl.children];let hi=0,timer=null;
  const cap=()=>{if(capEl)capEl.textContent=HCAP[hi]||''};
  function go(i){hi=(i+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle('on',k===hi));D.forEach((d,k)=>d.setAttribute('aria-current',k===hi));cap()}
  D.forEach((d,i)=>d.addEventListener('click',()=>{go(i);restart()}));
  function restart(){clearInterval(timer);timer=setInterval(()=>go(hi+1),5000)} // auto-advance always
  cap();restart();
}

/* ---- responsive <picture> markup ----
   Dormant for every photo today — activates only once a gallery-data.js
   item carries a `widths` array (the exact widths .build/responsive.js
   wrote AVIF/WebP/JPEG files at, e.g. [480,768,1200,1800]). No current
   entry has that field, so imgTag() returns the identical plain <img>
   markup used before this existed; dropping new, already-processed
   photos into gallery-data.js with a `widths` array is the only step
   needed to get them served as <picture> — nothing to change here. */
function imgTag(src,alt,opts){
  opts=opts||{};
  const cls=opts.cls?` class="${opts.cls}"`:'';
  const loading=opts.eager?'':' loading="lazy"';
  /* ar = width/height, already computed per item in gallery-data.js for
     masonry column-balancing (see balanceCols). Reusing it here reserves
     the image's real box before it loads, instead of height:auto — the
     masonry grid otherwise has no intrinsic size to lay out against and
     every image loading in shifts the columns below it. */
  const style=opts.ar?` style="aspect-ratio:${opts.ar}"`:'';
  if(!opts.widths||!opts.widths.length){
    return `<img src="${src}" alt="${alt}"${cls}${style}${loading}>`;
  }
  const base=src.replace(/\.[a-z]+$/i,'');
  const widths=opts.widths;
  /* -WIDTHw filename suffix matches the art site's own responsive
     pipeline convention (js/responsive-img.js there) — see .build/
     responsive.js, which writes files in this same shape. */
  const srcset=ext=>widths.map(w=>`${base}-${w}w.${ext} ${w}w`).join(', ');
  const sizes=opts.sizes||'100vw';
  const fallback=`${base}-${widths[widths.length-1]}w.jpg`;
  return `<picture>`+
    `<source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}">`+
    `<source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}">`+
    `<img src="${fallback}" srcset="${srcset('jpg')}" sizes="${sizes}" alt="${alt}"${cls}${style}${loading}>`+
  `</picture>`;
}

/* ---- galleries (work page) + lightbox ---- */
let FLAT=[];
const GCFG={fashion:{f:'wide',cols:3},hospitality:{f:'wide',cols:2},events:{f:'full',cols:2},portraits:{f:'wide',cols:2},products:{f:'wide',cols:3}};
/* real column count at the current width, matching the old CSS breakpoints
   (m3 -> 2 cols <=900px, any -> 1 col <=600px) */
function effectiveCols(cfg){
  const w=innerWidth;
  if(w<=600)return 1;
  if(w<=900)return Math.min(cfg.cols,2);
  return cfg.cols;
}
/* height-balanced columns, using each item's known aspect ratio (ar =
   width/height) as a height-per-unit-width proxy — not the item COUNT CSS
   column-count balances by, which is why that left columns visibly uneven
   (250-480px) whenever a section mixed tall and wide photos. Items are
   sorted tallest-first (LPT — longest processing time first, the standard
   multi-bin scheduling heuristic) before the greedy shortest-column
   assignment: greedy-in-original-order has no real balance guarantee,
   LPT is provably within 4/3 of the optimal split and visibly tighter
   with only 7-9 photos per section. Original curated order is kept
   within each column (stable sort), only which COLUMN an item lands in
   changes. */
function balanceCols(items,startIdx,cols){
  const heights=new Array(cols).fill(0),buckets=Array.from({length:cols},()=>[]);
  const order=items.map((it,i)=>({it,i})).sort((a,b)=>(1/(b.it.ar||1))-(1/(a.it.ar||1)));
  order.forEach(({it,i})=>{
    let shortest=0;
    for(let c=1;c<cols;c++)if(heights[c]<heights[shortest])shortest=c;
    buckets[shortest].push({it,idx:startIdx+i});
    heights[shortest]+=1/(it.ar||1);
  });
  buckets.forEach(b=>b.sort((a,c)=>a.idx-c.idx)); // restore curated order within each column
  return buckets.map(bucket=>`<div class="mcol">${bucket.map(({it,idx})=>
    `<button class="mitem" data-idx="${idx}" aria-label="${it.alt}">${imgTag(it.src,it.alt,{widths:it.widths,sizes:it.sizes,ar:it.ar})}</button>`).join('')}</div>`).join('');
}
window.renderGalleries=function(){
  const host=$('#series-host');if(!host||!window.GALLERY)return;
  FLAT=[];let html='';let n=0;
  const only=document.body.dataset.only,skip=(document.body.dataset.skip||'').split(',').filter(Boolean);
  for(const cat of ['fashion','hospitality','events','portraits','products']){
    if((only&&cat!==only)||skip.includes(cat))continue;
    const c=CAT[cat],items=window.GALLERY[cat]||[],cfg=GCFG[cat]||{f:'wide',cols:2};n++;
    if(!items.length)continue;
    const featIdx=FLAT.length;FLAT.push(items[0]);
    const rest=items.slice(1);
    const startIdx=FLAT.length;
    rest.forEach(it=>FLAT.push(it));
    const cols=effectiveCols(cfg);
    const mas=balanceCols(rest,startIdx,cols);
    html+=`<section class="series" id="${cat}">
      <div class="series-head"><span class="n meta">0${n}</span><h2>${c.label[lang]}</h2><span class="scount meta">— ${items.length}</span><span class="ln"></span><span class="splace meta">${c.place}</span></div>
      <button class="feature feat-${cfg.f}" data-idx="${featIdx}" aria-label="${items[0].alt}">${imgTag(items[0].full,items[0].alt,{eager:true,widths:items[0].fullWidths,sizes:items[0].sizes,ar:items[0].ar})}</button>
      <div class="masonry m${cfg.cols}">${mas}</div></section>`;
  }
  host.innerHTML=html;
  host.querySelectorAll('[data-idx]').forEach(b=>b.addEventListener('click',()=>openLB(+b.dataset.idx)));
};
/* re-balance on breakpoint crossing (debounced) — a JS-computed layout
   needs this where the old CSS column-count adapted on its own */
let resizeTimer=null;
function onGalleryResize(){
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(function(){
    if(typeof window.renderGalleries==='function' && $('#series-host'))window.renderGalleries();
  },200);
}
addEventListener('resize',onGalleryResize,{passive:true});
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
    text:{es:"Moda y editorial pensados como un relato, no un catálogo. Una dirección clara, una estética que se sostiene y planos hechos para ganarse su lugar.",
      en:"Fashion and editorial built like a story, not a catalogue. A clear direction, a look that holds together, and frames made to earn their place.",
      fr:"Mode et éditorial pensés comme un récit, pas un catalogue. Une direction claire, un parti pris qui tient, et des images faites pour gagner leur place."}},
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

/* ---- FAQ — scoped deliberately to facts already asserted elsewhere on
   this site (process steps in booking.html, the 10-14 day delivery window
   in studio_p2/studio_p1, the pre-quote tool in devis.html, the empresa/
   particular split everywhere). No new business claims are made here —
   insurance, multi-property quoting and shooting-while-open-to-the-public
   are real, higher-value questions for a hospitality client but need
   Guillaume's own answer before they can be published; left out on
   purpose rather than guessed. */
const FAQ=[
  {label:{es:"¿Cómo es el proceso?",en:"How does the process work?",fr:"Comment se passe le processus ?"},
    text:{es:"Me escribes con tu idea, hablamos 20 minutos para alinear objetivos y entregables, te envío una propuesta con precio cerrado, y agendamos la sesión. Sin compromiso hasta que apruebes la propuesta.",
      en:"You reach out with your idea, we talk for 20 minutes to align on goals and deliverables, I send a fixed-price proposal, and we lock in the date. No commitment until you approve the proposal.",
      fr:"Tu m'écris ton idée, on échange 20 minutes pour aligner objectifs et livrables, je t'envoie une proposition à prix ferme, et on fixe la date. Sans engagement jusqu'à validation de la proposition."}},
  {label:{es:"¿Cuánto tiempo toma la entrega?",en:"How long does delivery take?",fr:"Combien de temps prend la livraison ?"},
    text:{es:"Del brief a la entrega, normalmente 10 a 14 días.",
      en:"Brief to delivery, usually 10 to 14 days.",
      fr:"Du brief à la livraison, généralement 10 à 14 jours."}},
  {label:{es:"¿Trabajan con empresas y con particulares?",en:"Do you work with businesses and individuals?",fr:"Travaillez-vous avec des entreprises et des particuliers ?"},
    text:{es:"Sí. Restaurantes, marcas y eventos por un lado, retratos y parejas por otro, cada uno con su propio proceso pensado para ese tipo de proyecto.",
      en:"Yes. Restaurants, brands and events on one side, portraits and couples on the other, each with its own process built for that kind of project.",
      fr:"Oui. Restaurants, marques et événements d'un côté, portraits et couples de l'autre, chacun avec son propre processus pensé pour ce type de projet."}},
  {label:{es:"¿Puedo saber un rango de precio antes de reservar?",en:"Can I get a price range before booking?",fr:"Puis-je connaître une fourchette de prix avant de réserver ?"},
    text:{es:"Sí, el pre-presupuesto da un rango orientativo en 2 minutos, sin compromiso. El precio final se cierra en una cotización detallada en 48 h.",
      en:"Yes, the pre-quote tool gives an indicative range in 2 minutes, no commitment. The final price is set in a detailed quote within 48h.",
      fr:"Oui, le pré-devis donne une fourchette indicative en 2 minutes, sans engagement. Le prix final est arrêté dans un devis détaillé sous 48 h."}}
];
window.renderFaq=function(){const el=$('#faq-list');if(!el)return;
  el.innerHTML=FAQ.map(d=>`<details class="sv-item"><summary>${d.label[lang]}<span class="sv-ico" aria-hidden="true"></span></summary><p>${d.text[lang]}</p></details>`).join('');
}

/* ---- init ---- */
buildRail();
const pt=$('#portrait');if(pt&&window.PORTRAIT)pt.src=window.PORTRAIT;
if(page==='home'){initHero();initParallax();}
applyLang(lang);applyCur(cur);
})();
