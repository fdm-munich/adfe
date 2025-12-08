import { emailAddress } from "../home/about";

export default function Email() {
  return (
    <a 
      className="text-purple-navy hover:cursor-pointer hover:underline"
      href={ `mailto:${emailAddress}?subject=Inscription à un évènement FdM - Munich` } 
    >
      munich@francais-du-monde.org
    </a>
  );
}