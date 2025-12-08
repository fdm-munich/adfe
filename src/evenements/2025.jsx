/**
 * Array of events.
 *
 * @type {FDMEvent[]}
 */
export const events_2025 = [
  {
    id    : "galette_18_01_2025",
    year  : 2025,
    date  : "Samedi 18 janvier 2025 de 14h à 17h",
    title : "Galette des rois 🎉",
    description : (
      <>
        <p>
          FRANÇAIS du MONDE - Munich renoue avec la tradition et organise cette année sa galette des rois avec l&lsquo;AFLM (association Français langue maternelle).
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
            <img src="/img/galette.jpeg" className="object-contain h-full rounded-lg"/>
          </span>
        </p>
        <p className="mt-4">
          Un <b>atelier de bricolage</b> sera proposé aux enfants de 14h à 15h. <b>Participation</b> de 5€ par enfant, 3€ pour les frères et sœurs.
        </p>
        <p className="mt-4">
          Les deux associations <b>tireront ensuite les rois ensemble de 15h à 17h</b>. Les galettes seront offertes par le bureau de Français du Monde – Munich. Une petite participation vous sera demandée.
        </p>
        <p className="mt-4">
          Au plaisir de vous retrouver nombreux autour d&lsquo;une galette en début d&lsquo;année et de vous présenter nos activités à venir!
        </p>
        <p className="mt-4">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE </b>
          Toutes les inscriptions (bricolage et galette) sont à faire auprès de Français du Monde, d’ici le 16 janvier.
          <br />Le nombre de places est limité. Vous recevrez systématiquement une confirmation de votre inscription.
        </p>
      </>
    ),
    Location : () => (
      <a target="blank" href="https://www.einewelthaus.de">
        Eine-Welt-Haus, Schwanthalerstr 80, München/ Salles 211-212
      </a>
    ),
    past  : true,
    price : {
      free : true
    }
  },
  {
    id    : "fresque_du_numerique_01_02_2025",
    year  : 2025,
    date  : "Samedi 1 Février 2025 de 13h30 à 16h30",
    title : "Fresque du numérique 💻",
    Actor : () => (
      <a href="https://www.linkedin.com/in/ollivier-bonnet-greenit/" target="blank">
        Ollivier Bonnet
      </a>
    ),
    description : (
      <>
        <p>
          Après plusieurs ateliers autour de la Fresque du Climat, nous sommes ravis d&lsquo;élargir nos horizons en vous proposant cette année la Fresque du Numérique.
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
            <img src="/img/fresque_numerique.png" className="object-contain rounded-lg"/>
          </span>
        </p>
        <p>
          Cet atelier collaboratif et ludique vous permettra de découvrir l&lsquo;impact environnemental méconnu du numérique, tout en réfléchissant ensemble à des solutions pour des usages plus responsables.
        </p>
        <p>
          Que vous soyez novice ou expert en la matière, venez explorer avec nous les enjeux d&lsquo;une transition numérique durable !
        </p>
        <p className="mt-4">
          <b className="text-upsdell-red">INSCRIPTION OBLIGATOIRE </b>le nombre de places est limité. Vous recevrez systématiquement une confirmation de votre inscription.
        </p>
      </>
    ),
    Location : () => (
      <a target="blank" href="https://www.einewelthaus.de">
        Eine-Welt-Haus, Schwanthalerstr 80, München/ Salle 110
      </a>
    ),
    past  : true,
    price : {
      adherents : 5,
      nonadh    : 10,
    },
    canRegister : true,
  },
  {
    past        : true,
    canRegister : false,
    id          : "international_women_day_7_03_25",
    year        : 2025,
    date        : "Vendredi 7 Mars de 18h30 à 21h",
    title       : "Léa et Pierrot - Hymne à l'amour ? ♥️",
    Location    : () => (
      <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
        Institut Français de Munich, Sallon bleu, Kaulbachstr 13
      </a>
    ),
    description : (
      <>
        <p>
          Concert pour la journée internationale des droits des femmes.
          <br />
          A la harpe Edith Fellmann, lecture Adeline Hervé, Mune Wilfrieda et Saffari-Durr Arezou.
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
            <img src="/img/lea-et-pierrot.png" className="object-contain rounded-lg"/>
          </span>
        </p>
        <p>
          Le thème de l&lsquo;amour est inépuisable et joue un rôle central dans la vie des femmes :
          l&lsquo;amour familial, la fidélité et l&lsquo;infidélité, l&lsquo;« amour fou », la passion et le désespoir.
          <br /><br />
          Léa, une talentueuse chanteuse de chansons françaises « à la Piaf », et Pierrot, au piano, un compagnon de longue date de célèbres ensembles manouches et tziganes du sud de la France, nous interprétent avec émotion et énergie les plus belles chansons d&lsquo;amour d&lsquo;Édith Piaf, Barbara, Jacques Brel, Céline Dion, Gilbert Bécaud, Bourvil, Claude Nougaro, etc...
          <br /><br />
          Un pot d&lsquo;honneur sera offert à la fin du concert.
        </p>
        {/* <p className="mt-4">
          <b className="text-upsdell-red">Réservation </b> avec paiement immédiatement en cliquant sur le bouton suivant
        </p> */}
        <span className="flex justify-center mt-4">
          <button
            disabled
            // onClick={ () => {
            //   window.location.href = "https://book.stripe.com/00g9Cc4gE7Iq2tibII?locale=fr";
            // } }
            type="button"
            className="
            cursor-not-allowed
            bg-grayish
            hover:grayish
            w-60
            rounded-md
            px-4 py-2
            text-xs text-white
            transition ease-in-out duration-150">
            {/* Je réserve et paie mon billet */}
            {/* Réservation ouverte le 1er février */}
            Réservations complètes
          </button>
        </span>
        {/* <p className="mt-1 text-black text-opacity-40">
          ou je réserve par email avec paiement sur place en utilisant le bouton &quot;Je m&lsquo;inscris&quot; ci dessous
        </p> */}
        <p className="mt-1 text-upsdell-red">
          Toutes les places sont réservées. Vous pouvez toutefois vous inscrire sur la liste d’attente en contactant :
          <a href="mailto:munich@francais-du-monde.org?subject=FDM%20-%20Inscription%20list%20d'attente%207%20Mars" className="text-purple-navy"> munich@francais-du-monde.org</a>.
        </p>
      </>
    ),
    descriptionDE : (
      <>
        <p>
          Konzert zum Internationalen Frauentag.
          <br />
          An der Harfe Edith Fellmann, Rezitation Adeline Hervé, Mune Wilfrieda und Saffari-Durr Arezou.
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
            <img src="/img/lea-et-pierrot.png" className="object-contain rounded-lg"/>
          </span>
        </p>
        <p>
          Das Thema „Liebe“ ist unerschöpflich, und spielt im Leben der Frauen eine zentrale Rolle:
          Liebe zur Familie, Liebe zum Kind, Treue und Untreue, „Amour fou“ Leidenschaft und Verzweiflung.
          <br /><br />
          Léa, eine talentierte Sängerin französischer Chansons „à la Piaf“, und Pierrot, am Klavier,
          ein langjähriger Begleiter berühmter Manouche und Zigeuner Ensembles aus Südfrankreich,
          werden  für uns emotional und schwungvoll  die schönsten Liebeschansons von Édith Piaf, Barbara, Jacques Brel,
          Céline Dion, Gilbert Bécaud, Bourvil, Claude Nougaro usw vortragen. Ein einmaliges, authentisches Konzert zu
          diesem besonderen  Anlass.
          <br /><br />
          Ein Ehrentrunk wird am Ende des Konzerts angeboten.
        </p>
        {/* <p className="mt-4">
               <b className="text-upsdell-red">Reservierung </b> mit sofortiger Zahlung, indem Sie auf den folgenden Button klicken
             </p> */}
        <span className="flex justify-center mt-4">
          <button
            disabled
            // onClick={ () => {
            //   window.location.href = "https://book.stripe.com/00g9Cc4gE7Iq2tibII?locale=de";
            // } }
            type="button"
            className="
                cursor-not-allowed
                bg-grayish
                hover:grayish
                w-60
                rounded-md
                px-4 py-2
                text-xs text-white
                transition ease-in-out duration-150">
            {/* Ich buche und bezahle mein Ticket */}
            {/* Reservierung ab dem 1. Februar */}
            Reservierungen vollständig
          </button>
        </span>
        {/* <p className="mt-1 text-black text-opacity-40">
          oder ich reserviere per E-Mail mit Bezahlung vor Ort, indem ich den „Ich melde mich an“-Button unten verwende.
        </p> */}
        <p className="mt-1 text-upsdell-red">
          Alle Plätze sind reserviert. Sie können sich jedoch auf die Warteliste setzen lassen, indem Sie Kontakt aufnehmen unter:
          <a href="mailto:munich@francais-du-monde.org?subject=FDM%20-%20Inscription%20list%20d'attente%207%20Mars" className="text-purple-navy"> munich@francais-du-monde.org</a>.
        </p>
      </>
    ),
    price : {
      adherents : 20,
      nonadh    : 25,
    }
  },
  {
    past        : true,
    id          : "visite_insolite_dictature_5_04_25",
    year        : 2025,
    title       : "Visite insolite Munich de 1933 à 1945",
    canRegister : false,
    date        : "Samedi 5 Avril à 14h",
    Location    : () => "RDV Munich Lenbachsplatz (devant la Fontaine des Wittelsbach)",
    Actor       : () => <a href="https://mgv-muenchen.de/?s=&list_guides=1&post_type=tour&language_id=19&tour_id=219" target="_blank" rel="noreferrer">Kathrin Liakov</a>,
    description : (
      <div>
        <div>
          <p>
            Dans le cadre de ses <b>Visites insolites</b> notre association vous propose une remontée dans le temps:
          </p>
          <h1 className="text-center text-lg font-bold">Munich de 1933 à 1945</h1>
          <p>
            <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden">
              <img src="/img/munich_insolite.jpeg" className="object-contain rounded-lg"/>
            </span>
          </p>
          <p>
            Quelle était la vie quotidienne des Munichois sous la dictature ?  Destins oubliés, résistants et victimes ; venez découvrir avec nous le sort de ces Munichois.  <br /> Rendez-vous : Lenbachsplatz (devant la Fontaine des Wittelsbach) à 14h.
          </p>
          <p className="mt-4 text-upsdell-red font-bold">
            Evenement limité à 25 personnes
          </p>
        </div>
      </div>
    ),
    price : {
      adherents : 10,
      nonadh    : 15,
      url       : {
        adherent : "https://book.stripe.com/dR6g0AfZm1k22tiaEH",
        nonadh   : "https://buy.stripe.com/8wM01C14s0fY4Bq3ce"
      }
    }
  },
  {
    past        : true,
    id          : "brunch_discussion_27_04_25",
    year        : 2025,
    title       : "Brunch & discussion",
    canRegister : true,
    date        : "Dimanche 27 Avril de 11h – 13h",
    Location    : () => "Zum Kloster - Preysingstraße 77 - Haidhausen, Munich",
    description : (
      <div>
        <div className="space-y-4">
          <h1 className="text-lg font-bold">La littérature, pourvoyeuse d’empathie et d’intelligence émotionnelle?</h1>
          <p>
            Notre société serait-elle, comme on l’entend,  en souffrance mentale ?  Et si la littérature était un remède.
          </p>
          <p>
            Nous verrons ensemble, au cours de l’histoire, de l’antiquité grecque à nos jours avec les analyses apportées par les neurosciences, le rôle essentiel que la  littérature joue dans l’équilibre mental et émotionnel des sociétés.
          </p>
          <p>
            Après un exposé non exhaustif, un échange pourra permettre de faire part de ses expériences.
          </p>
          <p>
            <span className="text-upsdell-red font-bold">Inscription obligatoire </span>jusqu´au 24 avril. Le nombre de places est limité à 10 personnes, vous recevrez systématiquement confirmation.
          </p>
        </div>
      </div>
    ),
  },
  {
    past        : true,
    id          : "biergarten_francophone_01_05_25",
    year        : 2025,
    title       : "Biergarten francophone 🇫🇷🥨",
    canRegister : false,
    date        : "Jeudi 1er Mai à partir de 11h",
    Location    : () => "Biergarten Hirschgarten - côté sud, Hirschgarten 1, 80639 München",
    description : (
      <div>
        <div className="space-y-4">
          <p>
            À l’initiative des associations réunies au sein de <b>Cobal e.V</b>, retrouvons-nous pour partager un moment convivial au grand air !
          </p>
          <p>
            <b>Qui :</b> Tous ceux qui veulent ! Seul, en couple, en famille, amis et voisins bienvenus. Anciens, nouveaux munichois ou de passage à Munich.
          </p>
          <p>
            <b>Quoi :</b> Rencontre conviviale — juste pour le plaisir de se retrouver ou découvrir de nouvelles têtes.
          </p>
          <p>
            <b>Comment :</b> Chacun est autonome en respectant les règles du Biergarten&nbsp;: prenez vos boissons sur place.
          </p>
          <p className="italic">
            En cas de pluie : on sera mouillés&nbsp;!
          </p>
        </div>
      </div>
    ),
  },
  {
    past        : true,
    id          : "balade_tutzing_25_05_25",
    year        : 2025,
    title       : "🌳🥾 Balade autour de Tutzing",
    canRegister : false,
    date        : "Dimanche 25 mai, rdv 10h15",
    Location    : () => "rdv à Munich Hauptbahnhof, départ de Tutzing vers 11h",
    description : (
      <div className="space-y-4">
        <p className="text-upsdell-red-light">⚠️ Événement annulé en raison du mauvais temps 🌧️</p>
        <p>
          Nous vous proposons une belle sortie nature autour de Tutzing, à la découverte du lac <b>Deixlfurter See et de l’Ilkahöhe</b>, avec de superbes vues sur le <b>lac de Starnberg</b>. Il s’agit d’une balade accessible, d’environ <b>2 à 3 heures de marche</b> (100 m de dénivelé), idéale pour se ressourcer et profiter de la nature.
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden rounded-lg">
            <img src="/img/tutzing_25_05.jpg" className="object-contain"/>
          </span>
        </p>
        <p>
          🕥 Rendez-vous : à 10h15 à la gare centrale de Munich (Hauptbahnhof), devant la voie du RB6 direction Garmisch-Partenkirchen (départ à 10h32, arrivée à Tutzing à 10h59). Le Deutschlandticket est valable sur ce trajet.
        </p>
        <p>Pensez à prendre de bonnes chaussures de marche et éventuellement un petit casse-croûte.</p>
        <p>
          🍽️ Pour celles et ceux qui le souhaitent, nous <b>finir la balade au restaurant</b> <a className="hover:underline text-purple-navy" href="https://www.tutzingerkeller.com/">Tutzinger Keller</a>, à deux pas de la gare. Merci de nous indiquer dans votre mail si vous souhaitez y participer, afin que nous puissions réserver une table.
        </p>
        <p>
          <span className="text-upsdell-red font-bold">Inscription obligatoire </span>jusqu´au 21 mai. Le nombre de places est limité à 15 personnes, vous recevrez systématiquement confirmation.
        </p>
        <p>
          Vous pouvez retrouver un descriptif de la balade en suivant ce <a href="https://www.hoehenrausch.de/wandern/muenchen-und-umgebung/tutzing-deixlfurter-see-ilkahoehe/" className="hover:underline text-purple-navy">lien</a>
        </p>
        <p />
      </div>
    )
  },
  {
    past        : true,
    id          : "tournoi_petanque_14_06_25",
    year        : 2025,
    title       : "🎳 Tournoi de Pétanque - Lancement de la Saison 2025 !",
    canRegister : true,
    date        : "Samedi 14 juin, à partir de 15h",
    Location    : () => "Au fond du Hofgarten, Munich (Odeonsplatz)",
    description : (
      <div className="space-y-4">
        <p>
          La saison des beaux jours est de retour, et avec elle… notre tournoi de pétanque préféré 🎉
        </p>
        <p>
          <span className="my-4 sm:h-80 flex justify-center items-center overflow-hidden rounded-lg">
            <img src="/img/petanque.jpeg"/>
          </span>
        </p>
        <p>
          Que vous soyez tireur redoutable, pointeur précis ou simplement curieux de découvrir ce sport convivial, rejoignez-nous pour une après-midi placée sous le signe de la bonne humeur, du soleil et de la compétition amicale.
        </p>
        <p>
          🔹 Un lot surprise récompensera l'équipe gagnante !<br/>
          🔹 Les parties seront organisées en doublettes ou triplettes selon le nombre de participants.
        </p>
        <p>
          Merci de nous indiquer dans votre email d'inscription si vous avez besoin qu'on vous prête un jeu.
        </p>
        <p>
          <span className="text-upsdell-red font-bold">Inscription obligatoire </span>jusqu´au 12 juin.
        </p>
      </div>
    ),
    price : {
      adherents : 3,
      nonadh    : 5,
    }
  },
  {
    year     : 2025,
    title    : "Bientôt annoncé",
    date     : "...",
    Location : () => "...",
    description : (
      <>
        <p className="text-purple-navy">
          Nous sommes en train de préparer de nouveaux évènements. Restez connectés pour plus d&apos;informations.
        </p>
      </>
    ),
  },
  // {
  //   canRegister : true,
  //   id          : "international_women_day_7_03_25",
  //   year        : 2025,
  //   date        : "Vendredi 7 Mars de 18h30 à 21h",
  //   title       : "NOUVEL EVENT DEMO",
  //   Location    : () => (
  //     <a target="blank" href="https://www.institutfrancais.de/de/muenchen#/">
  //       Institut Français de Munich, Sallon bleu, Kaulbachstr 13
  //     </a>
  //   ),
  // }
];
