import { adfm } from "../../const";
import Section from "../shared/section";

const ContactUs = () => {
  return (
    <>
      <Section title="Couriel" subtitle="contacter l'ADFM c'est facile!">
        <p>Voici notre adresse email de contact: <span className="text-purple-navy">{adfm.mail}</span></p>
      </Section>
      <Section title="List de diffusion">
        <p>Vous désirez être tenus au courant des prochaines activités de l’ADFM, ainsi que de certains points d’actualité intéressant les français de l’étrangers ? Alors, inscrivez-vous sur la liste de diffusion de l’ADFM en nous remplissant le formulaire ci-dessous</p>
      </Section>
    </>
  );
};

export default ContactUs;