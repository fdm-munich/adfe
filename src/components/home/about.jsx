import Section from "../shared/section";

export const emailAddress = "munich@francais-du-monde.org";

const About = () => {
  return (
    <>
      <div className="mt-14">
        <Section title="💡 Pour nous contacter" subTitle="Par chat ou mail" sectionID="contact">
          <p>
            Vous pouvez discuter avec nous en cliquant sur <b>le bouton de chat</b> située en bas à droite de votre écran. Ceci ouvrira un chat ou un membre du bureau répondra à votre question.
            <br /><br />
            Voici notre adresse email de contact:
            <span className="text-purple-navy">
              {" "}
              ✉️{" "}
              <a href={ `mailto:${emailAddress}?subject=Contact FdM - Munich` }>
                {emailAddress}
              </a>
            </span>
          </p>
        </Section>
      </div>
      <div className="mt-14">
        <Section
          title="🗞️ Newsletter"
          subTitle="Ne manquer aucune de nos activités en souscrivant à notre newsletter"
          sectionID="newsletter"
        >
          <MailchimpForm />
        </Section>
      </div>
      <div className="mt-14">
        <Section
          title="Nous rejoindre"
          subTitle="adhérer à français du monde-adfe munich-bavière c’est"
          sectionID="joinus"
        >
          <p>
            Rejoindre Français du Monde-Munich, c'est intégrer une communauté
            dynamique et engagée qui soutient les droits des Françaises et des
            Français établis à l’étranger. Vous participerez à des échanges
            enrichissants, à des rencontres conviviales, à des discussions sur des
            sujets d'actualité importants et encore plus. En effet, nous sommes
            aussi source d'informations précieuse pour vous accompagner dans votre
            vie à l'étranger. Si vous partagez notre passion et notre engagement
            pour la solidarité, la justice sociale, la citoyenneté et la défense
            des droits, nous vous encourageons vivement à adhérer. Vous pouvez
            adhérer en espèce en nous rencontrant lors d’une activité ou bien en
            faisant un virement sur notre compte (téléchargez ci après notre
            bulletin d’adhésion).
            <br />
            <br />
            <a
              download
              href="/files/formulaire-adhesion.pdf"
              className="text-blue-500 underline hover:cursor-pointer hover:text-blue-700"
            >
              {" "}
              📝 Bulletin d'adhésion FdM - Munich
            </a>
          </p>
        </Section>
      </div>
    </>
  );
};

export default About;

import React from "react";

const MailchimpForm = () => {
  return (
    <div style={ { overflow: "hidden" } }>
      <iframe
        src="https://francais-du-monde.us14.list-manage.com/subscribe?u=a185f2e45964e65f4b1a9c92c&id=948dbe580b"
        title="Embedded URL"
        width="100%"
        frameBorder="0"
        scrolling="no"
        className="h-[470px] md:h-[550px]"
      />
    </div>
  );
};
