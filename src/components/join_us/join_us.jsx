import { adfm } from "../../const";
import Section from "../shared/section";

const JoinUs = () => {
  return (
    <Section title="Rejoignez nous" subTitle="pour adhérer à français du monde-adfe munich-bavière e.v.">
      <p>Pour nous rejoindre il vous suffit de, soit:</p>
      <ul className="list-disc pl-6">
        <li>Télécharger ce <a className="text-upsdell-red" href="/files/formulaire-adhesion.pdf" download >formulaire</a> (format .pdf)
          <ul className="ml-4 list-disc">
            <li>et l'attacher à votre courriel: <span className="text-purple-navy">{adfm.mail}</span> ou,</li>
            <li>nous le renvoyer par la poste à l'adresse indiquée sur ce même formulaire</li>
          </ul>
        </li>
        <li>Tout simplement venir nous rencontrer à l'une de nos prochaines activités</li>
      </ul>
    </Section>
  );
};

export default JoinUs;