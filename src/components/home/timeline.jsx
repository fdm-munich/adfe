import SectionTitle from "../shared/section_title";
import { emailAddress } from "./about";
import SubText from "../sub_text";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { events_2025 } from "../../evenements/2025";
import Participation from "./Participation";

function useQuery() {
  return new URLSearchParams( useLocation().search );
}

export  const getUrlToEvent = ( event ) => {
  return `${window.location.protocol}//${window.location.host}/${event.year}/${event.id}`;
};

export const TimeLineItem = ( { event, share } ) => {
  const query = useQuery();
  const localFromUrl = query.get( "locale" );
  const { title, date, Actor, Location, description, descriptionDE, price, year, id, canRegister } = event;
  const [ locale, setLocale ] = useState( localFromUrl ?? "FR" );

  console.log( "params", { locale, localFromUrl } );


  const handleShare = async () => {
    try {
      await navigator.share( {
        title : "Partager l'événement FDM - Munich",
        text  : `${title} - ${date}`,
        url   : getUrlToEvent( event ),
      } );
    } catch ( err ) {
      console.log( "Error sharing:", err );
    }
  };

  const handleEmailRegistration = () => {
    const emailLink = `mailto:${emailAddress}?subject=Inscription à l'événement du ${date} - ${title}`;
    window.location.href = emailLink;
  };

  return (
    <div className="
      flex flex-col relative
      lg:before:absolute lg:before:top-2 lg:before:w-4 lg:before:h-4 lg:before:rounded-full lg:before:left-[-35px] lg:before:z-[1] lg:before:bg-upsdell-red
      ">
      <h1 className="text-2xl font-semibold tracking-wide hover:text-purple-navy-light"><a href={ getUrlToEvent( event ) }>{title}</a></h1>

      <div className="flex flex-col mt-1">
        <time className="text-base tracking-wide uppercase dark:text-gray-400 text-upsdell-red">
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
      <div className="mt-0 sm:mt-8">
        {
          descriptionDE && (
            <div className="flex justify-end">
              {locale.toLowerCase() == "fr" && (
                <p onClick={ () => setLocale( "de" ) } className="hover:underline cursor-pointer text-black text-opacity-40">DE 🇩🇪</p>
              )}
              {locale.toLowerCase() == "de" && (
                <p onClick={ () => setLocale( "fr" ) } className="hover:underline cursor-pointer text-black text-opacity-40">FR 🇫🇷</p>
              )}
            </div>
          )
        }

        {
          locale.toLowerCase() === "fr" && (
            <>{ description }</>
          )
        }

        {
          locale.toLowerCase() === "de" && (
            <> { descriptionDE }</>
          )
        }
      </div>


      <Participation price={ price } />

      {
        share && (
          <div className="mt-2 sm:mt:0 sm:text-right space-y-1 sm:space-x-1">
            {
              canRegister && (
                <button
                  onClick={ handleEmailRegistration } type="button"
                  disabled={ !canRegister }
                  className={
                    `${canRegister ? "bg-purple-navy " : "bg-grayish "}` +
                   `${canRegister ? "hover:bg-purple-navy-light " : "hover:bg-grayish "}` +
                   `${canRegister ? "cursor-pointer " : "cursor-not-allowed "}` +
                   `
                     w-full sm:w-auto
                     rounded-md
                     px-4 py-2
                     text-xs text-white
                     transition ease-in-out duration-150
                   ` }
                >
                  Je m&lsquo;inscris
                </button>
              )
            }
            {
              canRegister && (
                <button
                  onClick={ handleShare } type="button"
                  className="
                  bg-green-cyan
                  hover:bg-green-cyan-light
                  w-full sm:w-auto
                  rounded-md
                  px-4 py-2
                  text-xs text-white
                  transition ease-in-out duration-150">
                  Partager 💌
                </button>
              )
            }
          </div>
          // <div className="flex items-start mt-4"  onClick={ openDialog }>
          //   <span className="text-sm text-upsdell-red hover:underline hover:cursor-pointer">
          //     Partager
          //   </span>
          //   <span className="ml-1">💌</span>
          // </div>
        )
      }

      {/* <ShareDialog isDialogOpen={ isDialogOpen } onClose={ closeDialog } eventPath={ `${event.year}/${event.id}` }/> */}
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="grid gap-4 lg:mx-4 sm:grid-cols-12">
          <SectionTitle
            subtitle={ "retrouvez nous lors de" }
            title={ "🗓️ Evenements" }
            caption={
              <>
                <p>
                  Certains événements nécessiteront une participation.
                  Un tarif réduit sera proposé aux adhérents. <br /> <br />
                  {/* <b>Merci de vous inscrire par <a className="text-upsdell-red hover:cursor-pointer hover:underline" href={ `mailto:${emailAddress}?subject=Inscription à un évènement FdM - Munich` } >email</a>.</b> */}
                  {/* <br /> <br /> */}
                  <SubText txt="Cette liste sera mise à jour tout au long de l&apos;année. Revenez la consulter régulièrement 😉"/>
                  <br /><br />
                  Intéressé par notre <Link to="/historique" className="text-upsdell-red hover:cursor-pointer hover:underline">historique</Link>?
                </p>
              </>
            }
          />
          <div className="relative col-span-12 space-y-6 sm:col-span-9">
            <div
              className="
                sm-mt-0
                relative md:px-4 col-span-8 space-y-8
                lg:before:absolute lg:before:top-2 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-3 lg:before:bg-upsdell-red
                ">
              <iframe
                src="https://lu.ma/embed/calendar/cal-bTsMcfjWZpoBJYp/events"
                // style="border: 1px solid #bfcbda88; border-radius: 4px;"
                className="border rounded border-[#bfcbda88]"
                width="100%"
                height="800"
                frameBorder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
              />
              <div className="flex justify-center sm:hidden">
                <div className="bg-upsdell-red h-[1px] w-3/4" />
              </div>
              {/* { events_2025.map( ( e, index ) =>
                !e.past && (
                  <>
                    <TimeLineItem key={ index } event={ e } share/>
                    {
                      index < events_2025.length - 1 &&(
                        <div className="flex justify-center sm:hidden">
                          <div className="bg-upsdell-red h-[1px] w-3/4" />
                        </div>
                      )
                    }
                  </>
                )
              )}*/}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};


export default Timeline;
