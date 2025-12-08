import { useEffect, useState } from "react";

const vercelTest = "http://localhost:3000";
const vercelProd = "https://functions.fdm-munich.de";

export default function useGetCustomer( { checkout_session } ) {
  const [ customer, setCustomer ] = useState();
  const [ isLoading, setIsLoading ] = useState( false );
  const [ isError, setIsError ] = useState( false );

  useEffect( () => {
    const fetchSessionDetails = async () => {
      try {
        setIsLoading( true );
        const response = await fetch(
          `${vercelTest}/api/customer?checkout_session=${checkout_session}`
        );

        const data = await response.json();
        setCustomer( data );
        setIsLoading( false );

      } catch ( err ) {
        console.error( err );
        setIsLoading( false );
        setIsError( true );
      }
    };

    fetchSessionDetails();
  }, [] );

  return {
    customer,
    isLoading,
    isError
  };
}
