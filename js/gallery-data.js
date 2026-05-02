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
    coverIndex: 0,
    title: {
      en: "Fashion & Editorial",
      fr: "Mode & Éditorial",
      es: "Moda & Editorial"
    },
    description: {
      en: "Editorial fashion, lookbooks, and magazine covers — Mediterranean and Corsican locations.",
      fr: "Mode éditoriale, lookbooks et couvertures de magazine — décors méditerranéens et corses.",
      es: "Moda editorial, lookbooks y portadas de revista — escenarios mediterráneos y corsos."
    },
    images: [
      {
        file: "vogue-cover-shape-of-a-star-editorial-rocky-cove-black-white-w2b.jpg",
        alt: {
          en: "Vogue magazine cover The Shape of a Star — model in a rocky cove, black and white fashion editorial",
          fr: "Couverture Vogue The Shape of a Star — mannequin dans une crique rocheuse, éditorial mode noir et blanc",
          es: "Portada Vogue The Shape of a Star — modelo en una cala rocosa, editorial de moda blanco y negro"
        }
      },
      {
        file: "cosmopolitan-cover-caught-by-the-sea-white-dress-coastal-w2b.jpg",
        alt: {
          en: "Cosmopolitan magazine cover Caught by the Sea — model in a white dress on coastal stone, fashion editorial",
          fr: "Couverture Cosmopolitan Caught by the Sea — mannequin en robe blanche sur la pierre côtière, éditorial mode",
          es: "Portada Cosmopolitan Caught by the Sea — modelo con vestido blanco sobre piedra costera, editorial moda"
        }
      },
      {
        file: "model-white-dress-stone-coast-saint-florent-corsica-fashion-w2b.jpg",
        alt: {
          en: "Model reclining in a white dress on a stone harbour wall, Saint Florent Corsica in background, colour film fashion editorial",
          fr: "Mannequin allongée en robe blanche sur un mur de port en pierre, Saint Florent en Corse en arrière-plan, éditorial mode argentique couleur",
          es: "Modelo recostada con vestido blanco sobre muro de puerto de piedra, Saint Florent Córcega al fondo, editorial moda analógico color"
        }
      },
      {
        file: "model-red-bikini-rocky-ruins-mediterranean-fashion-colour-w2b.jpg",
        alt: {
          en: "Model in a red bikini against weathered stone ruins surrounded by Mediterranean scrub, colour film fashion photography",
          fr: "Mannequin en bikini rouge contre des ruines en pierre usée entourée de maquis méditerranéen, photographie de mode argentique couleur",
          es: "Modelo en bikini rojo contra ruinas de piedra envejecida rodeada de matorral mediterráneo, fotografía de moda analógico color"
        }
      },
      {
        file: "model-red-bikini-coastal-portrait-corsica-fashion-w2b.jpg",
        alt: {
          en: "Coastal portrait of a model in a red bikini against a stone wall with Corsican coast and mountains, colour film fashion",
          fr: "Portrait côtier d'une mannequin en bikini rouge contre un mur en pierre avec la côte corse et les montagnes, mode argentique couleur",
          es: "Retrato costero de modelo en bikini rojo contra muro de piedra con costa corsa y montañas, moda analógico color"
        }
      },
      {
        file: "model-mediterranean-villa-chains-swimwear-black-white-fashion-w2b.jpg",
        alt: {
          en: "Model in swimwear seated on stone with chains and Mediterranean villa shutters behind, black and white fashion editorial",
          fr: "Mannequin en maillot assise sur la pierre avec chaînes et volets de villa méditerranéenne en arrière-plan, éditorial mode noir et blanc",
          es: "Modelo en bañador sentada sobre piedra con cadenas y persianas de villa mediterránea detrás, editorial moda blanco y negro"
        }
      },
      {
        file: "model-yacht-orange-dress-portrait-mediterranean-summer-fashion-w2b.jpg",
        alt: {
          en: "Model in a coral and orange floral dress relaxing on a yacht deck, summer Mediterranean fashion editorial",
          fr: "Mannequin en robe à motifs floraux corail et orange se détendant sur le pont d'un yacht, éditorial mode estival méditerranéen",
          es: "Modelo con vestido floral coral y naranja descansando en cubierta de yate, editorial moda mediterránea de verano"
        }
      },
      {
        file: "model-pink-bikini-pool-yacht-summer-editorial-fashion-w2b.jpg",
        alt: {
          en: "Model in a vibrant pink bikini emerging from turquoise water at the edge of a yacht swim platform, summer fashion editorial",
          fr: "Mannequin en bikini rose vif émergeant d'une eau turquoise au bord d'une plateforme de bain de yacht, éditorial mode estival",
          es: "Modelo con bikini rosa vibrante emergiendo del agua turquesa al borde de una plataforma de baño de yate, editorial moda verano"
        }
      }
    ]
  },

  "restaurants": {
    id: "restaurants",
    folder: "images/restaurants/",
    coverIndex: 0,
    title: {
      en: "Restaurants & Hospitality",
      fr: "Restaurants & Hôtellerie",
      es: "Restaurantes & Hostelería"
    },
    description: {
      en: "Restaurant atmospheres and culinary editorial — La Gaffe and A Stretta in Corsica.",
      fr: "Ambiances de restaurant et éditorial gastronomique — La Gaffe et A Stretta en Corse.",
      es: "Ambientes de restaurante y editorial culinario — La Gaffe y A Stretta en Córcega."
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
    coverIndex: 0,
    title: {
      en: "Events & Reportage",
      fr: "Événements & Reportage",
      es: "Eventos & Reportaje"
    },
    description: {
      en: "Concert reportage, festivals, and literary readings — from Feniks Festival to bookshop spectacles.",
      fr: "Reportage concert, festivals et lectures littéraires — du Feniks Festival aux spectacles en librairie.",
      es: "Reportaje de conciertos, festivales y lecturas literarias — desde Feniks Festival hasta espectáculos en librerías."
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
      }
    ]
  },

  "portraits": {
    id: "portraits",
    folder: "images/portraits/",
    coverIndex: 0,
    title: {
      en: "Portraits",
      fr: "Portraits",
      es: "Retratos"
    },
    description: {
      en: "Family portraits and intimate group sessions — black and white film portraiture.",
      fr: "Portraits de famille et séances de groupe intimes — portraits argentiques en noir et blanc.",
      es: "Retratos de familia y sesiones de grupo íntimas — retratos analógicos en blanco y negro."
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
