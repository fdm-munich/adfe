export default function FDMButton( { text, handleOnclick } ) {
  return (
    <button
      onClick={ () => { window.location.href = "https://allevents.in/munich/bal-de-la-fête-nationale/80002854295462"; } }
      type="button"
      className="
      hover:bg-upsdell-red w-auto rounded-md border border-upsdell-red
      px-4 py-2 text-base leading-6 font-medium hover:text-white text-upsdell-red shadow-sm
      transition ease-in-out duration-150 sm:text-sm sm:leading-5">
      Réserver ma place
    </button>
  );
}
