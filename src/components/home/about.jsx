import Section from "../shared/section";

export const emailAddress = "munich@francais-du-monde.org";

const About = () => {
  return (
    <>
      <Section title="Nous rejoindre" subTitle="adhérer à français du monde-adfe munich-bavière c’est" sectionID="joinus">
        <p>
          Rejoindre Français du Monde-Munich, c'est intégrer une communauté dynamique et engagée qui soutient les droits des Françaises et des Français établis à l’étranger. Vous participerez à des échanges enrichissants, à des rencontres conviviales,  à des discussions sur des sujets d'actualité importants et encore plus. En effet, nous sommes aussi source d'informations précieuse pour vous accompagner dans votre vie à l'étranger. Si vous partagez notre passion et notre engagement pour la solidarité, la justice sociale, la citoyenneté et la défense des droits, nous vous encourageons vivement à adhérer. Vous pouvez adhérer en espèce en nous rencontrant lors d’une activité ou bien en faisant un virement sur notre compte (téléchargez ci après notre bulletin d’adhésion).
          <br  />
          <br  />
          <a download href="/adfe/files/formulaire-adhesion.pdf" className="text-blue-500 hover:text-blue-700 underline hover:cursor-pointer"> 📝 Bulletin d'adhésion FdM - Munich</a>
        </p>
      </Section>
      <Section title="Contact" subTitle="" sectionID="contact">
        <p>Voici notre adresse email de contact: <br /><span className="text-purple-navy"> ✉️ <a href={ `mailto:${emailAddress}?subject=Contact FdM - Munich` }>{emailAddress}</a></span></p>
      </Section>
    </>
  );
};

export default About;

