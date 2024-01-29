import SubText from "../components/sub_text";

/* eslint-disable max-len */
export const events = [
  {
    date        : "25 Novembre 2023 de 10h - 13h" ,
    description : "Venez à la rencontre des associations françaises et franco-allemandes de Munich et de Bavière !" ,
    Location    : () => <a target="blank" href="https://www.google.com/maps/place/Ungsteiner+Str.+50,+81539+München/@48.1108108,11.5951052,17.57z/data=!4m6!3m5!1s0x479ddfa220970733:0xaf67463d49f5ab91!8m2!3d48.1109039!4d11.5971134!16s%2Fg%2F11cncjj3rw?entry=ttu">Ecole française de giesing</a> ,
    title       : "Forum des associations" ,
    past        : true,
  },
  {
    date        : "26 Novembre 2023 de 11h à 13h" ,
    description : "Autour d'un brunch, nous souhaitons raviver notre communauté et échanger ensemble sur des thèmes qui nous intéressent ou nous tiennent à cœur. Nous vous proposons d'échanger tout d'abord sur l'intelligence Artificielle (IA) et son impact sur le monde de l'éducation. Les rédactions, les mémoires, les thèses même seront-elles l'oeuvre de ChatGPT ? Puis nous aborderons d'autres sujets en fonction de l'actualité. Au plaisir de vous revoir. " ,
    Location    : () => <a target="blank" href="https://www.zumkloster-muenchen.de">Zum kloster</a> ,
    title       : "Brunch débat" ,
    past        : true,
  },
  {
    date        : "16 Décembre 2023 à 16h30",
    description : ( <>
      Rencontre prévue à 16h30 à Odeonsplatz, juste devant le charmant café <b>Tambosi</b> !<br /> Nous nous dirigerons ensuite pour une agréable demi-heure de promenade dans le Jardin Anglais. La soirée se poursuivra avec une visite au marché de Noël, où nous aurons loccasion de déguster du vin chaud ou toute autre boisson qui éveillera nos papilles.
      <br /><br />
      Aucun frais de participation n&lsquo;est requis, mais chaque participant est responsable de régler ses consommations sur place.
      <br /><br />
      Nous sommes impatients de partager ce moment convivial avec vous ! 🎄🍷
      <br /><br />
      <SubText txt="Notez bien que, malheureusement, l'événement pourrait être annulé en fonction des conditions météorologiques. Restez connectés pour toute mise à jour de dernière minute ! 🌦️"/>
    </> )
    ,
    Location : () => <a target="blank" href="https://tambosi-odeonsplatz.de">Odeonsplatz café Tambosi</a>,
    title    : "Ballade de Noël",
    past     : true,
  },
  {
    Actor : () => "Ferdinand Villaume & et Sylvain Auzoux",
    date  : "20 Janvier 2024 de 10h à 13h",
    description : (
      <>
        Français du Monde - Munich vous donne rendez-vous à la EineWeltHaus pour participer à un atelier Fresque du Climat  le samedi 20 janvier 2024 de 10h à 13h. 
        <br  /><br  />
        Une approche ludique, une implication personnelle, permettent de mieux appréhender et comprendre les enjeux liés aux changements climatiques.
        <br  /><br  />
      </>
    ),
    Location : () => <a target="blank" href="https://www.einewelthaus.de">EineWeltHaus salle 108</a>,
    title    : "Fresque du climat 🌍",
    past     : true,
    price    : {
      adherents : 7,
      nonadh    : 10
    }
  },
  {
    date : "20 Janvier 2024 à partir de 15h",
    description : (
      <>
        Français du Monde - Munich vous donne rendez-vous à la EineWeltHaus pour partager des galettes des rois le samedi 20 janvier 2024 à partir de 15h. 
        <br  /><br  />
        Autour de cette tradition française, nous souhaitons raviver notre communauté et échanger ensemble sur des thèmes qui nous intéressent ou nous tiennent à cœur.
        <br  /><br  />
      </>
    ),
    Location : () => <a target="blank" href="https://www.einewelthaus.de">EineWeltHaus Werkstatt raum</a>,
    title    : "Galette des rois 👑",
    past     : true,
    price    : {
      default : 5
    }
  },
  {
    title       : "Atelier 2 tonnes  🌍",
    Actor       : () => <a target="blank" href="https://www.linkedin.com/in/audrey-bizet-974b12137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Audrey Bizet</a>,
    date        : "03 Février 2024 de 10h à 13h30" ,
    description : "L'atelier immersif pour imaginer le futur et agir ensemble pour le climat ! En 3 heures et en équipe, projetez-vous jusqu’à 2050, découvrez les leviers individuels et collectifs de la transition bas carbone, et identifiez le rôle que vous souhaitez y jouer !" ,
    Location    : () => <a target="blank" href="https://www.einewelthaus.de">EineWeltHaus</a>,
    past        : false,
    price       : {
      adherents : 7,
      nonadh    : 10
    }
  },
  {
    title       : "Rencontre sénateur des français de l'étranger 🇫🇷",
    Actor       : () => <a href="https://www.helene-conway.com" target="blank">Hélène Conway Mouret</a>,
    date        : "16 Février à 18h30",
    description : "Venez à la rencontre de la sénatrice des français de l'étranger Hélène Conway Mouret de passage à Munich à l'occasion de la Munich Security Conference." ,
    Location    : () => <a target="blank" href="https://www.institutfrancais.de/">Institut français</a>,
    past        : false,
  },
  {
    title : "Une soirée musicale et poétique 🎼",
    date  : "8 Mars de 18h30 à 20h30",
    description : (
      <>
        À l&apos;occasion de la Journée internationale des Droits de la femme,  Français du Monde Munich vous convie à une soirée musicale, lyrique et poétique en l&apos;honneur d&apos;artistes femmes trop peu interprétées (Clara Schumann, Lille Boulanger Ethel Smith etc).
        <br  /><br  />
        Édith Fellmann à la harpe, Nargiza Yusupova au violon, Alice Stamatakis au chant et Coline Kahraunis et Hervé  Adeline à la lecture.
        <br  /><br  />
        Rejoignez-nous pour cette belle soirée d&apos;hommage aux femmes !
      </>
    ),
    Location : () => <a target="blank" href="https://www.institutfrancais.de/">Institut français, salon bleu</a>,
    past     : false,
    price    : {
      adherents : 15,
      nonadh    : 20
    }
  },
  {
    title       : "Conference ELT 🔭",
    date        : "18 Avril 2024",
    Actor       : () => <a target="blank" href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAALRZvkB74_aV_ns9REsGmqgB7tSgVnRrv0&keywords=elise%20vernet&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ea700353-7f49-4df6-bcab-d814e078bbab&sid=ATM&spellCorrectionEnabled=true">Elise Vernet</a>,
    description : "Construction du prochain télescope Européen au Chili. Lors de cette conférence, je vous présenterais en détail l’état d’avancement du projet : le design, la fabrication, l’intégration et la vérification des éléments tels que les parties structurelles du télescope et du dôme, les miroirs et leurs supports, les différents systèmes de mesures et d’alignement, et mettrais en valeur l’expertise des entreprises européennes impliquées dans le projet.",
    Location    : () => "Bientôt annoncée",
    past        : false,
  }
];


