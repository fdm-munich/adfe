import { CheckoutProvider, EmbeddedCheckout, EmbeddedCheckoutProvider, useCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../shared/navbar";
import Section from "../shared/section";

const stripePromise = loadStripe( "pk_test_51QZaMxRkHiUThqAcI0du698bKa3oA2ZnRRXvPdrR67UPHDogfTPb5l9Aky8JV1NSowQ4U1U5ZD47IvK64s6saMMN007PPWunKC" );

function CheckoutStripe() {
  const fetchClientSecret = useCallback( () => {
    // Create a Checkout Session
    return fetch( "/api/create-checkout-session", {
      method : "POST",
    } )
      .then( ( res ) => res.json() )
      .then( ( data ) => data.clientSecret );
  }, [] );

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={ stripePromise }
        options={ options }
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

const CheckoutForm = () => {
  const checkout = useCheckout();
  console.log( checkout );
  return (
    <pre>
      {JSON.stringify( checkout.lineItems, null, 2 )}
    </pre>
  );
};


export default function Checkout() {
  const handleOnClick = () => {
    window.location.href = "https://book.stripe.com/test_14kdUqfVtblmco08ww";
  };
  return (
    <>
      <NavBar />
      <Section
        title="Léa et Pierrot 7 Mars"
        subTitle="un concert en l'honneur de la journée internationale du droit des femmes"
        sectionID="joinus"
      >
        <button
          onClick={ handleOnClick } type="button"
          className="
          bg-purple-navy
          hover:bg-purple-navy-light
          w-auto
          rounded-md
          px-4 py-2
          text-xs text-white
          transition ease-in-out duration-150">
          Achat billet
        </button>
      </Section>
    </>
  );
}
