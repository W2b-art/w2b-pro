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
    sec_clients_commissioned: "Commissioned",
    sec_clients_personal:     "Personal & concept work",
    clients_lagaffe:          "La Gaffe hospitality series",
    clients_concepts:         "Editorial concepts",
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
    about_p2:       "Recent work: commissioned shoots for A Stretta and the Feniks Festival, and event reportage for Blackout Colombia — alongside self-directed projects like the La Gaffe hospitality series in Corsica and spec editorial concepts. Brief → shoot → edit → deliver, typically inside 10–14 days.",
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

    /* Rates / availability */
    rates_label:    "Day rate from",
    rates_editorial:"Editorial · from €1,200 / day",
    rates_hospo:    "Hospitality · package from €2,400",
    rates_event:    "Event &amp; reportage · half-day from €700",
    rates_note:     "All rates exclude travel, licensing, and post. Detailed quote within 48h of brief.",

    bridge_text:    "A separate practice in fine art photography.",
    bridge_link:    "Visit the art portfolio ↗",

    footer_copy:    "© Guillaume Delye — All rights reserved",
    footer_docs:    "Services & terms",

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
    about_page_p2:     "Recent: commissioned work for A Stretta and the Feniks Festival, and event reportage for Blackout Colombia in Medellín — plus self-directed projects: the La Gaffe hospitality series in Corsica and spec editorial concepts. I shoot tight selects on set, deliver final files in 10–14 days, and bill in EUR or USD.",
    about_page_p3:     "On assignment across Latin America, France, the Mediterranean — and where the brief takes us. Send a brief and I will reply within 48 hours.",
    about_page_clients_label: "Selected clients",
    about_page_clients: "A Stretta · Feniks Festival · Blackout Colombia",
    about_page_selfdirected_label: "Self-directed",
    about_page_selfdirected: "La Gaffe hospitality series · editorial concepts",
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
    sec_clients_commissioned: "Commandes",
    sec_clients_personal:     "Travaux personnels & concepts",
    clients_lagaffe:          "Série hôtellerie La Gaffe",
    clients_concepts:         "Concepts éditoriaux",
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
    about_p2:       "Récemment : prises de vue en commande pour A Stretta et le festival Feniks, et reportage de l'événement Blackout Colombia — aux côtés de projets personnels comme la série hôtellerie La Gaffe en Corse et des concepts éditoriaux. Brief → shooting → édition → livraison, généralement sous 10 à 14 jours.",
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

    rates_label:    "Tarif jour à partir de",
    rates_editorial:"Éditorial · à partir de 1 200 € / jour",
    rates_hospo:    "Hôtellerie-restauration · forfait à partir de 2 400 €",
    rates_event:    "Événement &amp; reportage · demi-journée à partir de 700 €",
    rates_note:     "Hors déplacements, droits, post-prod. Devis détaillé sous 48h après brief.",

    bridge_text:    "Une pratique parallèle en photographie d'art.",
    bridge_link:    "Voir le portfolio artistique ↗",

    footer_copy:    "© Guillaume Delye — Tous droits réservés",
    footer_docs:    "Services & conditions",

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
    about_page_p2:     "Récemment : travail en commande pour A Stretta et le festival Feniks, et reportage de l'événement Blackout Colombia à Medellín — ainsi que des projets personnels : la série hôtellerie La Gaffe en Corse et des concepts éditoriaux. Sélection serrée à la prise de vue, livraison sous 10 à 14 jours, facturation EUR ou USD.",
    about_page_p3:     "En mission en Amérique latine, en France, en Méditerranée — et là où le brief mène. Envoyez un brief, réponse sous 48 heures.",
    about_page_clients_label: "Clients sélectionnés",
    about_page_clients: "A Stretta · Feniks Festival · Blackout Colombia",
    about_page_selfdirected_label: "Travaux personnels",
    about_page_selfdirected: "Série hôtellerie La Gaffe · concepts éditoriaux",
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
    sec_clients_commissioned: "Por encargo",
    sec_clients_personal:     "Trabajo personal y conceptual",
    clients_lagaffe:          "Serie hostelería La Gaffe",
    clients_concepts:         "Conceptos editoriales",
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
    about_p2:       "Reciente: encargos para A Stretta y el festival Feniks, y reportaje del evento Blackout Colombia — junto a proyectos personales como la serie de hostelería La Gaffe en Córcega y conceptos editoriales. Brief → sesión → edición → entrega, normalmente en 10–14 días.",
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

    rates_label:    "Tarifa desde",
    rates_editorial:"Editorial · desde $1.800.000 / día",
    rates_hospo:    "Hostelería · paquete desde $2.500.000",
    rates_event:    "Evento &amp; reportaje · media jornada desde $900.000",
    rates_note:     "Precios en COP. Sin gastos de viaje, derechos ni post. Presupuesto detallado en 48h tras el brief.",

    bridge_text:    "Una práctica paralela en fotografía artística.",
    bridge_link:    "Visitar el portfolio artístico ↗",

    footer_copy:    "© Guillaume Delye — Todos los derechos reservados",
    footer_docs:    "Servicios y términos",

    back_home:      "← Volver",
    photo_count:    "imágenes",

    contact_title:  "Enviar un brief.",
    contact_sub:    "Cuanto más concreto, más rápido el presupuesto. Respondo a cada brief en 48 horas.",
    form_name:      "Nombre &amp; empresa",
    form_email:     "Correo",
    form_service:   "Tipo de proyecto",
    form_budget:    "Presupuesto (COP)",
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

    bud_under_1k:     "Menos de $1.000.000",
    bud_1_3k:         "$1.000.000 – $3.000.000",
    bud_3_8k:         "$3.000.000 – $8.000.000",
    bud_8k_plus:      "Más de $8.000.000",
    bud_unsure:       "No estoy seguro·a — abierto·a a consejo",

    about_page_title:  "Guillaume Delye",
    about_page_lead:   "Fotógrafo editorial &amp; comercial · Medellín.",
    about_page_p1:     "Soy Guillaume Delye — fotógrafo francés afincado en Medellín, Colombia. Trabajo en moda, hostelería y reportaje para clientes editoriales y de marca, en Europa y Latinoamérica.",
    about_page_p2:     "Reciente: trabajo por encargo para A Stretta y el festival Feniks, y reportaje del evento Blackout Colombia en Medellín — además de proyectos personales: la serie de hostelería La Gaffe en Córcega y conceptos editoriales. Selección cerrada en set, entrega final en 10–14 días, facturación EUR o USD.",
    about_page_p3:     "En misión por Latinoamérica, Francia, el Mediterráneo — y a donde lleve el brief. Envía un brief y respondo en 48 horas.",
    about_page_clients_label: "Clientes seleccionados",
    about_page_clients: "A Stretta · Feniks Festival · Blackout Colombia",
    about_page_selfdirected_label: "Trabajo personal",
    about_page_selfdirected: "Serie hostelería La Gaffe · conceptos editoriales",
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
