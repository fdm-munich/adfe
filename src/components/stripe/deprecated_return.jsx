import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import NavBar from "../shared/navbar";
import Section from "../shared/section";
import { getUrlToEvent } from "../home/timeline";
import { findEventByYearAndId } from "../../evenements";

export default function Return() {
  const params = useParams();
  const [ emailStatus, setEmailStatus ] = useState( null );
  const [ customerEmail, setCustomerEmail ] = useState( "" );
  const [ customerName, setCustomerName ] = useState( "" );
  const [ sessionIsLoading, setSessionIsLoading ] = useState( true ); // Starts as true for initial loading
  const [ emailIsLoading, setEmailisLoading ] = useState( false );
  const [ error, setError ] = useState( null );

  const event = useMemo(
    () =>
      findEventByYearAndId( { id: params.id, year: params.year } ),
    [ params.year, params.id ]
  );

  useEffect( () => {
    const fetchSessionDetails = async () => {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams( queryString );
        const sessionId = urlParams.get( "session_id" );

        const response = await fetch(
          `https://vercel.fdm-munich.de/api?action=retrieve-details&session_id=${sessionId}`
        );
        const data = await response.json();

        console.log( "DATA", { data } );

        if ( data.customer_details ) {
          setCustomerEmail( data.customer_details.email );
          setCustomerName( data.customer_details.name );
        }

        setSessionIsLoading( false ); // Data fetching complete
      } catch ( err ) {
        console.error( err );
        setSessionIsLoading( false );
        setError(
          err.message ||
            "An error occurred while retrieving the details."
        );
      }
    };

    fetchSessionDetails();
  }, [] );

  const getReceipt = async () => {
    try {
      console.log( "EMAIL IS LOADING" );
      setEmailisLoading( true );
      setError( null );

      const response = await fetch(
        `https://vercel.fdm-munich.de/api?action=send-email&email=${customerEmail}&name=${customerName}`
      );
      const data = await response.json();

      setEmailisLoading( false );
      setEmailStatus( data.status );
    } catch ( err ) {
      console.error( err );
      setEmailisLoading( false );
      setError(
        err.message || "An error occurred while retrieving the receipt."
      );
    }
  };

  if ( sessionIsLoading ) {
    return (
      <>
        <NavBar />
        <div className="flex justify-center">
          <p>Chargement...</p>
        </div>
      </>
    );
  }

  if ( error ) {
    return (
      <>
        <NavBar />
        <div className="flex justify-center">
          <p>Une erreur est survenue. Nous vous invitons à nous contacter par email ou via le chat.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Section title="Confirmation" subTitle="Bestätigung" sectionID="joinus">
        <section id="success">
          {
            event && (
              <>
                <h1 className="text-2xl font-semibold tracking-wide hover:text-purple-navy-light"><a href={ getUrlToEvent( event ) }>{event.title}</a></h1>

                <div className="flex flex-col mt-1">
                  <time className="text-base tracking-wide uppercase dark:text-gray-400 text-upsdell-red">
                    🗓️ {event.date}
                  </time>
                </div>

                {
                  event.Location && (
                    <div className="text-xs tracking-wide uppercase dark:text-gray-400 mt-4">
                      <span className="text-purple-navy">📍 <event.Location /></span>
                    </div>
                  )
                }
              </>
            )
          }

          {!sessionIsLoading && !emailStatus && !emailIsLoading && (
            <>
              <div className="mt-8">
                <p>
                  🇫🇷 Pour recevoir la confirmation par email cliquer sur le bouton: <b>Recevoir la confirmation</b>. <br />Vous recevrez la confirmation à l&apos;adresse
                  que vous nous avez indiquée lors de votre paiement: <span className="text-upsdell-red">{customerEmail}</span>.<br />
                </p>

                <p className="mt-4">
                  🇩🇪 Um eine Bestätigung per E-Mail zu erhalten, klicken Sie auf den Button: <b>Recevoir la confirmation</b>.<br />Sie erhalten die Bestätigung an die Adresse,
                  die Sie uns bei Ihrer Zahlung angegeben haben: <span className="text-upsdell-red">{customerEmail}</span>.<br />
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={ getReceipt }
                  disabled={ sessionIsLoading }
                  className="
                mt-4
                bg-upsdell-red
                hover:bg-upsdell-red-light
                w-auto
                rounded-md
                px-4 py-2
                text-xs text-white
                transition ease-in-out duration-150"
                >
                  {sessionIsLoading ? "Chargement..." : "Recevoir la confirmation"}
                </button>
              </div>
            </>
          )}

          {
            emailIsLoading && (
              <p className="mt-4">Chargement...</p>
            )
          }

          {emailStatus === "sent" && (
            <div className="mt-4">
              <p>
                Un email de confirmation a été envoyé à l&lsquo;adresse suivante :{" "}
                <b>{customerEmail}</b>.<br />
              </p>
            </div>
          )}
        </section>
      </Section>
    </>
  );
}
