import useGetCustomer from "../../hooks/customer";
import NavBar from "../shared/navbar";
import Section from "../shared/section";

export default function Subscription() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams( queryString );
  const checkout_session = urlParams.get( "checkout_session" );

  const { customer, isLoading, isError } = useGetCustomer( { checkout_session } );

  return (
    <>
      <NavBar />
      <Section title="Confirmation" subTitle="Bestätigung" >
        {
          isLoading && (
            <div className="flex justify-center">
              <p>Chargement...</p>
            </div>
          )
        }
        {
          isError && (
            <div className="flex justify-center">
              <p>Une erreur est survenue. Nous vous invitons à nous contacter par email ou via le chat.</p>
            </div>
          )
        }
        {
          customer && (
            <>
              <div className="mt-8">
                <p>
                  Vous recevrez une confirmation par e-mail à l’adresse indiquée lors de votre paiement : <span className="text-upsdell-red">{customer.email}</span>.
                </p>
                <p className="text-grayish">
                  Pensez à vérifier votre dossier spam si vous ne trouvez pas l’e-mail.
                </p>
                <p className="mt-4">
                  Merci encore pour votre soutien, et à très bientôt !
                </p>
              </div>
            </>
          )
        }
      </Section>
    </>
  );
}
