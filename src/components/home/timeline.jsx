import SectionTitle from "../shared/section_title";
import { events } from "../../evenements/2023";
import { emailAddress } from "./about";

const TimeLineItem = ( props ) => {
  const { Actor, title, date, Location, description, price } = props;
  return (
    <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-upsdell-red">
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
        🗓️ {date} 
        {Actor ? <span className="text-upsdell-red"> - 🎙️ <Actor /> </span>: ""} 
        {Location ? <span className="text-purple-navy"> - <Location />📍</span> : ""}
      </time>
      <p className="mt-3">{description}</p>
      {
        price && (
          <>
            <p className="mt-1 ">
              <span className="text-upsdell-red">Participation: </span> {price.adherents}€ pour les adhérents, {price.default}€ pour les non-adhérents.
            </p>
            <p className="mt-1 text-black text-opacity-40">Possibilité d&apos;adhérer sur place.</p>
          </>
        )
      }
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <SectionTitle 
            subtitle={ "retrouvez nous lors de" } 
            title={ "Evenements" } 
            caption={
              <>
                <p>
                  Certains événements nécessiterons une participation. 
                  Un tarif réduit sera proposé aux adhérents. Merci de vous inscrire par <a className="text-purple-navy hover:cursor-pointer hover:underline" href={ `mailto:${emailAddress}?subject=Inscription à un évènement FdM - Munich` } >email</a>.
                </p>
                <p className="mt-1 text-black text-opacity-40">Cette liste sera mise à jour tout au long de l&apos;année. Revenez la consulter régulièrement 😉</p>
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