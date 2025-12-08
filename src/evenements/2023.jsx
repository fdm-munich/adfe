import SubText from "../components/sub_text";

/* eslint-disable max-len */
export const events_2023 = [
  {
    id   : "consulat_forum_association_25_11",
    year : 2023,
    date : "25 Novembre 2023 de 10h - 13h",
    description :
      "Venez à la rencontre des associations françaises et franco-allemandes de Munich et de Bavière !",
    Location : () => (
      <a
        target="blank"
        href="https://www.google.com/maps/place/Ungsteiner+Str.+50,+81539+München/@48.1108108,11.5951052,17.57z/data=!4m6!3m5!1s0x479ddfa220970733:0xaf67463d49f5ab91!8m2!3d48.1109039!4d11.5971134!16s%2Fg%2F11cncjj3rw?entry=ttu"
      >
        Ecole française de giesing
      </a>
    ),
    title : "Forum des associations",
    past  : true,
  },
  {
    id   : "societe_brunch_ai_26_11",
    year : 2023,
    date : "26 Novembre 2023 de 11h à 13h",
    description :
      "Autour d'un brunch, nous souhaitons raviver notre communauté et échanger ensemble sur des thèmes qui nous intéressent ou nous tiennent à cœur. Nous vous proposons d'échanger tout d'abord sur l'intelligence Artificielle (IA) et son impact sur le monde de l'éducation. Les rédactions, les mémoires, les thèses même seront-elles l'oeuvre de ChatGPT ? Puis nous aborderons d'autres sujets en fonction de l'actualité. Au plaisir de vous revoir. ",
    Location : () => (
      <a target="blank" href="https://www.zumkloster-muenchen.de">
        Zum kloster
      </a>
    ),
    title : "Brunch débat",
    past  : true,
  },
  {
    id   : "balade_marche_noel_16_12",
    year : 2023,
    date : "16 Décembre 2023 à 16h30",
    description : (
      <>
        Rencontre prévue à 16h30 à Odeonsplatz, juste devant le charmant café{" "}
        <b>Tambosi</b> !<br /> Nous nous dirigerons ensuite pour une agréable
        demi-heure de promenade dans le Jardin Anglais. La soirée se poursuivra
        avec une visite au marché de Noël, où nous aurons loccasion de déguster
        du vin chaud ou toute autre boisson qui éveillera nos papilles.
        <br />
        <br />
        Aucun frais de participation n&lsquo;est requis, mais chaque participant
        est responsable de régler ses consommations sur place.
        <br />
        <br />
        Nous sommes impatients de partager ce moment convivial avec vous ! 🎄🍷
        <br />
        <br />
        <SubText txt="Notez bien que, malheureusement, l'événement pourrait être annulé en fonction des conditions météorologiques. Restez connectés pour toute mise à jour de dernière minute ! 🌦️" />
      </>
    ),
    Location : () => (
      <a target="blank" href="https://tambosi-odeonsplatz.de">
        Odeonsplatz café Tambosi
      </a>
    ),
    title : "Ballade de Noël",
    past  : true,
  },
];
