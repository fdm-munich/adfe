import { adfm } from "../../const";
import Section from "../shared/section";
import SectionTitle from "../shared/section_title";

const About = () => {
  return (
    <>
      <Section title="ADFM" subTitle="l'association démocratique des français de munich-bavière e.v." sectionID="page-about">
        <p>
          L’Association Démocratique des Français de Munich e.V est implantée dans cette région depuis 1982 et est, depuis 1983, une association de droit allemand (eingetragener Verein).
          <br /><br />
          L’ADFM est une des sections locales de Français du Monde-ADFE, une association reconnue d’utilité publique, créée fin 1980 et présente dans une centaine de pays.
          <br /><br />
          Association d’intérêt général, Français du Monde-ADFE, représente auprès de l’administration française les intérêts des Français à l’étranger dans tous les domaines les concernant:
          <ul>
            <li>droits civiques</li>
            <li>questions sociales</li>
            <li>enseignement et formation</li>
            <li>échanges culturels</li>
            <li>questions économiques et fiscales</li>
            <li>expatriation et réinsertion professionnelle</li>

          </ul>
          <br /><br />
          Dès sa création, Français du Monde-ADFE a eu pour souci de rassembler tous les Français qui, au delà de leurs opinions politiques, partagent trois grandes idées : la solidarité entre Français expatriés, mais aussi avec le pays d’accueil, la justice en aidant les Français défavorisés, et la compréhension entre les peuples, l’ouverture vers d’autres cultures.
          <br /><br />
          Français du Monde-ADFE est un des groupes de l’Assemblée des Français de l’Etranger (AFE), seule instance représentative des Français résidant à l’étranger. Les conseillers à l’AFE sont élus au suffrage universel direct par les Français inscrits sur la liste électoral du consulat. Ces conseillers élisent à leur tour les douze sénateurs vous représentant au Parlement.
          <br /><br />

          Plus générallement, l ‘ADFM est une des deux associations représentatives des Français résidant à Munich et en région bavaroise. Elle est, de ce fait, membre de droit de la commission locale des bourses scolaires et l’interlocuteur privilégié du Consulat de France pour les questions d’aide et de protection sociale, d’emploi et de formation professionnelle. Elle est également membre consultatif du conseil d’établissement du lycée Jean-Renoir. Elle ne peut, alheureusement, résoudre tous les problèmes et répondre à toutes les aspirations des Français résidant en Bavière mais y contribue, notamment par les informations et les contacts dont elle dispose. Voici, par exemple, quelques informations pratiques.
          <br /><br />
          L ’ADFM est une association dynamique et ouverte. Elle compte à son actif de nombreuses réalisations concrètes, comme par exemple la création et l’organisation de la Fête de la Musique à Munich, de nombreuses sorties conviviales, des activités à caractère humanitaire, politique et culturel, ainsi que diverses activités ponctuelles.
        </p>
      </Section>
      <Section title="Nous rejoindre" subTitle="adhérer à français du monde-adfe munich-bavière c’est" sectionID="joinus">
        <p>Faire partie d’une équipe enthousiaste, dynamique, ouverte;</p>
        <p>Garder – ou reprendre- contact avec la vie sociale, politique et culturelle de notre pays</p>
        <p>Développer l’esprit européen : l’Adfm n’est pas réservée aux français!nos amis francophone de toutes nationalités sont les bienvenus;</p>
        <p>S’ouvrir et approfondir les liens vers notre pays d’accueil;</p>
        <p>Soutenir une association reconnue d’utilité publique siégeant dans les comités consulaires, dans son rôle de défense des intérêts des Français, en priorité des plus démunis d’entre eux;</p>
        <p>Participer au courant de solidarité qui réunit les êtres généreux pour la défense des droits de l’homme.</p>
      </Section>
      <Section title="Contact" subTitle="" sectionID="contact">
        <p>Voici notre adresse email de contact: <span className="text-purple-navy">{adfm.mail}</span></p>
      </Section>
    </>
  );
};

export default About;

