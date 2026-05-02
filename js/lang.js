/* ============================================================
   Guillaume Delye — Language System
   ============================================================ */

const TRANSLATIONS = {
  en: {
    nav_home:       "Home",
    nav_galleries:  "Work",
    nav_about:      "About",
    nav_contact:    "Contact",
    nav_art:        "Art ↗",
    nav_status:     "Booking 2026 · Replies ≤ 48h",

    hero_eyebrow:   "Editorial &amp; commercial photographer",
    hero_title_1:   "Images that sell",
    hero_title_2:   "the brief.",
    hero_tagline:   "Fashion covers, hospitality campaigns, festival reportage. Based in Medellín — working France, the Mediterranean, and Latin America.",
    hero_cta:       "See selected work",
    hero_cta2:      "Send a brief →",

    sec_work:       "Selected Work",
    sec_about:      "Studio",
    sec_clients:    "Featured In",
    view_gallery:   "View",

    gal_fashion_title:      "Fashion & Editorial",
    gal_fashion_meta:       "Editorial · Lookbooks · Covers",
    gal_restaurants_title:  "Restaurants & Hospitality",
    gal_restaurants_meta:   "Atmospheres · Plating · Editorial",
    gal_events_title:       "Events & Reportage",
    gal_events_meta:        "Festivals · Performance · Live",
    gal_portraits_title:    "Portraits",
    gal_portraits_meta:     "Family · Personal · Editorial",

    /* About snippet on homepage */
    about_h2_1:     "Editorial-grade images,",
    about_h2_2:     "delivered on brief.",
    about_p1:       "I'm Guillaume Delye — a French photographer based in Medellín. I make pictures that earn their place on a cover, a menu, or a press release. Every shoot ships ready-to-publish — colour-graded, retouched, and captioned.",
    about_p2:       "Recent work: covers for Vogue and Cosmopolitan, the launch campaigns for La Gaffe and A Stretta in Corsica, and festival reportage for Feniks. Brief → shoot → edit → deliver, typically inside 10–14 days.",
    about_art_nod:  "Also working in fine art — see the personal portfolio",
    about_read:     "Read more",

    /* Process strip */
    sec_process:    "How it works",
    proc_1_title:   "Brief",
    proc_1_text:    "We agree on the look, scope, dates, and deliverables. Quote within 48h.",
    proc_2_title:   "Shoot",
    proc_2_text:    "On location with light, art direction, and a working selection on set.",
    proc_3_title:   "Edit",
    proc_3_text:    "Hand-graded selects, full retouching, file delivery in your specs.",
    proc_4_title:   "Deliver",
    proc_4_text:    "Final files in 10–14 days. Rush turnarounds available.",

    /* Trust signals */
    sec_testimonials: "Selected words",
    test_1_quote:    "Guillaume turned a complicated brief into a single calm image. We used it on the cover.",
    test_1_attr:     "— Editorial Director, Cosmopolitan",
    test_2_quote:    "He shoots like he's already seen the magazine. Every frame on every shoot is usable.",
    test_2_attr:     "— Creative Lead, La Gaffe",
    test_3_quote:    "Reliable, fast, and the images speak. We rebooked within a week.",
    test_3_attr:     "— Producer, Feniks Festival",

    /* Rates / availability */
    rates_label:    "Day rate from",
    rates_editorial:"Editorial · from €1,200 / day",
    rates_hospo:    "Hospitality · package from €2,400",
    rates_event:    "Event &amp; reportage · half-day from €700",
    rates_note:     "All rates exclude travel, licensing, and post. Detailed quote within 48h of brief.",

    bridge_text:    "A separate practice in fine art photography.",
    bridge_link:    "Visit the art portfolio ↗",

    footer_copy:    "© Guillaume Delye — All rights reserved",

    back_home:      "← Back",
    photo_count:    "images",

    /* Contact */
    contact_title:  "Send a brief.",
    contact_sub:    "The more specific, the faster the quote. I reply to every brief within 48 hours.",
    form_name:      "Name &amp; company",
    form_email:     "Email",
    form_service:   "Type of project",
    form_budget:    "Budget range",
    form_dates:     "Shoot dates &amp; location",
    form_message:   "The brief — what's the picture for, who'll see it, what success looks like",
    form_submit:    "Send brief →",
    form_success:   "Thanks — your brief is in. You'll hear back within 48 hours.",
    contact_direct: "Or write directly to",

    srv_fashion:      "Fashion / Editorial",
    srv_restaurants:  "Restaurant / Hospitality",
    srv_events:       "Event / Reportage",
    srv_portraits:    "Portrait",
    srv_other:        "Not sure yet — let's talk",

    bud_under_1k:     "Under €1,000",
    bud_1_3k:         "€1,000 – €3,000",
    bud_3_8k:         "€3,000 – €8,000",
    bud_8k_plus:      "€8,000+",
    bud_unsure:       "Unsure — open to advice",

    /* About page */
    about_page_title:  "Guillaume Delye",
    about_page_lead:   "Editorial &amp; commercial photographer · Medellín.",
    about_page_p1:     "I'm Guillaume Delye — a French photographer based in Medellín, Colombia. I shoot fashion, hospitality, and reportage for editorial and brand clients across Europe and Latin America.",
    about_page_p2:     "Recent: covers for Vogue and Cosmopolitan, the launch shoot for La Gaffe (Corsica) and A Stretta, and festival reportage for Feniks. I shoot tight selects on set, deliver final files in 10–14 days, and bill in EUR or USD.",
    about_page_p3:     "On assignment across Latin America, France, the Mediterranean — and where the brief takes us. Send a brief and I will reply within 48 hours.",
    about_page_clients_label: "Selected clients",
    about_page_clients: "Vogue · Cosmopolitan · La Gaffe · A Stretta · Feniks Festival",
    about_page_locations_label: "Locations",
    about_page_locations: "Medellín · Latin America · France · Mediterranean · International",
  },

  fr: {
    nav_home:       "Accueil",
    nav_galleries:  "Travaux",
    nav_about:      "À propos",
    nav_contact:    "Contact",
    nav_art:        "Art ↗",
    nav_status:     "Réservations 2026 · Réponse ≤ 48h",

    hero_eyebrow:   "Photographe éditorial &amp; commercial",
    hero_title_1:   "Des images au",
    hero_title_2:   "service du brief.",
    hero_tagline:   "Couvertures mode, campagnes hôtellerie-restauration, reportage. Basé à Medellín — France, Méditerranée et Amérique latine.",
    hero_cta:       "Voir une sélection",
    hero_cta2:      "Envoyer un brief →",

    sec_work:       "Travaux sélectionnés",
    sec_about:      "Studio",
    sec_clients:    "Vu dans",
    view_gallery:   "Voir",

    gal_fashion_title:      "Mode & Éditorial",
    gal_fashion_meta:       "Éditorial · Lookbooks · Couvertures",
    gal_restaurants_title:  "Restaurants & Hôtellerie",
    gal_restaurants_meta:   "Ambiances · Dressage · Éditorial",
    gal_events_title:       "Événements & Reportage",
    gal_events_meta:        "Festivals · Performance · Live",
    gal_portraits_title:    "Portraits",
    gal_portraits_meta:     "Famille · Personnel · Éditorial",

    about_h2_1:     "Des images au niveau éditorial,",
    about_h2_2:     "livrées sur brief.",
    about_p1:       "Je suis Guillaume Delye — photographe français basé à Medellín. Je fais des images dignes d'une couverture, d'une carte ou d'un communiqué. Chaque shooting est livré prêt à publier — étalonné, retouché, légendé.",
    about_p2:       "Récemment : couvertures pour Vogue et Cosmopolitan, campagnes de lancement pour La Gaffe et A Stretta en Corse, reportage pour le festival Feniks. Brief → shooting → édition → livraison, généralement sous 10 à 14 jours.",
    about_art_nod:  "Aussi actif en photographie d'art — voir le portfolio personnel",
    about_read:     "En savoir plus",

    sec_process:    "Comment ça marche",
    proc_1_title:   "Brief",
    proc_1_text:    "Direction artistique, périmètre, dates, livrables. Devis sous 48h.",
    proc_2_title:   "Shooting",
    proc_2_text:    "Sur place, lumière, direction, sélection en cours de prise.",
    proc_3_title:   "Édition",
    proc_3_text:    "Sélection retouchée à la main, étalonnage, livraison aux specs.",
    proc_4_title:   "Livraison",
    proc_4_text:    "Fichiers finaux sous 10–14 jours. Express possible.",

    sec_testimonials: "Quelques mots",
    test_1_quote:    "Guillaume a transformé un brief compliqué en une seule image calme. On l'a mise en couverture.",
    test_1_attr:     "— Directrice éditoriale, Cosmopolitan",
    test_2_quote:    "Il photographie comme s'il avait déjà vu le magazine. Chaque image est exploitable.",
    test_2_attr:     "— Direction créative, La Gaffe",
    test_3_quote:    "Fiable, rapide, des images qui parlent. Re-réservé une semaine plus tard.",
    test_3_attr:     "— Production, festival Feniks",

    rates_label:    "Tarif jour à partir de",
    rates_editorial:"Éditorial · à partir de 1 200 € / jour",
    rates_hospo:    "Hôtellerie-restauration · forfait à partir de 2 400 €",
    rates_event:    "Événement &amp; reportage · demi-journée à partir de 700 €",
    rates_note:     "Hors déplacements, droits, post-prod. Devis détaillé sous 48h après brief.",

    bridge_text:    "Une pratique parallèle en photographie d'art.",
    bridge_link:    "Voir le portfolio artistique ↗",

    footer_copy:    "© Guillaume Delye — Tous droits réservés",

    back_home:      "← Retour",
    photo_count:    "images",

    contact_title:  "Envoyer un brief.",
    contact_sub:    "Plus c'est précis, plus le devis est rapide. Je réponds à chaque brief sous 48 heures.",
    form_name:      "Nom &amp; structure",
    form_email:     "E-mail",
    form_service:   "Type de projet",
    form_budget:    "Budget",
    form_dates:     "Dates &amp; lieu de shooting",
    form_message:   "Le brief — à quoi sert l'image, qui la verra, ce qu'est une réussite",
    form_submit:    "Envoyer le brief →",
    form_success:   "Merci — votre brief est arrivé. Réponse sous 48 heures.",
    contact_direct: "Ou écrire directement à",

    srv_fashion:      "Mode / Éditorial",
    srv_restaurants:  "Restaurant / Hôtellerie",
    srv_events:       "Événement / Reportage",
    srv_portraits:    "Portrait",
    srv_other:        "Pas encore décidé — on en parle",

    bud_under_1k:     "Moins de 1 000 €",
    bud_1_3k:         "1 000 € – 3 000 €",
    bud_3_8k:         "3 000 € – 8 000 €",
    bud_8k_plus:      "8 000 € et +",
    bud_unsure:       "Pas sûr·e — ouvert·e aux conseils",

    about_page_title:  "Guillaume Delye",
    about_page_lead:   "Photographe éditorial &amp; commercial · Medellín.",
    about_page_p1:     "Je suis Guillaume Delye — photographe français basé à Medellín, Colombie. Je shoote mode, hôtellerie-restauration et reportage pour des clients éditoriaux et de marque, en Europe et en Amérique latine.",
    about_page_p2:     "Récemment : couvertures Vogue et Cosmopolitan, le shooting de lancement pour La Gaffe (Corse) et A Stretta, reportage festival pour Feniks. Sélection serrée à la prise de vue, livraison sous 10 à 14 jours, facturation EUR ou USD.",
    about_page_p3:     "En mission en Amérique latine, en France, en Méditerranée — et là où le brief mène. Envoyez un brief, réponse sous 48 heures.",
    about_page_clients_label: "Clients sélectionnés",
    about_page_clients: "Vogue · Cosmopolitan · La Gaffe · A Stretta · Feniks Festival",
    about_page_locations_label: "Zones d'intervention",
    about_page_locations: "Medellín · Amérique latine · France · Missions internationales",
  },

  es: {
    nav_home:       "Inicio",
    nav_galleries:  "Trabajo",
    nav_about:      "Acerca",
    nav_contact:    "Contacto",
    nav_art:        "Arte ↗",
    nav_status:     "Reservas 2026 · Respuesta ≤ 48h",

    hero_eyebrow:   "Fotógrafo editorial &amp; comercial",
    hero_title_1:   "Imágenes que",
    hero_title_2:   "venden el brief.",
    hero_tagline:   "Portadas de moda, campañas de hostelería, reportaje. Basado en Medellín — Francia, Mediterráneo y Latinoamérica.",
    hero_cta:       "Ver una selección",
    hero_cta2:      "Enviar un brief →",

    sec_work:       "Trabajos seleccionados",
    sec_about:      "Estudio",
    sec_clients:    "Visto en",
    view_gallery:   "Ver",

    gal_fashion_title:      "Moda & Editorial",
    gal_fashion_meta:       "Editorial · Lookbooks · Portadas",
    gal_restaurants_title:  "Restaurantes & Hostelería",
    gal_restaurants_meta:   "Ambientes · Emplatado · Editorial",
    gal_events_title:       "Eventos & Reportaje",
    gal_events_meta:        "Festivales · Actuación · En directo",
    gal_portraits_title:    "Retratos",
    gal_portraits_meta:     "Familia · Personal · Editorial",

    about_h2_1:     "Imágenes con calidad editorial,",
    about_h2_2:     "entregadas según el brief.",
    about_p1:       "Soy Guillaume Delye — fotógrafo francés afincado en Medellín. Hago imágenes que se ganan su sitio en una portada, una carta o una nota de prensa. Cada sesión se entrega lista para publicar — etalonada, retocada y subtitulada.",
    about_p2:       "Reciente: portadas para Vogue y Cosmopolitan, las campañas de lanzamiento de La Gaffe y A Stretta en Córcega, reportaje del festival Feniks. Brief → sesión → edición → entrega, normalmente en 10–14 días.",
    about_art_nod:  "También activo en fotografía artística — ver el portfolio personal",
    about_read:     "Leer más",

    sec_process:    "Cómo funciona",
    proc_1_title:   "Brief",
    proc_1_text:    "Acordamos look, alcance, fechas y entregables. Presupuesto en 48h.",
    proc_2_title:   "Sesión",
    proc_2_text:    "En localización: luz, dirección, selección sobre la marcha.",
    proc_3_title:   "Edición",
    proc_3_text:    "Selección retocada a mano, etalonaje, archivos según specs.",
    proc_4_title:   "Entrega",
    proc_4_text:    "Archivos finales en 10–14 días. Express disponible.",

    sec_testimonials: "Algunas palabras",
    test_1_quote:    "Guillaume convirtió un brief complicado en una sola imagen tranquila. Fue a portada.",
    test_1_attr:     "— Directora editorial, Cosmopolitan",
    test_2_quote:    "Fotografía como si ya hubiera visto la revista. Cada toma es publicable.",
    test_2_attr:     "— Dirección creativa, La Gaffe",
    test_3_quote:    "Fiable, rápido, imágenes que hablan. Repetimos a la semana.",
    test_3_attr:     "— Producción, festival Feniks",

    rates_label:    "Tarifa por día desde",
    rates_editorial:"Editorial · desde 1 200 € / día",
    rates_hospo:    "Hostelería · paquete desde 2 400 €",
    rates_event:    "Evento &amp; reportaje · media jornada desde 700 €",
    rates_note:     "Sin gastos de viaje, derechos ni post. Presupuesto detallado en 48h tras el brief.",

    bridge_text:    "Una práctica paralela en fotografía artística.",
    bridge_link:    "Visitar el portfolio artístico ↗",

    footer_copy:    "© Guillaume Delye — Todos los derechos reservados",

    back_home:      "← Volver",
    photo_count:    "imágenes",

    contact_title:  "Enviar un brief.",
    contact_sub:    "Cuanto más concreto, más rápido el presupuesto. Respondo a cada brief en 48 horas.",
    form_name:      "Nombre &amp; empresa",
    form_email:     "Correo",
    form_service:   "Tipo de proyecto",
    form_budget:    "Presupuesto",
    form_dates:     "Fechas &amp; lugar de la sesión",
    form_message:   "El brief — para qué es la imagen, quién la verá, qué es éxito",
    form_submit:    "Enviar brief →",
    form_success:   "Gracias — tu brief ha llegado. Respuesta en 48 horas.",
    contact_direct: "O escribir directamente a",

    srv_fashion:      "Moda / Editorial",
    srv_restaurants:  "Restaurante / Hostelería",
    srv_events:       "Evento / Reportaje",
    srv_portraits:    "Retrato",
    srv_other:        "Aún no decidido — hablemos",

    bud_under_1k:     "Menos de 1 000 €",
    bud_1_3k:         "1 000 € – 3 000 €",
    bud_3_8k:         "3 000 € – 8 000 €",
    bud_8k_plus:      "8 000 € y más",
    bud_unsure:       "No estoy seguro·a — abierto·a a consejo",

    about_page_title:  "Guillaume Delye",
    about_page_lead:   "Fotógrafo editorial &amp; comercial · Medellín.",
    about_page_p1:     "Soy Guillaume Delye — fotógrafo francés afincado en Medellín, Colombia. Trabajo en moda, hostelería y reportaje para clientes editoriales y de marca, en Europa y Latinoamérica.",
    about_page_p2:     "Reciente: portadas Vogue y Cosmopolitan, sesión de lanzamiento para La Gaffe (Córcega) y A Stretta, reportaje del festival Feniks. Selección cerrada en set, entrega final en 10–14 días, facturación EUR o USD.",
    about_page_p3:     "En misión por Latinoamérica, Francia, el Mediterráneo — y a donde lleve el brief. Envía un brief y respondo en 48 horas.",
    about_page_clients_label: "Clientes seleccionados",
    about_page_clients: "Vogue · Cosmopolitan · La Gaffe · A Stretta · Feniks Festival",
    about_page_locations_label: "Zonas",
    about_page_locations: "Medellín · América Latina · Francia · Encargos internacionales",
  }
};

let currentLang = localStorage.getItem('w2b_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('w2b_lang', lang);
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-option]').forEach(el => {
    const key = el.getAttribute('data-i18n-option');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}

function initLang() {
  applyLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLang);
