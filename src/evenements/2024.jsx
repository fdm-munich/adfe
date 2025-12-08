import Email from "../components/shared/email";
import FDMButton from "../components/shared/fdm_btn";

/* eslint-disable max-len */
/**
 * Array of events.
 *
 * @type {FDMEvent[]}
 */
export const events_2024 = [
  {
    id    : "societe_fresque_du_climat_20_01",
    year  : 2024,
    Actor : () => "Ferdinand Villaume & et Sylvain Auzoux",
    date  : "20 Janvier 2024 de 10h à 13h",
    description : (
      <>
        Français du Monde - Munich vous donne rendez-vous à la EineWeltHaus pour participer à un atelier Fresque du Climat le samedi 20 janvier 2024
        de 10h à 13h.
        <br />
        <br />
        Une approche ludique, une implication personnelle, permettent de mieux appréhender et comprendre les enjeux liés aux changements climatiques.
        <br />
        <br />
      </>
    ),
    Location : () => (
      <a target="blank" href="https://www.einewelthaus.de">
        EineWeltHaus salle 108
      </a>
    ),
    title : "Fresque du climat 🌍",
    past  : true,
    price : {
      adherents : 7,
      nonadh    : 10,
    },
  },
  {
    id   : "galette_20_01",
    year : 2024,
    date : "20 Janvier 2024 à partir de 15h",
    description : (
      <>
        Français du Monde - Munich vous donne rendez-vous à la EineWeltHaus pour partager des galettes des rois le samedi 20 janvier 2024 à partir de
        15h.
        <br />
        <br />
        Autour de cette tradition française, nous souhaitons raviver notre communauté et échanger ensemble sur des thèmes qui nous intéressent ou nous
        tiennent à cœur.
        <br />
        <br />
      </>
    ),
    Location : () => (
      <a target="blank" href="https://www.einewelthaus.de">
        EineWeltHaus Werkstatt raum
      </a>
    ),
    title : "Galette des rois 👑",
    past  : true,
    price : {
      default : 5,
    },
  },
  {
    id    : "societer_2_tonnes_3_02",
    year  : 2024,
    title : "Atelier 2 tonnes  🌍",
    Actor : () => (
      <a
        target="blank"
        href="https://www.linkedin.com/in/audrey-bizet-974b12137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      >
        Audrey Bizet
      </a>
    ),
    date : "03 Février 2024 de 10h à 13h30",
    description :
      "L'atelier immersif pour imaginer le futur et agir ensemble pour le climat ! En 3 heures et en équipe, projetez-vous jusqu&apos;à 2050, découvrez les leviers individuels et collectifs de la transition bas carbone, et identifiez le rôle que vous souhaitez y jouer !",
    Location : () => (
      <a target="blank" href="https://www.einewelthaus.de">
        EineWeltHaus
      </a>
    ),
    past  : true,
    price : {
      adherents : 7,
      nonadh    : 10,
    },
  },
  {
    id    : "senateur_h_conway_16_02",
    year  : 2024,
    title : "Rencontre sénateur des français de l'étranger 🇫🇷",
    Actor : () => (
      <a href="https://www.helene-conway.com" target="blank">
        Hélène Conway Mouret
      </a>
    ),
    date : "16 Février à 18h30",
    description :
      "Venez à la rencontre de la sénatrice des français de l'étranger Hélène Conway Mouret de passage à Munich à l'occasion de la Munich Security Conference.",
    Location : () => (
      <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
        Institut français
      </a>
    ),
    past : true,
  },
  {
    id    : "culture_8_03",
    year  : 2024,
    title : "Une soirée musicale et poétique 🎼",
    date  : "8 Mars à 18h30",
    description : (
      <>
        À l&apos;occasion de la Journée internationale des Droits de la femme, Français du Monde Munich vous convie à une soirée musicale, lyrique et
        poétique en l&apos;honneur d&apos;artistes femmes trop peu interprétées comme Clara Schumann, Lille Boulanger, Ethel Smyth ainsi que Barbara,
        Edith Piaf et leurs chansons.
        <br />
        <br />
        Édith Fellmann à la harpe, Nargiza Yusupova au violoncelle, Alice Stamataki au chant et Coline Kahraunis et Hervé Adeline à la lecture.
        <br />
        <br />
        Rejoignez-nous pour cette belle soirée d&apos;hommage aux femmes ! Un pot d&apos;honneur sera offert à la fin du concert.
      </>
    ),
    Location : () => (
      <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
        Institut français Munich, salon bleu
      </a>
    ),
    past  : true,
    price : {
      adherents : 15,
      nonadh    : 20,
    },
  },
  {
    id    : "senateur_y_chantrel_15_03",
    year  : 2024,
    title : "Rencontre sénateur des français de l'étranger 🇫🇷",
    Actor : () => (
      <a href="https://www.senat.fr/senateur/chantrel_yan20264j.html" target="blank">
        Yan Chantrel
      </a>
    ),
    date : "15 Mars à 18h",
    description :
      "Venez à la rencontre du sénateur des français de l'étranger Yan Chantrel lors d'une réunion publique à l'institut Français de Munich.",
    Location : () => (
      <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
        Institut français
      </a>
    ),
    past : true,
  },
  {
    id    : "conference_elt_18_04",
    year  : 2024,
    title : "Présentation de l'ELT, un nouveau télescope européen 🔭",
    date  : "18 Avril 2024 à 18H",
    Actor : () => (
      <a
        target="blank"
        href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAALRZvkB74_aV_ns9REsGmqgB7tSgVnRrv0&keywords=elise%20vernet&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ea700353-7f49-4df6-bcab-d814e078bbab&sid=ATM&spellCorrectionEnabled=true"
      >
        Elise Vernet
      </a>
    ),
    description : (
      <>
        Dans le désert d&apos;Acamata 🏜 au Chili, l&apos;agence européenne spatiale ESO achève la construction du plus puissant téléscope au monde.{" "}
        <br />
        Élise Vernet, co-ingénieur du projet nous présente de cette avancée déterminante qui captera en direct des images hors du système solaire et,
        qui sait, apportera des preuves de vie ... ailleurs.
        <br />
        <br />
        Conférence gratuite.
        <br />
        <br />
        Nombre de places limitées, inscription obligatoire. Clôture des inscriptions: 16/04 à midi, en cas d&apos;indisponibilité, merci de le
        signaler.
      </>
    ),
    Location : () => "Salle 009, Lycée Jean-Renoir, Berlepschstraße 3 München",
    past     : true,
  },
  {
    id       : "balade_20_04",
    past     : true,
    year     : 2024,
    title    : "Balade Ebersberg  🥾💐🗼",
    date     : "Samedi 20 Avril 2024 , de 8h45 à 17h00",
    Location : () => "Munich Hauptbahnof",
    description : (
      <>
        <p className="text-2xl text-upsdell-red font-bold mt-2">Balade annulée pour cause de pluie</p>
        <p className="text-lg text-upsdell-red mb-2">Reportée à une date ultérieure</p>
        <h6 className="text-green-cyan">Rendez-vous:</h6>
        <ul className="list-disc ml-8">
          <li>
            Soit à Marienplatz (niveau du 1er sous-sol à côté des distributeurs de titres de transport) à 08h45 pour l&apos;achat de titres de
            transport de groupe. Départ avec la S6 de 9p0, arrivée à Ebersberg à 9h58.
          </li>
          <li>Soit devant la gare de Ebersberg à 10h00.</li>
        </ul>
        <h6 className=" text-green-cyan">Durée de la balade:</h6>
        <p className="ml-2">
          Au total environ 4h30 de marche ( quelques arrêts sont prévus) pour 12 km
          <br />
          Repas au Ebersberger Alm ou à l&apos;auberge Zum Gass (selon disponibilité pour réservation de groupe.
          <br />
          <br />
          Balade facile, adaptée aux enfants à partir de 6-8 ans. Paysage bucolique, chemin de campagne, sans dénivelé.
          <br />
          <br />
          Au sortir de la ville, de beaux paysages nous attendent le long d&apos;un petit chemin de croix, autour des lacs Egglsee et Klostersee ainsi
          que le long du chemin des héros. Notre but final sera la tour d&apos;observation de la Ludwigshöhe afin d&apos;admirer un magnifique
          panorama de la chaîne des Alpes. <br />
          Les plus sportifs n&apos;ayant pas le vertige grimperont au sommet de la tour.
          <br />
          <br />
          Manifestation gratuite (transport et restauration à la charge des participants).
          <br />
          <br />
          <span className="underline">Retour prévu à la gare d&apos;Ebersberg entre 16h30 et 17h pour prendre le S6 direction Munich à 17h02</span>
          <br />
          <br />
        </p>
        <p className="mt-2">
          <span className="text-green-cyan">
            <b>RESERVATION OBLIGATOIRE</b>
          </span>{" "}
          jusqu&apos;au 18 avril par email: <Email /> <br />
          en précisant:
          <br />
          <ul className="list-disc ml-8">
            <li>le nombre de personnes</li>
            <li>si vous souhaiter manger à l&apos;auberge</li>
            <li>si vous souhaitez participer à un titre de transport de groupe</li>
          </ul>
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "balade_11_05",
    year     : 2024,
    past     : true,
    title    : "Balade dans la vallée de la Loisach (Eschenlohe – Farchant) 🥾⛰️",
    date     : "Samedi 11 mai , de 8p5 à 18h30",
    Location : () => "Rendez-vous à Munich Hauptbahnof",
    description : (
      <>
        <p>
          Cette balade est une première dans la coopération de notre association avec l&apos;association <b>Genuss zu Fuss</b>, elle est proposée aux
          adhérents et sympathisants des deux associations. D&apos;autres sorties communes sont également prévues à l&apos;avenir.
        </p>
        <p className="mt-2 underline">Rendez-vous à 08p5 à Hauptbahnhof côté Stanberger Bahnhof (quai 27-36)</p>
        <p>
          <i>Evtl. achat de billets de train en commun (Bayern Ticket, pour les personnes n&apos;ayant pas d&apos;abonnement). </i>
        </p>
        <p className="mt-2">
          RB 6 (direction Garmisch) de 8h32 jusqu’à Eschenlohe d’où débutera la marche dans la vallée de la Loisach jusqu´à Farchant, en admirant les sommets du Wetterstein et la flore alpine.
          Pique-nique en chemin, puis arrêt au Biergarten de Farchant. Ce sera le but final de la balade.
          Prévoir un casse-croûte pour midi, des boissons et de bonnes chaussures.
        </p>
        <p className="mt-2 underline">Retour sur Munich prévu vers 18h50.</p>
        <p className="mt-2">
          NB : Le voyage en train (gemeinsames Bayernticket für die Teilnehmer ohne Deutschlandticket) et la restauration à la brasserie sont à vos frais. Les associations ne demandent aucune participation.
        </p>
        <p className="mt-2">
          ⚠️ Prévoir un casse-croûte pour midi, des boissons et de bonnes chaussures. Difficulté moyenne, convient aussi aux enfants à partir de 7
          ans.
        </p>
        <p className="mt-2">
          <b className="text-upsdell-red">RESERVATION OBLIGATOIRE</b> jusqu&apos;au 9 mai par email: <Email />
          <br />
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "balade_06_07",
    year     : 2024,
    past     : true,
    title    : "Balade dans la gorge de Maising 🥾⛰️",
    date     : "Samedi 6 juillet , de 10p0 - 16h00",
    Location : () => "Rendez-vous à Munich Hauptbahnof (S-Bahn Hauptbahnhof Munich - Starnberg)",
    description : (
      <>
        <p className="underline my-2">
          Rendez-vous à 10h00 à Hauptbahnhof sur le quai du S-Bahn pour Starnberg (S6 de 10p0)
        </p>
        <p>
          S-Bahn jusqu´à Starnberg d’où débutera la marche dans la gorge de Maising (Starnberg – Possenhofen) sur un chemin plat et ombragé. <br />
          Déjeuner au Maisinger Hof, près du lac de Maising. Suite de la balade jusqu´à Possenhofen, où se trouve le château de Sissi, et une plage au bord du lac de Starnberg, où chacun pourra rester à sa guise et se baigner.<br />
          <span className="mt-4 h-80 flex justify-center items-center overflow-hidden">
            <img src="/img/balade_gorge_de_maising.png" className="object-contain h-full rounded-lg"/>
          </span>
          <br />Retour à Munich avec le S6 de la gare de Possenhofen.<br />
          <br />Prévoir des boissons et de bonnes chaussures.<br />
        </p>
        <p className="my-4">
          NB : Le voyage en S-Bahn et la restauration sont à vos frais. Les associations ne demandent aucune participation.
        </p>
        <p className="my-4">
          Difficulté moyenne, convient aussi aux enfants à partir de 7 ans.
        </p>
        <p className="mt-2">
          <b className="text-upsdell-red">RESERVATION OBLIGATOIRE</b> jusqu&apos;au 4/07 par mail: <Email />
          <br />
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "fete_nationale_12_07",
    year     : 2024,
    past     : true,
    title    : "Bal du 12 juillet 🍾🥳🇫🇷",
    date     : "Vendredi 12 juillet , de 19h - 05h00",
    Location : () => "Muffatwerk Ampere, Zellstr. 4, 81667 Munich",
    description : (
      <>
        <p>Cette année, nous avons le plaisir de vous présenter un programme riche et diversifié pour célébrer la fête nationale française à Munich, organisé par l&apos;association <b>CoBal</b>.
          Nous avons invité des artistes talentueux qui représentent la diversité et la richesse de la francophonie et de la culture musicale.</p>

        <span className="mt-4 h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/cobal-12-juillet.png" className="object-contain h-full rounded-lg"/>
        </span>

        <ul className="mt-4 text-sm">
          <li>Droits d&apos;entrée: 12€ sur réservation / 15€ sur place (Abendkasse)</li>
          <li>Accès réservé aux plus de 16 ans - Buffet et boissons payants</li>
          <li>Paimenet uniquement en espèces 💸</li>
        </ul>
        <div className="flex justify-center mt-4">
          <FDMButton
            handleOnclick={ () => { window.location.href = "https://allevents.in/munich/bal-de-la-fête-nationale/80002854295462"; } }
            text="Réserver ma place"
          />
        </div>
        <p className="text-2xl text-green-cyan mt-4">Les Artistes</p>
        <p className="text-xl pt-1 text-purple-navy">Ça touche</p>
        <p>Ce groupe interprète des chansons françaises dans un style jazz frais et décontracté. Leur musique est parfaite pour créer une ambiance propice à la rêverie et à la joie,
          en invitant les participants à chanter et à sourire.</p>
        <p><a href="https://catouche.net" target="_blank" className="text-green-cyan hover:underline text-sm" rel="noreferrer">Découvrir Ça touche 🎵</a></p>

        <p className="text-xl pt-4 text-purple-navy">Manon</p>
        <p>Une jeune artiste pop française dont les chansons dynamiques et contemporaines captivent un large public. Finaliste de The Voice 2023,
          Manon apporte une énergie nouvelle et vibrante à la scène musicale française.</p>
        <p><a href="https://www.instagram.com/manon.laure.official/" target="_blank" className="text-green-cyan hover:underline text-sm" rel="noreferrer">Découvrir Manon 🎵</a></p>

        <p className="text-xl pt-4 text-purple-navy">King Automatic</p>
        <p>Connu pour son rock alternatif transglobal, King Automatic mélange le rock garage, le blues et des éléments de musique des années 60
          pour créer des performances uniques et électrisantes.</p>
        <p><a href="http://www.kingautomatic.com" target="_blank" className="text-green-cyan hover:underline text-sm" rel="noreferrer">Découvrir King Automatic 🎵</a></p>

        <p className="text-xl pt-4 text-purple-navy">Zouglou Makers</p>
        <p>En provenance de Côte d&apos;Ivoire, les Zouglou Makers jouent du zouglou, dérivé moderne du Wôyô, un genre musical empreint de rythmes entraînants et de paroles engagées.
          Rendue également populaire par leurs compatriotes  Magic System, leur musique célèbre la solidarité et la convivialité, soulignant les liens entre les peuples et la la communauté francophone. Leur participation est une marque de célébration
          de la francophonie et de l&apos;amitié entre les peuples.</p>
        <p><a href="https://www.youtube.com/@zougloumakers2783" target="_blank" className="text-green-cyan hover:underline text-sm" rel="noreferrer">Découvrir Zouglou Makers 🎵</a></p>

        <p className="text-xl pt-4 text-purple-navy">Fin de Soirée</p>
        <p>La soirée se terminera en beauté avec un DJ Set de Christian Berst, qui est devenu une tradition pour clôturer le bal de la fête nationale.
          Connu pour ses mixes captivants, Christian Berst jouera des tubes français emblématiques qui ont marqué l&apos;histoire, invitant tout le monde à danser et à
          célébrer ensemble jusqu&apos;à la fin de la nuit.</p>

        <p className="text-2xl pt-4 text-upsdell-red">Un Événement Inoubliable</p>
        <p>Le bal organisé l&apos;année dernière a rassemblé plus de 600 personnes tout au long de la soirée, témoignant du succès et de l&apos;enthousiasme suscités par cet événement.
          Nous sommes impatients de vous accueillir cette année encore pour une célébration mémorable de la fête nationale française, un moment de partage et de fête qui met en
          lumière la richesse de notre culture commune.
        </p>
      </>
    ),
  },
  {
    id       : "petanque_20_07",
    year     : 2024,
    past     : true,
    title    : "Tournoi de Pétanque 🎳",
    date     : "Samedi 20 juillet , à partir de 14h00",
    Location : () => "Au fond du Hofgarten, Munich (Odeonsplatz)",
    price    : {
      adherents : 3,
      nonadh    : 5,
    },
    description : (
      <>
        <p>Venez participer à notre tournoi de pétanque annuel dans le Hofgarten. Que vous soyez un joueur expérimenté ou un débutant, tout le monde est le bienvenu pour une aprés-midi de détente et de compétition amicale.</p>

        <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/petanque.jpeg" className="object-contain h-full rounded-lg"/>
        </span>

        <p>Le tournoi commencera à 14h00, alors n&apos;oubliez pas d&apos;apporter vos boules de pétanque et votre bonne humeur !</p>
        <p className="mt-2">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE</b> jusqu&apos;au 18/07 par mail: <Email />
          <br />
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "petanque_10_08",
    year     : 2024,
    past     : true,
    title    : "Tournoi de Pétanque 🎳",
    date     : "Samedi 10 août , à partir de 14h00",
    Location : () => "Au fond du Hofgarten, Munich (Odeonsplatz)",
    // price    : {
    //   adherents : 3,
    //   nonadh    : 5,
    // },
    description : (
      <>
        <p>
          Rejoignez-nous pour un autre tournoi de pétanque dans le magnifique Hofgarten. Que vous soyez un joueur chevronné ou un novice, tout le monde est invité à participer à cette journée de détente et de compétition amicale.
          Lors de notre dernier tournoi, Ryan et Augustin ont montré leur maîtrise du jeu en remportant le titre de champions. Peut-être que cette fois-ci, vous aurez l&apos;occasion de les défier et de prouver vos compétences.
          <br /><br />
          Qui sait, peut-être serez-vous le prochain champion de notre tournoi de pétanque !
        </p>

        <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/petanque_10_08.jpeg" className="object-contain h-full rounded-lg"/>
        </span>

        <p>
          Le tournoi débutera à 14h00, alors n&apos;oubliez pas d&apos;apporter vos boules de pétanque et votre enthousiasme ! <br />
          Merci de nous indiquer dans votre email d&apos;inscription si nous devrons vous fournir un jeux de boule.
        </p>
        <p className="mt-2">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE</b> jusqu&apos;au 08/08 par mail: <Email />
          <br />
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "petanque_14_09",
    year     : 2024,
    past     : true,
    title    : "Tournoi de Pétanque 🎳 - Finale de la Saison",
    date     : "Samedi 14 septembre, à partir de 15h00",
    Location : () => "Au fond du Hofgarten, Munich (Odeonsplatz)",
    price    : {
      adherents : 3,
      nonadh    : 5,
    },
    description : (
      <>
        <p>
          Venez participer à notre dernier tournoi de pétanque de la saison dans le splendide cadre du Hofgarten. Que vous soyez un joueur aguerri
          ou un débutant, tout le monde est bienvenu pour une après-midi de plaisir et de compétition amicale.
        </p>
        <p className="mt-2">
          Ce tournoi couronnera le champion 2024 de notre saison de pétanque. Une occasion unique de montrer vos talents et, peut-être, de remporter
          le titre de champion de l&apos;année. Un lot spécial attend l&apos;équipe gagnante !
        </p>
        <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/petanque_14_09.png" className="object-contain h-full rounded-lg"/>
        </span>
        <p>
          Le tournoi débutera à 14h00, alors n’oubliez pas d’apporter vos boules de pétanque et votre bonne humeur ! Merci de nous indiquer dans
          votre email d’inscription si nous devons vous fournir un jeu de boules.
        </p>
        <p className="mt-2">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE</b> jusqu’au 12/09 par email: <Email />
          <br />
          <i>En cas d&apos;annulation ou de report, vous serez prévenus par mail.</i>
        </p>
      </>
    ),
  },
  {
    id       : "pot_rentree_19_09",
    year     : 2024,
    past     : true,
    title    : "Pot de rentrée 🍷",
    date     : "Jeudi 19 septembre, à partir de 18h00",
    Location : () => (
      <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
        Institut Français de Munich, Rez-de-chaussée, Kaulbachstr 13
      </a>
    ),
    price : {
      adherents : 0,
      nonadh    : 7,
    },
    description : (
      <>
        <p>
          Rejoignez-nous pour le pot de rentrée de Français du Monde - Munich ! C&apos;est l&apos;occasion parfaite pour se retrouver, discuter des projets à venir
          et accueillir les nouveaux membres de notre communauté.
        </p>
        <span className="mt-4 h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/pot_rentree_24.png" className="object-contain h-full rounded-lg"/>
        </span>
        <p className="mt-2">
          Venez nombreux pour passer un moment convivial et chaleureux autour d&apos;un verre. Une excellente opportunité pour tisser des liens et s&apos;informer
          sur les activités de l&apos;association.
        </p>
        <p>
          La participation est gratuite pour les adhérents. Pour les non-membres, une participation de 7€ est demandée. Vous aurez la possibilité d’adhérer
          à l&apos;association sur place.
        </p>
      </>
    ),
  },
  {
    id       : "expo_pamuk_10_10",
    year     : 2024,
    past     : true,
    title    : "Visite guidée exposition Orhan Pamuk 🖼️",
    date     : "Jeudi 10 octobre, de 15h00 à 16h30",
    Location : () => (
      <a target="blank" href="https://www.lenbachhaus.de/">
        Musée Lenbach de Munich (rdv à l'entrée du musée à 14h45)
      </a>
    ),
    price : {
      adherents : 5,
      nonadh    : 8,
    },
    description : (
      <>
        <p>
          Venez découvrir l&apos;exposition d&apos;Orhan Pamuk lors d&apos;une visite guidée au musée Lenbach de Munich. Nous serons accueillis et guidés par Mme Melanie
          Vietmeier, qui a elle-même préparé l&apos;exposition en collaboration avec Orhan Pamuk.
        </p>
        <p className="mt-2">
          Orhan Pamuk, lauréat du prix Nobel de littérature, est un artiste aux talents multiples : écrivain, peintre, photographe et créateur de musée. «
          Le musée de l&apos;innocence », créé à Istanbul à partir d&apos;objets du quotidien en parallèle avec son roman du même nom, a été partiellement recréé pour la
          Lenbachhaus. Cette exposition exceptionnelle présente également des œuvres inspirées de Paul Klee et Alfred Kubin, ainsi que des extraits des
          dessins, tableaux et journaux de voyage d&apos;Orhan Pamuk.
        </p>
        <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/expo_pamuk_10_10.png" className="object-contain h-full rounded-lg"/>
        </span>
        <p>
          En plus de votre billet d&apos;entrée, il vous sera demandé une participation de 5€ pour les adhérents et de 8€ pour les non-adhérents. Vous aurez la possibilité
          d’adhérer à l&apos;association sur place.
        </p>
        <p className="mt-2">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE</b> jusqu’au 08/10 par email: <Email />
        </p>
      </>
    ),
  },
  {
    id       : "musee_egypte_10_11",
    year     : 2024,
    title    : "Visite guidée au Musée d'Art Égyptien de Munich 🏺",
    date     : "Dimanche 10 novembre, de 10h15 à 11h45",
    Location : () => (
      <a target="blank" href="https://smaek.de/ihr-besuch/">
        Staatliches Museum Ägyptischer Kunst, Gabelsbergerstr. 35, München
      </a>
    ),
    Actor : () => (
      <>
        Caroline Stadlmann
      </>
    ),
    description : (
      <>
        Nous avons le plaisir de vous inviter à une visite au Musée d&apos;Art Égyptien de Munich, dirigée en français par une égyptologue diplômée avec une expérience sur le terrain,
        et une activité en tant que guide au musée, Caroline Stadlmann.
        <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
          <img src="/img/musee_egypte_10_10.jpg" className="object-contain h-full rounded-lg"/>
        </span>
        Cette visite de <b>90 minutes</b> vous offrira une immersion fascinante dans l&apos;univers de l&apos;Égypte ancienne,
        en explorant divers aspects de cette civilisation millénaire.
        <br />
        <br />
        Au-delà d&apos;une simple chronologie, la visite mettra en lumière les grands trésors du musée.
        Vous découvrirez les mystères des pharaons, la vie quotidienne des Égyptiens, et les croyances autour de la vie après la mort,
        illustrées par la présentation d&apos;une momie authentique. La place des femmes dans la société égyptienne, les relations avec les cultures voisines,
        ainsi que l&apos;influence de la période gréco-romaine et du christianisme en Égypte seront également abordées.
        <br />
        <br />
        De plus, nous explorerons l&apos;art et l&apos;artisanat égyptiens, révélant la richesse et la diversité des techniques
        utilisées par les anciens Égyptiens pour créer des objets à la fois utilitaires et sacrés.
        <br />
        <br />
        Ne manquez pas cette occasion unique d&apos;enrichir vos connaissances sur l&apos;une des civilisations les plus fascinantes de l&apos;histoire!
        <br />
        <br />
        Cette visite est également conseillée aux enfants.
        <br />
        <br />
        <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE</b> jusqu&apos;au 8 novembre. Le nombre de places est limité à 25 personnes, vous recevrez systématiquement confirmation.
      </>
    ),
    price : {
      adherents : 7,
      nonadh    : 10,
      children  : 2,
    },
    past : true,
  },
  {
    past     : true,
    id       : "brunch_debat_17_11",
    year     : 2024,
    title    : "Brunch Débat 🍽️",
    date     : "Dimanche 17 novembre, de 11h à 13h",
    Location : () => "Zum kloster, Preysingstraße 77, 81667 München",
    description : (
      <>
        <p>
          Nous vous proposons de nous retrouver autour d&apos;un bon repas pour
          échanger sur l&apos;actualité internationale et plus particulièrement sur
          les <b>élections présidentielles américaines de 2024</b>. Ce sera l&apos;occasion
          de débattre ensemble des résultats, des enjeux globaux, et de ce que cela
          pourrait signifier pour l&apos;avenir.
        </p>
        <p className="mt-4">
          Nous aborderons également d&apos;autres sujets d&apos;actualité, en fonction
          des intérêts du groupe.
        </p>
        <p className="mt-4">
          Nous serions ravis de vous compter parmi nous pour partager ces moments
          d&apos;échanges et renforcer notre communauté.
        </p>
        <p className="mt-2">
          Au plaisir de vous retrouver !
        </p>
      </>
    ),
  },
];
