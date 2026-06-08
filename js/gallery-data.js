/* ============================================================
   Guillaume Delye — Commercial Gallery Data

   HOW TO ADD A PHOTO:
   1. Name the file for SEO, e.g.:
        restaurant-interior-paris-w2b.jpg
   2. Drop it in the correct images/ subfolder
   3. Add an entry to the images array below
   ============================================================ */

const GALLERY_DATA = {

  "fashion": {
    id: "fashion",
    folder: "images/fashion/",
    coverIndex: 4, // model-red-bikini-stone-wall-sea-portrait (colour, scenic — safe cover)
    title: {
      en: "Fashion & Editorial",
      fr: "Mode & Éditorial",
      es: "Moda & Editorial"
    },
    description: {
      en: "Editorial fashion shot on the Corsican coast at Saint-Florent — a self-directed series on film.",
      fr: "Mode éditoriale réalisée sur la côte corse à Saint-Florent — une série auto-produite, argentique.",
      es: "Moda editorial realizada en la costa corsa de Saint-Florent — una serie autoproducida, analógica."
    },
    images: [
      {
        file: "model-rocky-cove-arms-raised-black-white-fashion-saint-florent-corsica-w2b.jpg",
        alt: {
          en: "Model standing in a rocky cove with arms raised overhead, black and white film fashion editorial, Saint-Florent, Corsica",
          fr: "Mannequin debout dans une crique rocheuse, bras levés au-dessus de la tête, éditorial mode argentique noir et blanc, Saint-Florent, Corse",
          es: "Modelo de pie en una cala rocosa con los brazos en alto, editorial de moda analógico en blanco y negro, Saint-Florent, Córcega"
        }
      },
      {
        file: "model-harbour-wall-coast-black-white-fashion-saint-florent-corsica-w2b.jpg",
        alt: {
          en: "Model seated on a stone harbour wall by the sea, halter top and trousers, black and white film fashion editorial, Saint-Florent, Corsica",
          fr: "Mannequin assise sur un mur de quai en pierre au bord de l'eau, haut dos-nu et pantalon, éditorial mode argentique noir et blanc, Saint-Florent, Corse",
          es: "Modelo sentada en un muro de piedra del puerto junto al mar, top halter y pantalón, editorial de moda analógico en blanco y negro, Saint-Florent, Córcega"
        }
      },
      {
        file: "model-seated-rocks-coast-black-white-fashion-saint-florent-corsica-w2b.jpg",
        alt: {
          en: "Model seated against coastal rocks in hard sunlight, black and white film fashion editorial, Saint-Florent, Corsica",
          fr: "Mannequin assise contre les rochers du littoral en pleine lumière, éditorial mode argentique noir et blanc, Saint-Florent, Corse",
          es: "Modelo sentada contra las rocas de la costa a plena luz, editorial de moda analógico en blanco y negro, Saint-Florent, Córcega"
        }
      },
      {
        file: "model-white-dress-coastal-stone-saint-florent-corsica-fashion-w2b.jpg",
        alt: {
          en: "Model reclining on a coastal stone slab in a white slip dress, the village of Saint-Florent and sparkling sea behind, colour film fashion editorial, Corsica",
          fr: "Mannequin allongée sur une dalle de pierre côtière en robe nuisette blanche, le village de Saint-Florent et la mer scintillante en arrière-plan, éditorial mode argentique couleur, Corse",
          es: "Modelo recostada sobre una losa de piedra costera con vestido lencero blanco, el pueblo de Saint-Florent y el mar centelleante al fondo, editorial de moda analógico color, Córcega"
        }
      },
      {
        file: "model-red-bikini-stone-wall-sea-portrait-saint-florent-corsica-fashion-w2b.jpg",
        alt: {
          en: "Coastal portrait of a model in a red bikini leaning against a stone wall, sea and Corsican mountains behind, colour film fashion editorial, Saint-Florent",
          fr: "Portrait côtier d'une mannequin en bikini rouge adossée à un mur en pierre, mer et montagnes corses en arrière-plan, éditorial mode argentique couleur, Saint-Florent",
          es: "Retrato costero de una modelo en bikini rojo apoyada en un muro de piedra, mar y montañas corsas al fondo, editorial de moda analógico color, Saint-Florent"
        }
      },
      {
        file: "model-red-bikini-floating-turquoise-water-saint-florent-corsica-fashion-w2b.jpg",
        alt: {
          en: "Model in a red bikini floating on her back in clear turquoise water, overhead colour film fashion editorial, Saint-Florent, Corsica",
          fr: "Mannequin en bikini rouge flottant sur le dos dans une eau turquoise limpide, éditorial mode argentique couleur en vue plongeante, Saint-Florent, Corse",
          es: "Modelo en bikini rojo flotando de espaldas en agua turquesa cristalina, editorial de moda analógico color en vista cenital, Saint-Florent, Córcega"
        }
      },
      {
        file: "model-coral-halter-braid-back-portrait-saint-florent-corsica-fashion-w2b.jpg",
        alt: {
          en: "Back portrait of a model with a long braid in a coral halter top against turquoise water, colour film fashion editorial, Saint-Florent, Corsica",
          fr: "Portrait de dos d'une mannequin à la longue tresse, haut dos-nu corail devant une eau turquoise, éditorial mode argentique couleur, Saint-Florent, Corse",
          es: "Retrato de espaldas de una modelo con una larga trenza y top halter coral frente al agua turquesa, editorial de moda analógico color, Saint-Florent, Córcega"
        }
      }
    ]
  },

  "restaurants": {
    id: "restaurants",
    folder: "images/restaurants/",
    coverIndex: 7, // la-gaffe-vegetable-circle (colourful fine-dining plate)
    title: {
      en: "Restaurants & Hospitality",
      fr: "Restaurants & Hôtellerie",
      es: "Restaurantes & Hostelería"
    },
    description: {
      en: "Restaurant atmospheres and culinary editorial in Corsica — commissioned work for A Stretta, and a self-directed hospitality series shot on location at La Gaffe.",
      fr: "Ambiances de restaurant et éditorial gastronomique en Corse — travail en commande pour A Stretta, et une série hôtellerie auto-produite réalisée sur place à La Gaffe.",
      es: "Ambientes de restaurante y editorial culinario en Córcega — trabajo por encargo para A Stretta, y una serie de hostelería autoproducida realizada en La Gaffe."
    },
    images: [
      {
        file: "la-gaffe-restaurant-facade-sign-terrace-corsica-w2b.jpg",
        alt: {
          en: "La Gaffe restaurant facade with awning and outdoor terrace tables, Corsica, colour film commercial photography",
          fr: "Façade du restaurant La Gaffe avec store et tables en terrasse, Corse, photographie commerciale argentique couleur",
          es: "Fachada del restaurante La Gaffe con toldo y mesas en terraza, Córcega, fotografía comercial analógica color"
        }
      },
      {
        file: "la-gaffe-marina-terrace-yachts-port-restaurant-corsica-w2b.jpg",
        alt: {
          en: "La Gaffe marina terrace with chairs and sunshades looking onto luxury yachts, Corsican port restaurant",
          fr: "Terrasse marina de La Gaffe avec chaises et parasols donnant sur des yachts de luxe, restaurant portuaire corse",
          es: "Terraza de La Gaffe en la marina con sillas y sombrillas mirando hacia yates de lujo, restaurante portuario corso"
        }
      },
      {
        file: "a-stretta-mediterranean-terrace-bamboo-canopy-olive-tree-w2b.jpg",
        alt: {
          en: "Sunlit Mediterranean restaurant terrace with bamboo canopy and olive tree opening onto a lively square, colour film",
          fr: "Terrasse de restaurant méditerranéen ensoleillée avec auvent en bambou et olivier ouvrant sur une place animée, argentique couleur",
          es: "Terraza de restaurante mediterráneo soleada con toldo de bambú y olivo abriéndose a una animada plaza, analógico color"
        }
      },
      {
        file: "a-stretta-stone-cave-bar-interior-warm-light-corsica-w2b.jpg",
        alt: {
          en: "Restaurant cave bar interior with stone vaulted ceiling, dried flowers and warm golden light, Corsica, colour film",
          fr: "Intérieur de bar-cave de restaurant avec plafond voûté en pierre, fleurs séchées et lumière dorée chaude, Corse, argentique couleur",
          es: "Interior de bar-cueva de restaurante con techo abovedado de piedra, flores secas y cálida luz dorada, Córcega, analógico color"
        }
      },
      {
        file: "la-gaffe-elegant-place-setting-wine-glasses-restaurant-w2b.jpg",
        alt: {
          en: "Elegant minimalist place setting with wine glasses, slate, and ochre saucers on a white round table, fine dining still life",
          fr: "Mise en place minimaliste élégante avec verres à vin, ardoise et soucoupes ocres sur une table ronde blanche, nature morte gastronomique",
          es: "Mise en place minimalista elegante con copas de vino, pizarra y platillos ocres sobre mesa redonda blanca, naturaleza muerta de alta cocina"
        }
      },
      {
        file: "a-stretta-pauillac-wine-bottle-place-setting-restaurant-w2b.jpg",
        alt: {
          en: "Pauillac wine bottle alongside an empty ceramic plate and cutlery on a restaurant table, lifestyle commercial photography",
          fr: "Bouteille de Pauillac à côté d'une assiette en céramique vide et couverts sur une table de restaurant, photographie commerciale lifestyle",
          es: "Botella de Pauillac junto a un plato de cerámica vacío y cubiertos en una mesa de restaurante, fotografía comercial de estilo de vida"
        }
      },
      {
        file: "la-gaffe-chef-cutting-strawberry-kitchen-prep-w2b.jpg",
        alt: {
          en: "Chef's hands slicing fresh strawberries on a yellow cutting board in a restaurant kitchen, behind-the-scenes prep photography",
          fr: "Mains de chef tranchant des fraises fraîches sur une planche à découper jaune dans une cuisine de restaurant, photographie de mise en place",
          es: "Manos de chef cortando fresas frescas sobre tabla amarilla en cocina de restaurante, fotografía de mise en place"
        }
      },
      {
        file: "la-gaffe-vegetable-circle-asparagus-edible-flowers-fine-dining-w2b.jpg",
        alt: {
          en: "Artistic vegetable lattice plate with asparagus, edible flowers and bursts of yellow purée, fine dining food editorial",
          fr: "Assiette artistique en treillis de légumes avec asperges, fleurs comestibles et touches de purée jaune, éditorial gastronomique",
          es: "Plato artístico con celosía vegetal, espárragos, flores comestibles y toques de puré amarillo, editorial gastronómico"
        }
      },
      {
        file: "la-gaffe-pork-dish-glazed-sauce-fine-dining-restaurant-w2b.jpg",
        alt: {
          en: "Glazed pork medallion in dark sauce with citrus zest on a black ceramic plate, moody fine-dining food photography",
          fr: "Médaillon de porc glacé dans une sauce sombre avec zestes d'agrumes sur assiette en céramique noire, photographie gastronomique en clair-obscur",
          es: "Medallón de cerdo glaseado en salsa oscura con ralladura de cítricos en plato de cerámica negra, fotografía gastronómica claroscuro"
        }
      },
      {
        file: "a-stretta-seared-scallops-herbs-cream-overhead-w2b.jpg",
        alt: {
          en: "Seared scallops with fresh herbs, cream sauce and pickled vegetables shot overhead on a ceramic plate, food editorial",
          fr: "Noix de Saint-Jacques poêlées aux herbes fraîches, sauce crème et légumes marinés vues du dessus sur assiette en céramique, éditorial culinaire",
          es: "Vieiras selladas con hierbas frescas, crema y verduras encurtidas vistas desde arriba en plato de cerámica, editorial culinario"
        }
      },
      {
        file: "la-gaffe-fish-fillet-green-emulsion-foam-fine-dining-w2b.jpg",
        alt: {
          en: "Fish fillet with green herb emulsion swirl and aerated foam on a dark bowl, fine dining gastronomic photography",
          fr: "Filet de poisson avec émulsion verte aux herbes en spirale et écume aérée dans un bol sombre, photographie gastronomique",
          es: "Filete de pescado con emulsión verde de hierbas en espiral y espuma aireada en bol oscuro, fotografía gastronómica"
        }
      },
      {
        file: "a-stretta-strawberry-dessert-cream-sunlit-barrel-table-w2b.jpg",
        alt: {
          en: "Strawberry and cream dessert with ice cream on a sunlit barrel table, restaurant dessert food photography",
          fr: "Dessert fraises et crème avec glace sur une table tonneau ensoleillée, photographie culinaire de dessert restaurant",
          es: "Postre de fresas y crema con helado en mesa tonel iluminada, fotografía culinaria de postre restaurante"
        }
      }
    ]
  },

  "events": {
    id: "events",
    folder: "images/events/",
    coverIndex: 12, // blackout-medellin-rooftop-dj-decks-comuna-hillside-sunset
    title: {
      en: "Events & Reportage",
      fr: "Événements & Reportage",
      es: "Eventos & Reportaje"
    },
    description: {
      en: "Concert reportage, festivals, cultural events and literary readings — from the Feniks Festival and Medellín rooftop gatherings to bookshop spectacles.",
      fr: "Reportage concert, festivals, événements culturels et lectures littéraires — du Feniks Festival et des rooftops de Medellín aux spectacles en librairie.",
      es: "Reportaje de conciertos, festivales, eventos culturales y lecturas literarias — desde el Feniks Festival y encuentros en azoteas de Medellín hasta espectáculos en librerías."
    },
    images: [
      {
        file: "feniks-festival-dj-silhouette-purple-laser-stage-electronic-music-w2b.jpg",
        alt: {
          en: "DJ silhouette behind purple and blue laser fan at Feniks Festival, electronic music concert photography",
          fr: "Silhouette de DJ derrière un éventail de lasers violets et bleus au Feniks Festival, photographie de concert de musique électronique",
          es: "Silueta de DJ detrás de un abanico de láseres violetas y azules en el Feniks Festival, fotografía de concierto de música electrónica"
        }
      },
      {
        file: "feniks-festival-singer-microphone-stage-pink-light-concert-w2b.jpg",
        alt: {
          en: "Female singer holding a microphone on stage bathed in pink and red light, Feniks Festival live concert photography",
          fr: "Chanteuse tenant un micro sur scène baignée de lumière rose et rouge, photographie de concert live au Feniks Festival",
          es: "Cantante femenina con micrófono en escenario bañado de luz rosa y roja, fotografía de concierto en directo en Feniks Festival"
        }
      },
      {
        file: "feniks-festival-audience-cheering-blue-light-crowd-front-row-w2b.jpg",
        alt: {
          en: "Two front-row festival-goers cheering with raised fists under deep blue stage light, Feniks Festival audience reportage",
          fr: "Deux festivaliers au premier rang acclamant les poings levés sous une lumière bleue profonde, reportage public Feniks Festival",
          es: "Dos asistentes en primera fila vitoreando con puños en alto bajo luz azul profunda, reportaje del público en Feniks Festival"
        }
      },
      {
        file: "feniks-festival-symmetrical-stage-red-spotlights-performer-w2b.jpg",
        alt: {
          en: "Symmetrical festival stage with red spotlights, ornate motifs and a small performer figure at centre, Feniks Festival",
          fr: "Scène de festival symétrique avec projecteurs rouges, motifs ornés et silhouette d'artiste au centre, Feniks Festival",
          es: "Escenario simétrico de festival con focos rojos, motivos ornamentados y figura de artista al centro, Feniks Festival"
        }
      },
      {
        file: "feniks-festival-crowd-red-light-ambient-concert-photography-w2b.jpg",
        alt: {
          en: "Festival crowd bathed in red ambient light with smiling faces and graphic typography in foreground, Feniks Festival reportage",
          fr: "Foule de festival baignée de lumière rouge ambiante avec visages souriants et typographie graphique au premier plan, reportage Feniks Festival",
          es: "Multitud de festival bañada en luz roja ambiental con rostros sonrientes y tipografía gráfica en primer plano, reportaje Feniks Festival"
        }
      },
      {
        file: "feniks-festival-dj-red-spotlight-minimalist-concert-stage-w2b.jpg",
        alt: {
          en: "Lone DJ illuminated by a single red spotlight in deep darkness, minimalist concert photography at Feniks Festival",
          fr: "DJ solitaire illuminé par un unique projecteur rouge dans l'obscurité profonde, photographie de concert minimaliste au Feniks Festival",
          es: "DJ solitario iluminado por un único foco rojo en oscuridad profunda, fotografía minimalista de concierto en Feniks Festival"
        }
      },
      {
        file: "spectacle-lecture-still-life-glasses-lamp-book-bookshop-event-w2b.jpg",
        alt: {
          en: "Still life of reading glasses, vintage lamp and an open book on a small wooden stage in a bookshop, literary event photography",
          fr: "Nature morte de lunettes, lampe vintage et livre ouvert sur une petite estrade en bois dans une librairie, photographie d'événement littéraire",
          es: "Naturaleza muerta de gafas, lámpara vintage y libro abierto sobre pequeño estrado de madera en librería, fotografía de evento literario"
        }
      },
      {
        file: "spectacle-lecture-author-reading-aloud-bookshop-warm-light-event-w2b.jpg",
        alt: {
          en: "Author reading aloud from a book in a warmly lit bookshop in front of bookshelves, literary spectacle event photography",
          fr: "Autrice lisant à voix haute d'un livre dans une librairie à la lumière chaude devant des étagères, photographie d'événement de spectacle littéraire",
          es: "Autora leyendo en voz alta de un libro en librería iluminada cálidamente frente a estanterías, fotografía de espectáculo literario"
        }
      },
      {
        file: "spectacle-lecture-author-portrait-book-bookshop-literary-event-w2b.jpg",
        alt: {
          en: "Portrait of the reader-author with a book and lit lamp in a bookshop during a literary spectacle, event reportage photography",
          fr: "Portrait de l'autrice-lectrice avec un livre et une lampe allumée dans une librairie pendant un spectacle littéraire, photographie de reportage",
          es: "Retrato de la autora-lectora con libro y lámpara encendida en librería durante un espectáculo literario, fotografía de reportaje"
        }
      },
      {
        file: "blackout-medellin-rooftop-event-woman-city-skyline-mountains-golden-hour-w2b.jpg",
        alt: {
          en: "Woman on a rooftop overlooking the full Medellín skyline and surrounding mountains at golden hour, Blackout event reportage photography",
          fr: "Femme sur un rooftop surplombant toute la skyline de Medellín et les montagnes environnantes à l'heure dorée, photographie de reportage de l'événement Blackout",
          es: "Mujer en una azotea con vista al skyline completo de Medellín y las montañas al atardecer dorado, fotografía de reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-party-men-toasting-aguardiente-skyline-w2b.jpg",
        alt: {
          en: "Group of men toasting with aguardiente shots on a rooftop against the Medellín skyline and mountains, Blackout party reportage photography",
          fr: "Groupe d'hommes trinquant avec des shots d'aguardiente sur un rooftop face à la skyline et aux montagnes de Medellín, reportage de la soirée Blackout",
          es: "Grupo de hombres brindando con shots de aguardiente en una azotea frente al skyline y las montañas de Medellín, reportaje de la fiesta Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-party-two-women-golden-hour-skyline-w2b.jpg",
        alt: {
          en: "Two women side by side smiling on a rooftop at golden hour with the Medellín skyline behind, Blackout event reportage photography",
          fr: "Deux femmes côte à côte souriant sur un rooftop à l'heure dorée avec la skyline de Medellín en arrière-plan, photographie de reportage de l'événement Blackout",
          es: "Dos mujeres juntas sonriendo en una azotea al atardecer dorado con el skyline de Medellín detrás, fotografía de reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-dj-decks-comuna-hillside-sunset-w2b.jpg",
        alt: {
          en: "DJ playing at the decks on a rooftop at sunset with a colourful Medellín comuna hillside behind, Blackout event music reportage",
          fr: "DJ aux platines sur un rooftop au coucher du soleil avec une comuna colorée de Medellín à flanc de colline en arrière-plan, reportage musical de l'événement Blackout",
          es: "DJ en las tornamesas en una azotea al atardecer con una colorida comuna de Medellín en la ladera al fondo, reportaje musical del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-couple-football-jersey-city-lights-night-w2b.jpg",
        alt: {
          en: "Joyful couple laughing on a rooftop at night, man in an Atlético Nacional football jersey, Medellín city lights glittering behind, Blackout party reportage",
          fr: "Couple joyeux riant sur un rooftop la nuit, homme en maillot de football de l'Atlético Nacional, lumières de Medellín scintillant en arrière-plan, reportage de la soirée Blackout",
          es: "Pareja alegre riendo en una azotea de noche, hombre con camiseta de fútbol del Atlético Nacional, luces de Medellín brillando detrás, reportaje de la fiesta Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-party-woman-black-dress-night-flash-w2b.jpg",
        alt: {
          en: "Woman in a black dress smiling at a rooftop party at night, flash portrait with city lights behind, Blackout event reportage photography",
          fr: "Femme en robe noire souriant lors d'une soirée sur un rooftop la nuit, portrait au flash avec les lumières de la ville en arrière-plan, photographie de reportage de l'événement Blackout",
          es: "Mujer con vestido negro sonriendo en una fiesta nocturna en una azotea, retrato con flash y luces de la ciudad detrás, fotografía de reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-nightlife-three-women-bar-table-smiling-night-flash-w2b.jpg",
        alt: {
          en: "Three women smiling together at a bar table at night, one flashing a peace sign, warm night-flash nightlife photography at the Blackout Medellín event",
          fr: "Trois femmes souriant ensemble à une table de bar la nuit, l'une faisant un signe de paix, photographie de nightlife au flash chaud à l'événement Blackout à Medellín",
          es: "Tres mujeres sonriendo juntas en una mesa de bar de noche, una haciendo el signo de la paz, fotografía nocturna con flash cálido en el evento Blackout de Medellín"
        }
      },
      {
        file: "blackout-medellin-nightlife-two-women-peace-signs-bar-night-flash-w2b.jpg",
        alt: {
          en: "Two joyful women throwing peace signs at a bar at night, beaming smiles under warm flash, Blackout Medellín nightlife reportage photography",
          fr: "Deux femmes joyeuses faisant des signes de paix dans un bar la nuit, larges sourires sous un flash chaud, reportage nightlife Blackout à Medellín",
          es: "Dos mujeres alegres haciendo el signo de la paz en un bar de noche, amplias sonrisas bajo flash cálido, reportaje de vida nocturna Blackout en Medellín"
        }
      },
      {
        file: "blackout-medellin-nightlife-man-dancefloor-smiling-night-flash-w2b.jpg",
        alt: {
          en: "Smiling man with a beard on a crowded dancefloor at night throwing two peace signs, energetic night-flash nightlife photography at the Blackout Medellín event",
          fr: "Homme souriant barbu sur une piste de danse bondée la nuit faisant deux signes de paix, photographie de nightlife énergique au flash à l'événement Blackout à Medellín",
          es: "Hombre sonriente con barba en una pista de baile llena de noche haciendo dos signos de la paz, fotografía de vida nocturna enérgica con flash en el evento Blackout de Medellín"
        }
      },
      {
        file: "blackout-medellin-nightlife-women-dancing-laughing-drinks-night-flash-w2b.jpg",
        alt: {
          en: "Group of women dancing and laughing with drinks in hand on a nightclub floor, candid night-flash nightlife reportage at the Blackout Medellín event",
          fr: "Groupe de femmes dansant et riant un verre à la main sur la piste d'un club, reportage nightlife spontané au flash à l'événement Blackout à Medellín",
          es: "Grupo de mujeres bailando y riendo con copas en mano en la pista de un club, reportaje espontáneo de vida nocturna con flash en el evento Blackout de Medellín"
        }
      }
    ]
  },

  "portraits": {
    id: "portraits",
    folder: "images/portraits/",
    coverIndex: 4, // medellin-rooftop-portrait-woman-amber-sunglasses (colour hero)
    title: {
      en: "Portraits",
      fr: "Portraits",
      es: "Retratos"
    },
    description: {
      en: "Portraiture across two registers — black and white film family sessions and colour environmental portraits shot on Medellín rooftops.",
      fr: "Le portrait sous deux registres — séances de famille argentiques en noir et blanc et portraits environnementaux en couleur réalisés sur les rooftops de Medellín.",
      es: "Retrato en dos registros — sesiones de familia analógicas en blanco y negro y retratos ambientales en color realizados en azoteas de Medellín."
    },
    images: [
      {
        file: "multigenerational-family-hug-grandmother-grandson-black-white-portrait-w2b.jpg",
        alt: {
          en: "Multigenerational family embrace — grandmother held by son and grandson, joyful black and white portrait photography",
          fr: "Étreinte familiale multigénérationnelle — grand-mère enlacée par son fils et son petit-fils, portrait noir et blanc joyeux",
          es: "Abrazo familiar multigeneracional — abuela abrazada por su hijo y nieto, retrato alegre en blanco y negro"
        }
      },
      {
        file: "intimate-family-trio-grandmother-father-grandson-black-white-portrait-w2b.jpg",
        alt: {
          en: "Tight black and white portrait of three family members — bearded father, grandmother and laughing grandson in a garden",
          fr: "Portrait noir et blanc serré de trois membres d'une famille — père barbu, grand-mère et petit-fils riant dans un jardin",
          es: "Retrato cerrado en blanco y negro de tres miembros de una familia — padre con barba, abuela y nieto riendo en un jardín"
        }
      },
      {
        file: "four-generation-family-group-garden-black-white-portrait-w2b.jpg",
        alt: {
          en: "Black and white group portrait of four family members posing closely together in a garden, film portraiture",
          fr: "Portrait de groupe noir et blanc de quatre membres d'une famille posant serrés ensemble dans un jardin, portrait argentique",
          es: "Retrato de grupo en blanco y negro de cuatro miembros de una familia posando juntos en un jardín, retrato analógico"
        }
      },
      {
        file: "three-men-garden-chairs-summer-portrait-black-white-w2b.jpg",
        alt: {
          en: "Black and white summer portrait of three men of different ages seated in white garden chairs against a hedge, film photography",
          fr: "Portrait estival noir et blanc de trois hommes d'âges différents assis sur des chaises de jardin blanches devant une haie, photographie argentique",
          es: "Retrato veraniego en blanco y negro de tres hombres de distintas edades sentados en sillas de jardín blancas frente a un seto, fotografía analógica"
        }
      },
      {
        file: "medellin-rooftop-portrait-woman-amber-sunglasses-golden-hour-blackout-w2b.jpg",
        alt: {
          en: "Golden-hour portrait of a woman with curly hair and amber-tinted sunglasses holding a finger to her lips, warm side light, Medellín rooftop colour portrait",
          fr: "Portrait à l'heure dorée d'une femme aux cheveux bouclés et lunettes ambrées, un doigt sur les lèvres, lumière latérale chaude, portrait couleur sur un rooftop de Medellín",
          es: "Retrato al atardecer dorado de una mujer de cabello rizado y gafas de sol ámbar con un dedo en los labios, luz lateral cálida, retrato a color en una azotea de Medellín"
        }
      },
      {
        file: "medellin-rooftop-portrait-young-woman-curly-hair-dusk-bokeh-blackout-w2b.jpg",
        alt: {
          en: "Soft dusk portrait of a young woman with curly hair and a light blue top against glowing bokeh lights, Medellín rooftop colour portraiture",
          fr: "Portrait doux au crépuscule d'une jeune femme aux cheveux bouclés et haut bleu clair devant des lumières bokeh, portrait couleur sur un rooftop de Medellín",
          es: "Retrato suave al anochecer de una joven de cabello rizado y top azul claro frente a luces bokeh, retrato a color en una azotea de Medellín"
        }
      },
      {
        file: "medellin-rooftop-portrait-woman-white-dress-golden-hour-skyline-blackout-w2b.jpg",
        alt: {
          en: "Contemplative golden-hour portrait of a woman in a white dress at a rooftop bar with the Medellín skyline behind, warm colour environmental portrait",
          fr: "Portrait contemplatif à l'heure dorée d'une femme en robe blanche dans un bar en rooftop avec la skyline de Medellín en arrière-plan, portrait environnemental couleur chaude",
          es: "Retrato contemplativo al atardecer dorado de una mujer con vestido blanco en un bar en azotea con el skyline de Medellín detrás, retrato ambiental a color cálido"
        }
      },
      {
        file: "medellin-environmental-portrait-man-round-glasses-locs-cityscape-blackout-w2b.jpg",
        alt: {
          en: "Environmental portrait of a man with locs, round sunglasses and a gold Africa pendant against the daytime Medellín cityscape, colour portraiture",
          fr: "Portrait environnemental d'un homme aux locks, lunettes rondes et pendentif Afrique doré devant le paysage urbain de Medellín en journée, portrait couleur",
          es: "Retrato ambiental de un hombre con locs, gafas redondas y colgante de África dorado frente al paisaje urbano de Medellín de día, retrato a color"
        }
      },
      {
        file: "medellin-rooftop-portrait-man-locs-africa-pendant-comuna-lights-blackout-w2b.jpg",
        alt: {
          en: "Rooftop portrait of a smiling man with locs and a gold Africa pendant, colourful Medellín comuna lights glowing behind at dusk, colour environmental portrait",
          fr: "Portrait sur rooftop d'un homme souriant aux locks et pendentif Afrique doré, lumières colorées d'une comuna de Medellín en arrière-plan au crépuscule, portrait environnemental couleur",
          es: "Retrato en azotea de un hombre sonriente con locs y colgante de África dorado, coloridas luces de una comuna de Medellín brillando detrás al anochecer, retrato ambiental a color"
        }
      },
      {
        file: "medellin-close-up-portrait-man-locs-round-sunglasses-gold-africa-pendant-blackout-w2b.jpg",
        alt: {
          en: "Striking close-up portrait of a man with locs and round gold sunglasses biting the chain of his gold Africa pendant, Medellín hillside in hard sunlight behind, colour portraiture",
          fr: "Portrait rapproché saisissant d'un homme aux locks et lunettes rondes dorées mordant la chaîne de son pendentif Afrique doré, colline de Medellín en pleine lumière en arrière-plan, portrait couleur",
          es: "Impactante retrato en primer plano de un hombre con locs y gafas redondas doradas mordiendo la cadena de su colgante de África dorado, ladera de Medellín a plena luz detrás, retrato a color"
        }
      }
    ]
  }

};

const GALLERY_ORDER = [
  "fashion",
  "restaurants",
  "events",
  "portraits"
];
