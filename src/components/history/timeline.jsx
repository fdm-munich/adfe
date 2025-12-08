
const TimeLineItem = ( props ) => {
  const { Actor, title, date, Location, description, price } = props;
  return (
    <div className="flex flex-col relative lg:before:absolute lg:before:top-2 lg:before:w-4 lg:before:h-4 lg:before:rounded-full lg:before:left-[-35px] lg:before:z-[1] lg:before:bg-upsdell-red">
      <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>

      <div className="flex flex-col mt-1">
        <time className="text-base tracking-wide uppercase dark:text-gray-400">
          🗓️ {date}
        </time>
      </div>

      {
        Actor && (
          <div className="text-xs tracking-wide uppercase dark:text-gray-400 mt-4">
            <span className="text-upsdell-red">🎙️ <Actor /> </span>
          </div>
        )
      }

      {
        Location && (
          <div className="text-xs tracking-wide uppercase dark:text-gray-400 mt-4">
            <span className="text-purple-navy">📍 <Location /></span>
          </div>
        )
      }


      <p className="mt-3">{description}</p>
      {
        price && (
          <div className="mt-4">
            <p className="mt-1 ">
              <span className="text-upsdell-red">Participation: </span>
              {
                !price.free ? (
                  price.default ? (
                    <>{price.default}€</>
                  ) : (
                    <>
                      {price.adherents}€ pour les adhérents, {price.nonadh}€ pour les non-adhérents.
                    </>
                  )
                ) : (
                  <>
                    libre
                  </>
                )
              }
            </p>
            <p className="mt-1 text-black text-opacity-40">Évènement ouvert à tous avec la possibilité d&apos;adhérer sur place.</p>
          </div>
        )
      }


    </div>
  );
};


export default function Timeline( { e, key } ) {
  return (
    <TimeLineItem key={ key } { ...e } />
  );
}
