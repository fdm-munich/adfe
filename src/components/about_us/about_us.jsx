import Section from "../shared/section";

const AboutUs = () => {
  return (
    <>
      <Section title="ADFM" subTitle="l'association démocratique des français de munich-bavière e.v.">
        <p>Fondée en 1982, est la section bavaroise de Français du Monde-adfe, créée en 1980, reconnue d’intérêt public.</p>
        <p>Notre ambition : rassembler les concitoyens porteurs d’une vision progressiste, désireux  de rester informés de la vie culturelle, politique, économique et sociale de la France, mais aussi d’approfondir leurs liens avec leurs pays d’accueil.</p>
      </Section>
      <Section title="Nos valeurs">
        <ul className="list-disc pl-6">
          <li>Démocratie</li>
          <li>Universalité des Droits de l'homme</li>
          <li>Laïcité</li>
          <li>Abandon de toute forme de discrimination</li>
          <li>Altruisme</li>
          <li>Tout ce qui implique notre devise nationale « Liberté, Égalité, Fraternité</li>
        </ul>
      </Section>
      <Section title="L'association" subTitle="c'est">
        <p>Une représentation au sein des commissions consulaires compétentes pour les Français de l’étranger : protection sociale, bourses scolaires, emploi et formation professionnelle.</p>
        <p>Des conseillers élus à l’Assemblée des Français de l’étranger (AFE).</p>
        <p>Des parlementaires, sénateurs et députés, représentant les Français établis hors de France.</p>
      </Section>
      <Section title="Nous rejoindre" subTitle="adhérer à français du monde-adfe munich-bavière c’est">
        <p>Faire partie d’une équipe enthousiaste, dynamique, ouverte;</p>
        <p>Garder – ou reprendre- contact avec la vie sociale, politique et culturelle de notre pays</p>
        <p>Développer l’esprit européen : l’Adfm n’est pas réservée aux français!nos amis francophone de toutes nationalités sont les bienvenus;</p>
        <p>S’ouvrir et approfondir les liens vers notre pays d’accueil;</p>
        <p>Soutenir une association reconnue d’utilité publique siégeant dans les comités consulaires, dans son rôle de défense des intérêts des Français, en priorité des plus démunis d’entre eux;</p>
        <p>Participer au courant de solidarité qui réunit les êtres généreux pour la défense des droits de l’homme.</p>

      </Section>
    </>
  );
};

export default AboutUs;