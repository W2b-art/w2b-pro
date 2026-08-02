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
      en: "Editorial fashion — self-directed series shot on the Corsican coast at Saint-Florent, and urban night portraits in Medellín.",
      fr: "Mode éditoriale — série auto-produite réalisée sur la côte corse à Saint-Florent, et portraits urbains de nuit à Medellín.",
      es: "Moda editorial — serie autoproducida realizada en la costa corsa de Saint-Florent, y retratos urbanos nocturnos en Medellín."
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
      },
      {
        file: "editorial-portrait-woman-cigarette-collar-dark-w2b.jpg",
        alt: {
          en: "Editorial portrait of a young woman with a cigarette, white collar over a dark top against a black background, colour film",
          fr: "Portrait éditorial d'une jeune femme à la cigarette, col blanc sur haut sombre, fond noir, argentique couleur",
          es: "Retrato editorial de una joven con un cigarrillo, cuello blanco sobre top oscuro, fondo negro, analógico color"
        }
      },
      {
        file: "model-seated-boots-graffiti-wall-medellin-fashion-w2b.jpg",
        alt: {
          en: "Model seated in boots against a graffiti-covered wall, urban night fashion editorial, Medellín",
          fr: "Mannequin assise en bottes devant un mur couvert de graffitis, éditorial mode urbain de nuit, Medellín",
          es: "Modelo sentada con botas contra un muro cubierto de grafitis, editorial de moda urbana nocturna, Medellín"
        }
      },
      {
        file: "model-lace-top-hand-chin-mural-medellin-fashion-w2b.jpg",
        alt: {
          en: "Model in a lace top, hand to chin, against a mural backdrop, urban night fashion editorial, Medellín",
          fr: "Mannequin en haut de dentelle, main au menton, devant une fresque murale, éditorial mode urbain de nuit, Medellín",
          es: "Modelo con top de encaje, mano en el mentón, frente a un mural, editorial de moda urbana nocturna, Medellín"
        }
      },
      {
        file: "model-arms-raised-black-dress-mural-medellin-fashion-w2b.jpg",
        alt: {
          en: "Model in a black dress with arms raised overhead against a mural, urban night fashion editorial, Medellín",
          fr: "Mannequin en robe noire, bras levés, devant une fresque murale, éditorial mode urbain de nuit, Medellín",
          es: "Modelo con vestido negro y los brazos en alto frente a un mural, editorial de moda urbana nocturna, Medellín"
        }
      },
      {
        file: "model-portrait-hoop-earrings-corset-medellin-fashion-w2b.jpg",
        alt: {
          en: "Portrait of a model in a corset top with hoop earrings against a plain wall, urban fashion editorial, Medellín",
          fr: "Portrait d'une mannequin en corset et créoles devant un mur nu, éditorial mode urbain, Medellín",
          es: "Retrato de una modelo con corsé y aretes de aro contra un muro liso, editorial de moda urbana, Medellín"
        }
      },
      {
        file: "model-arms-raised-corset-teal-light-medellin-fashion-w2b.jpg",
        alt: {
          en: "Model in a corset with arms raised overhead under cool teal light, urban fashion editorial, Medellín",
          fr: "Mannequin en corset, bras levés, sous une lumière sarcelle froide, éditorial mode urbain, Medellín",
          es: "Modelo con corsé y los brazos en alto bajo una luz turquesa fría, editorial de moda urbana, Medellín"
        }
      },
      {
        file: "model-smoking-portrait-brick-wall-medellin-fashion-w2b.jpg",
        alt: {
          en: "Editorial portrait of a model smoking against a brick wall in warm light, urban fashion editorial, Medellín",
          fr: "Portrait éditorial d'une mannequin fumant devant un mur de brique en lumière chaude, éditorial mode urbain, Medellín",
          es: "Retrato editorial de una modelo fumando contra un muro de ladrillo en luz cálida, editorial de moda urbana, Medellín"
        }
      },
      {
        file: "model-smoking-close-portrait-black-white-medellin-fashion-w2b.jpg",
        alt: {
          en: "Close black and white editorial portrait of a model smoking, urban fashion editorial, Medellín",
          fr: "Portrait éditorial rapproché en noir et blanc d'une mannequin fumant, éditorial mode urbain, Medellín",
          es: "Retrato editorial cercano en blanco y negro de una modelo fumando, editorial de moda urbana, Medellín"
        }
      },
      {
        file: "model-smoking-profile-warm-light-medellin-fashion-w2b.jpg",
        alt: {
          en: "Profile portrait of a model smoking in warm ambient light, urban fashion editorial, Medellín",
          fr: "Portrait de profil d'une mannequin fumant en lumière ambiante chaude, éditorial mode urbain, Medellín",
          es: "Retrato de perfil de una modelo fumando en luz ambiente cálida, editorial de moda urbana, Medellín"
        }
      },
      {
        file: "model-crouched-graffiti-wall-boots-medellin-fashion-w2b.jpg",
        alt: {
          en: "Model crouched in boots and dark tights against a graffiti wall, urban night fashion editorial, Medellín",
          fr: "Mannequin accroupie en bottes et collants sombres devant un mur de graffitis, éditorial mode urbain de nuit, Medellín",
          es: "Modelo agachada con botas y medias oscuras contra un muro de grafitis, editorial de moda urbana nocturna, Medellín"
        }
      },
      {
        file: "urban-night-editorial-tattooed-model-hand-to-face-graffiti-medellin-fashion-w2b.jpg",
        alt: {
          en: "Urban night-flash fashion editorial of a heavily tattooed model in a pink camisole with a hand raised to her face against a graffiti wall, Medellín",
          fr: "Éditorial mode au flash nocturne d'une mannequin très tatouée en caraco rose, une main levée vers le visage devant un mur de graffitis, Medellín",
          es: "Editorial de moda con flash nocturno de una modelo muy tatuada con camisola rosa y una mano en el rostro contra un muro de grafitis, Medellín"
        }
      },
      {
        file: "urban-night-editorial-tattooed-model-finger-to-lips-graffiti-medellin-fashion-w2b.jpg",
        alt: {
          en: "Urban night-flash fashion editorial of a tattooed model with a finger to her lips and a direct gaze against a graffiti wall, Medellín",
          fr: "Éditorial mode au flash nocturne d'une mannequin tatouée, un doigt sur les lèvres et le regard direct devant un mur de graffitis, Medellín",
          es: "Editorial de moda con flash nocturno de una modelo tatuada con un dedo en los labios y mirada directa contra un muro de grafitis, Medellín"
        }
      },
      {
        file: "urban-night-editorial-tattooed-model-red-light-graffiti-medellin-fashion-w2b.jpg",
        alt: {
          en: "Urban night-flash fashion editorial of a tattooed model in warm red light against a graffiti wall, Medellín",
          fr: "Éditorial mode au flash nocturne d'une mannequin tatouée sous une lumière rouge chaude devant un mur de graffitis, Medellín",
          es: "Editorial de moda con flash nocturno de una modelo tatuada bajo cálida luz roja contra un muro de grafitis, Medellín"
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
      en: "Concert reportage, festivals, cultural events and literary readings, from a Deglorian live band show and the Feniks Festival to Medellín rooftop gatherings and bookshop spectacles.",
      fr: "Reportage concert, festivals, événements culturels et lectures littéraires, d'un concert live du groupe Deglorian et du Feniks Festival aux rooftops de Medellín et spectacles en librairie.",
      es: "Reportaje de conciertos, festivales, eventos culturales y lecturas literarias, desde un concierto en directo de la banda Deglorian y el Feniks Festival hasta encuentros en azoteas de Medellín y espectáculos en librerías."
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
      },
      {
        file: "blackout-medellin-rooftop-man-seated-meditative-mountains-golden-hour-w2b.jpg",
        alt: {
          en: "A man seated cross-legged on a Medellín rooftop in golden light, mountains behind, Blackout event reportage photography",
          fr: "Un homme assis en tailleur sur un rooftop de Medellín dans la lumière dorée, montagnes en arrière-plan, reportage de l'événement Blackout",
          es: "Un hombre sentado con las piernas cruzadas en una azotea de Medellín bajo la luz dorada, montañas al fondo, reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-solar-eclipse-crescent-sky-w2b.jpg",
        alt: {
          en: "The sun reduced to a glowing crescent during the solar eclipse over Medellín, Blackout event reportage photography",
          fr: "Le soleil réduit à un croissant lumineux pendant l'éclipse solaire au-dessus de Medellín, reportage de l'événement Blackout",
          es: "El sol reducido a un creciente luminoso durante el eclipse solar sobre Medellín, reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-man-railing-comuna-skyline-golden-hour-w2b.jpg",
        alt: {
          en: "A man at the rooftop railing looking out over the Medellín comuna hillside at golden hour, Blackout event reportage photography",
          fr: "Un homme à la rambarde d'un rooftop contemplant les collines de la comuna de Medellín à l'heure dorée, reportage de l'événement Blackout",
          es: "Un hombre en la baranda de una azotea mirando las laderas de la comuna de Medellín en la hora dorada, reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-woman-beaded-top-golden-hour-portrait-w2b.jpg",
        alt: {
          en: "Golden-hour portrait of a woman in a beaded top on the rooftop, Blackout event reportage photography, Medellín",
          fr: "Portrait à l'heure dorée d'une femme en haut perlé sur le rooftop, reportage de l'événement Blackout, Medellín",
          es: "Retrato en la hora dorada de una mujer con top de cuentas en la azotea, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-woman-green-top-locs-portrait-w2b.jpg",
        alt: {
          en: "Portrait of a woman with locs in a green top glancing back, golden hour, Blackout event reportage, Medellín",
          fr: "Portrait d'une femme aux locks en haut vert se retournant, heure dorée, reportage de l'événement Blackout, Medellín",
          es: "Retrato de una mujer con locs y top verde mirando hacia atrás, hora dorada, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-man-afro-portrait-golden-hour-w2b.jpg",
        alt: {
          en: "Golden-hour portrait of a man with an afro in an open shirt, Blackout event reportage, Medellín",
          fr: "Portrait à l'heure dorée d'un homme afro en chemise ouverte, reportage de l'événement Blackout, Medellín",
          es: "Retrato en la hora dorada de un hombre afro con camisa abierta, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-woman-curly-hair-joyful-golden-hour-w2b.jpg",
        alt: {
          en: "A woman with curly hair laughing in golden backlight on the rooftop, Blackout event reportage, Medellín",
          fr: "Une femme aux cheveux bouclés riant dans un contre-jour doré sur le rooftop, reportage de l'événement Blackout, Medellín",
          es: "Una mujer de cabello rizado riendo a contraluz dorado en la azotea, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-woman-white-fringe-dress-golden-hour-w2b.jpg",
        alt: {
          en: "A woman in a white fringe dress standing in golden-hour light on the rooftop, Blackout event reportage, Medellín",
          fr: "Une femme en robe blanche à franges debout dans la lumière dorée sur le rooftop, reportage de l'événement Blackout, Medellín",
          es: "Una mujer con vestido blanco de flecos de pie bajo la luz dorada en la azotea, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-three-women-smiling-golden-hour-w2b.jpg",
        alt: {
          en: "Three women smiling together at golden hour on the rooftop, Blackout event reportage photography, Medellín",
          fr: "Trois femmes souriant ensemble à l'heure dorée sur le rooftop, reportage de l'événement Blackout, Medellín",
          es: "Tres mujeres sonriendo juntas en la hora dorada en la azotea, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-man-dancing-arms-raised-skyline-golden-hour-w2b.jpg",
        alt: {
          en: "A man dancing with arms raised against the Medellín skyline at golden hour, Blackout event reportage photography",
          fr: "Un homme dansant bras levés devant les toits de Medellín à l'heure dorée, reportage de l'événement Blackout",
          es: "Un hombre bailando con los brazos en alto frente al horizonte de Medellín en la hora dorada, reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-two-women-dancing-skyline-golden-hour-w2b.jpg",
        alt: {
          en: "Two women dancing with the city skyline behind them at golden hour, Blackout event reportage, Medellín",
          fr: "Deux femmes dansant avec les toits de la ville derrière elles à l'heure dorée, reportage de l'événement Blackout, Medellín",
          es: "Dos mujeres bailando con el horizonte de la ciudad detrás en la hora dorada, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-men-bar-golden-hour-gathering-w2b.jpg",
        alt: {
          en: "Men gathered at the rooftop bar in golden light, Blackout event reportage photography, Medellín",
          fr: "Des hommes réunis au bar du rooftop dans la lumière dorée, reportage de l'événement Blackout, Medellín",
          es: "Hombres reunidos en la barra de la azotea bajo la luz dorada, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-man-railing-drink-golden-hour-w2b.jpg",
        alt: {
          en: "A man at the rooftop railing with a drink as the light fades, Blackout event reportage, Medellín",
          fr: "Un homme à la rambarde du rooftop, un verre à la main, alors que la lumière décline, reportage de l'événement Blackout, Medellín",
          es: "Un hombre en la baranda de la azotea con una bebida mientras cae la luz, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-group-dancing-skyline-golden-hour-w2b.jpg",
        alt: {
          en: "A group dancing with hands raised against the skyline at golden hour, Blackout event reportage photography",
          fr: "Un groupe dansant les mains levées devant les toits à l'heure dorée, reportage de l'événement Blackout",
          es: "Un grupo bailando con las manos en alto frente al horizonte en la hora dorada, reportaje del evento Blackout"
        }
      },
      {
        file: "blackout-medellin-rooftop-couple-candid-golden-hour-w2b.jpg",
        alt: {
          en: "A candid moment between two people in golden light on the rooftop, Blackout event reportage, Medellín",
          fr: "Un moment spontané entre deux personnes dans la lumière dorée sur le rooftop, reportage de l'événement Blackout, Medellín",
          es: "Un momento espontáneo entre dos personas bajo la luz dorada en la azotea, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "blackout-medellin-rooftop-woman-seated-smiling-golden-hour-w2b.jpg",
        alt: {
          en: "A woman seated and smiling in warm golden-hour light, Blackout event reportage photography, Medellín",
          fr: "Une femme assise et souriante dans la chaude lumière dorée, reportage de l'événement Blackout, Medellín",
          es: "Una mujer sentada y sonriendo bajo la cálida luz dorada, reportaje del evento Blackout, Medellín"
        }
      },
      {
        file: "deglorian-live-band-full-stage-concert-medellin-w2b.jpg",
        alt: {
          en: "The full Deglorian band performing together on a small stage under warm light, live concert reportage photography, Medellín",
          fr: "Le groupe Deglorian au complet jouant ensemble sur une petite scène sous une lumière chaude, photographie de reportage de concert live, Medellín",
          es: "La banda Deglorian completa tocando junta en un escenario pequeño bajo luz cálida, fotografía de reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-drummer-sticks-raised-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Deglorian drummer holding his sticks raised behind the kit in low stage light, live concert reportage photography, Medellín",
          fr: "Le batteur de Deglorian tenant ses baguettes levées derrière sa batterie dans une lumière de scène tamisée, photographie de reportage de concert live, Medellín",
          es: "El baterista de Deglorian con las baquetas en alto detrás de la batería bajo luz de escenario tenue, fotografía de reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-guitarist-singer-stage-light-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Guitarist of Deglorian playing a white electric guitar in focused concentration under stage light, live concert reportage, Medellín",
          fr: "La guitariste de Deglorian jouant une guitare électrique blanche, concentrée, sous la lumière de scène, reportage de concert live, Medellín",
          es: "La guitarrista de Deglorian tocando una guitarra eléctrica blanca con concentración bajo la luz del escenario, reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-bassist-teal-bass-striped-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Deglorian bassist in a striped shirt playing a teal bass guitar under red stage light, live concert reportage photography, Medellín",
          fr: "Le bassiste de Deglorian en chemise rayée jouant une basse turquoise sous une lumière de scène rouge, photographie de reportage de concert live, Medellín",
          es: "El bajista de Deglorian con camisa de rayas tocando un bajo turquesa bajo luz roja de escenario, fotografía de reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-keytar-player-white-shirt-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Member of Deglorian in a white shirt playing a keytar on stage, live concert reportage photography, Medellín",
          fr: "Un membre de Deglorian en chemise blanche jouant un keytar sur scène, photographie de reportage de concert live, Medellín",
          es: "Un integrante de Deglorian con camisa blanca tocando un keytar en el escenario, fotografía de reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-guitarist-red-light-profile-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Profile of a curly-haired Deglorian guitarist singing into the microphone bathed in red light, live concert reportage, Medellín",
          fr: "Profil d'un guitariste de Deglorian aux cheveux bouclés chantant au micro baigné de lumière rouge, reportage de concert live, Medellín",
          es: "Perfil de un guitarrista de Deglorian de cabello rizado cantando al micrófono bañado en luz roja, reportaje de concierto en directo, Medellín"
        }
      },
      {
        file: "deglorian-vocalist-hair-motion-orange-light-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Deglorian singer swinging her hair in warm orange light, motion-filled live concert reportage photography, Medellín",
          fr: "La chanteuse de Deglorian faisant tournoyer ses cheveux dans une lumière orange chaude, photographie de reportage de concert live pleine de mouvement, Medellín",
          es: "La cantante de Deglorian moviendo su cabello bajo cálida luz naranja, fotografía de reportaje de concierto en directo llena de movimiento, Medellín"
        }
      },
      {
        file: "deglorian-keyboard-hands-detail-warm-light-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Close detail of a musician's hand on the keys of a synthesizer in warm light during a Deglorian concert, live music reportage, Medellín",
          fr: "Détail rapproché de la main d'un musicien sur les touches d'un synthétiseur en lumière chaude pendant un concert de Deglorian, reportage de musique live, Medellín",
          es: "Detalle cercano de la mano de un músico sobre las teclas de un sintetizador bajo luz cálida durante un concierto de Deglorian, reportaje de música en directo, Medellín"
        }
      },
      {
        file: "deglorian-vocalist-projector-light-purple-live-concert-medellin-w2b.jpg",
        alt: {
          en: "Deglorian singer lit by projected light lines against a deep purple stage, atmospheric live concert reportage photography, Medellín",
          fr: "La chanteuse de Deglorian éclairée par des lignes de lumière projetées devant une scène violet profond, photographie de reportage de concert live atmosphérique, Medellín",
          es: "La cantante de Deglorian iluminada por líneas de luz proyectadas frente a un escenario violeta profundo, fotografía de reportaje de concierto en directo atmosférica, Medellín"
        }
      },
      {
        file: "deglorian-band-portrait-rooftop-sky-medellin-w2b.jpg",
        alt: {
          en: "Group portrait of the Deglorian band seated together on a rooftop against a bright blue sky, one member raising an arm, band photography, Medellín",
          fr: "Portrait de groupe du groupe Deglorian assis ensemble sur un toit devant un ciel bleu vif, un membre levant le bras, photographie de groupe, Medellín",
          es: "Retrato de grupo de la banda Deglorian sentados juntos en una azotea contra un cielo azul brillante, un integrante levantando el brazo, fotografía de banda, Medellín"
        }
      },
      {
        file: "deglorian-band-portrait-city-skyline-golden-hour-medellin-w2b.jpg",
        alt: {
          en: "The Deglorian band posing together with the Medellín city skyline and buildings behind them at golden hour, band portrait photography",
          fr: "Le groupe Deglorian posant ensemble avec les toits et immeubles de Medellín en arrière-plan à l'heure dorée, photographie de portrait de groupe",
          es: "La banda Deglorian posando junta con el horizonte y los edificios de Medellín detrás al atardecer dorado, fotografía de retrato de banda"
        }
      },
      {
        file: "deglorian-band-portrait-architectural-editorial-medellin-w2b.jpg",
        alt: {
          en: "Editorial group portrait of the Deglorian band clustered closely together in warm architectural light, band photography, Medellín",
          fr: "Portrait de groupe éditorial du groupe Deglorian serrés les uns contre les autres dans une lumière architecturale chaude, photographie de groupe, Medellín",
          es: "Retrato de grupo editorial de la banda Deglorian agrupados juntos bajo cálida luz arquitectónica, fotografía de banda, Medellín"
        }
      },
      {
        file: "deglorian-band-portrait-rooftop-playful-medellin-w2b.jpg",
        alt: {
          en: "Playful group portrait of the Deglorian band on a rooftop, members joking and throwing peace signs, band photography, Medellín",
          fr: "Portrait de groupe enjoué du groupe Deglorian sur un toit, les membres plaisantant et faisant des signes de paix, photographie de groupe, Medellín",
          es: "Retrato de grupo divertido de la banda Deglorian en una azotea, los integrantes bromeando y haciendo el signo de la paz, fotografía de banda, Medellín"
        }
      }
    ]
  },

  "portraits": {
    id: "portraits",
    folder: "images/portraits/",
    coverIndex: 0, // cypher-collective-crew-group (studio collective hero, source-labelled cover)
    title: {
      en: "Portraits",
      fr: "Portraits",
      es: "Retratos"
    },
    description: {
      en: "Portraiture across several registers, a studio series with a Medellín streetwear collective, colour environmental portraits on Medellín rooftops, and coastal film sessions.",
      fr: "Le portrait sous plusieurs registres, une série studio avec un collectif streetwear de Medellín, des portraits environnementaux couleur sur les rooftops de Medellín, et des séances argentiques en bord de mer.",
      es: "Retrato en varios registros, una serie de estudio con un colectivo de streetwear de Medellín, retratos ambientales a color en azoteas de Medellín, y sesiones analógicas en la costa."
    },
    images: [
      {
        file: "cypher-collective-crew-group-studio-portrait-medellin-w2b.jpg",
        alt: {
          en: "Studio group portrait of a Medellín streetwear and hip-hop collective posing together against a painterly backdrop, cypher series",
          fr: "Portrait de groupe en studio d'un collectif streetwear et hip-hop de Medellín posant ensemble devant une toile de fond picturale, série cypher",
          es: "Retrato de grupo en estudio de un colectivo de streetwear y hip-hop de Medellín posando juntos ante un fondo pictórico, serie cypher"
        }
      },
      {
        file: "cypher-studio-portrait-man-red-chain-black-tee-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young man in a black tee and red chain making a peace sign near his eye, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune homme en t-shirt noir et chaîne rouge faisant un signe de paix près de l'œil, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con camiseta negra y cadena roja haciendo el signo de la paz junto al ojo, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-duo-red-beanie-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of two friends from the collective, one in a red beanie, against a painterly backdrop, Medellín streetwear cypher series",
          fr: "Portrait studio de deux amis du collectif, l'un en bonnet rouge, devant une toile de fond picturale, série cypher streetwear de Medellín",
          es: "Retrato de estudio de dos amigos del colectivo, uno con gorro rojo, ante un fondo pictórico, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-woman-close-up-curly-hair-medellin-w2b.jpg",
        alt: {
          en: "Striking studio close-up of a young woman with curly hair resting her head, direct intense gaze, Medellín streetwear cypher series",
          fr: "Gros plan studio saisissant d'une jeune femme aux cheveux bouclés, tête posée, regard intense et direct, série cypher streetwear de Medellín",
          es: "Primer plano de estudio impactante de una joven de cabello rizado con la cabeza apoyada, mirada intensa y directa, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-man-la-cap-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young man in a black LA cap and dark sweater with a calm direct gaze, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune homme en casquette LA noire et pull sombre au regard calme et direct, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con gorra LA negra y suéter oscuro con mirada tranquila y directa, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-woman-visor-hands-face-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young woman in a visor framing her face with both hands, Medellín streetwear cypher series",
          fr: "Portrait studio d'une jeune femme en visière encadrant son visage des deux mains, série cypher streetwear de Medellín",
          es: "Retrato de estudio de una joven con visera enmarcando su rostro con ambas manos, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-person-cap-pointing-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young person in a baseball cap pointing toward the camera, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune en casquette pointant vers l'objectif, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con gorra apuntando hacia la cámara, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-man-bucket-hat-camo-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young man in a black bucket hat and camo jacket, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune homme en bob noir et veste camouflage, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con sombrero de pescador negro y chaqueta de camuflaje, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-man-leather-jacket-seated-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young man in a leather jacket seated against a painterly backdrop with a film-strip border, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune homme en veste de cuir assis devant une toile de fond picturale avec une bordure pellicule, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con chaqueta de cuero sentado ante un fondo pictórico con borde de película, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-two-friends-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of two members of the collective posing together against a painterly backdrop, Medellín streetwear cypher series",
          fr: "Portrait studio de deux membres du collectif posant ensemble devant une toile de fond picturale, série cypher streetwear de Medellín",
          es: "Retrato de estudio de dos integrantes del colectivo posando juntos ante un fondo pictórico, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-two-women-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of two young women side by side against a painterly backdrop, Medellín streetwear cypher series",
          fr: "Portrait studio de deux jeunes femmes côte à côte devant une toile de fond picturale, série cypher streetwear de Medellín",
          es: "Retrato de estudio de dos jóvenes lado a lado ante un fondo pictórico, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-man-backwards-cap-burgundy-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of a young man in a backwards cap and burgundy jacket with a hand to his chest, Medellín streetwear cypher series",
          fr: "Portrait studio d'un jeune homme en casquette à l'envers et veste bordeaux, main sur la poitrine, série cypher streetwear de Medellín",
          es: "Retrato de estudio de un joven con gorra al revés y chaqueta bordó, mano en el pecho, serie cypher de streetwear de Medellín"
        }
      },
      {
        file: "cypher-studio-portrait-duo-red-top-medellin-w2b.jpg",
        alt: {
          en: "Studio portrait of two members of the collective, a woman in a red top with a friend, Medellín streetwear cypher series",
          fr: "Portrait studio de deux membres du collectif, une femme en haut rouge avec un ami, série cypher streetwear de Medellín",
          es: "Retrato de estudio de dos integrantes del colectivo, una mujer con top rojo y un amigo, serie cypher de streetwear de Medellín"
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
      },
      {
        file: "portrait-group-women-boat-black-white-w2b.jpg",
        alt: {
          en: "Group portrait of young women laughing together on a boat, black and white film",
          fr: "Portrait de groupe de jeunes femmes riant ensemble sur un bateau, argentique noir et blanc",
          es: "Retrato de grupo de mujeres jóvenes riendo juntas en un barco, analógico en blanco y negro"
        }
      },
      {
        file: "portrait-woman-leopard-print-boat-coast-w2b.jpg",
        alt: {
          en: "Portrait of a woman in a leopard-print dress seated on a boat, coastal mountains behind, colour film",
          fr: "Portrait d'une femme en robe léopard assise sur un bateau, montagnes côtières en arrière-plan, argentique couleur",
          es: "Retrato de una mujer con vestido de leopardo sentada en un barco, montañas costeras al fondo, analógico color"
        }
      },
      {
        file: "portrait-couple-marina-harbour-w2b.jpg",
        alt: {
          en: "Portrait of a couple at a harbour marina, sailboats behind, colour film",
          fr: "Portrait d'un couple à la marina d'un port, voiliers en arrière-plan, argentique couleur",
          es: "Retrato de una pareja en la marina de un puerto, veleros al fondo, analógico color"
        }
      },
      {
        file: "portrait-two-women-tender-moment-w2b.jpg",
        alt: {
          en: "Tender portrait of a young woman resting against an older woman in warm light, colour film",
          fr: "Portrait tendre d'une jeune femme reposant contre une femme plus âgée dans une lumière chaude, argentique couleur",
          es: "Retrato tierno de una joven apoyada en una mujer mayor bajo una luz cálida, analógico color"
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
