import SectionTitle from "../shared/section_title";
import { events } from "../../evenements/2023";
import { emailAddress } from "./about";
import SubText from "../sub_text";


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

const Timeline = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 lg:mx-4 sm:grid-cols-12">
          <SectionTitle 
            subtitle={ "retrouvez nous lors de" } 
            title={ "Evenements" } 
            caption={
              <>
                <p>
                  Certains événements nécessiterons une participation. 
                  Un tarif réduit sera proposé aux adhérents. <br /> <br />
                  <b>Merci de vous inscrire par <a className="text-upsdell-red hover:cursor-pointer hover:underline" href={ `mailto:${emailAddress}?subject=Inscription à un évènement FdM - Munich` } >email</a>.</b>
                  <br /> <br />
                  <SubText txt="Cette liste sera mise à jour tout au long de l&apos;année. Revenez la consulter régulièrement 😉"/>
                </p>
              </>
            }
          />
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="
            sm-mt-0
            col-span-12 space-y-12 relative md:px-4 col-span-8 space-y-8 
            before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-upsdell-red">
              { events.map( ( e, index ) => 
                !e.past && 
                <TimeLineItem key={ index } { ...e } />
              )}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};


export default Timeline;