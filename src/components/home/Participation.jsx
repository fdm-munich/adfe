export default function Participation( { price } ) {
  if ( !price ) {
    return <p className="mt-1 text-black text-opacity-40">
      Événement ouvert à tous avec la possibilité d&apos;adhérer sur place.
    </p>;
  }

  if ( price.free ) {
    return (
      <div className="mt-4">
        <p className="mt-1">
          <span className="text-upsdell-red">Participation: </span>
          libre
        </p>
        <p className="mt-1 text-black text-opacity-40">
          Événement ouvert à tous avec la possibilité d&apos;adhérer sur place.
        </p>
      </div>
    );
  }

  if ( price.default ) {
    return (
      <div className="mt-4">
        <p className="mt-1">
          <span className="text-upsdell-red">Participation: </span>
          {price.default}€
        </p>
        <p className="mt-1 text-black text-opacity-40">
          Événement ouvert à tous avec la possibilité d&apos;adhérer sur place.
        </p>
      </div>
    );
  }

  return (
    <div className=" mt-4 grid gap-4">
      <div>
        <p className="mt-1">
          <span className="text-upsdell-red">Participation: </span>
          {price.children && `${price.children}€ pour les enfants, `}
          {price.adherents}€ pour les adhérents,
          {price.nonadh}€ pour les non-adhérents.
        </p>
        <p className="mt-1 text-black text-opacity-40">
          Événement ouvert à tous avec la possibilité d&apos;adhérer sur place.
        </p>
      </div>
      {
        price.url && (
          <div className="grid text-center gap-2">
            <div>
              <button
                onClick={ () => {
                  window.location.href = price.url.adherent;
                } }
                type="button"
                className="
                     cursor-pointer
                     bg-purple-navy
                     hover:bg-purple-navy-light
                     w-full sm:w-60
                     rounded-md
                     px-4 py-2
                     text-xs text-white
                     transition ease-in-out duration-150">
                Reserver au prix adherents { price.adherents }€
              </button>
            </div>
            <div className="">
              <button
                onClick={ () => {
                  window.location.href = price.url.nonadh;
                } }
                type="button"
                className="
                      cursor-pointer
                      bg-upsdell-red
                      hover:bg-upsdell-red-light
                      w-full sm:w-60
                      rounded-md
                      px-4 py-2
                      text-xs text-white
                      transition ease-in-out duration-150">
                Reserver au prix normal  { price.nonadh }€
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}
