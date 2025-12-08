import { useState } from "react";
import SectionTitle from "../shared/section_title";
import Timeline from "./timeline";
import history from "../../evenements";
import { useParams } from "react-router";



export default function History() {

  const params = useParams();
  const years = Object.keys( history ).sort( ( a,b ) => b-a  );
  const [ selectedYear, setSelectedYear ] = useState( params.year ?? years[0] );
  const [ events, setEvents ] = useState( history[selectedYear] );

  const handleOnYearClick = ( e, year ) => {
    e.preventDefault();
    setSelectedYear( year );
    setEvents( history[year] );
  };

  const YearLink = ( { year } ) => {
    const yearIsSelected = year === selectedYear;
    return <a className={ `text-upsdell-red hover:cursor-pointer hover:underline ${yearIsSelected ? "underline font-bold": ""}` } href={ `#${year}` } onClick={ ( e ) => handleOnYearClick( e, year ) }>{year}</a>;
  };

  if ( !events ) {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
        <div className="container max-w-5xl px-4 mx-auto">
          <SectionTitle
            subtitle={ `nous n'avons pas d'historique pour l'année: ${selectedYear}` }
            title={ "Historique" }
            caption={
              <>
                <p>
                  Retrouvez l&apos;historique des évènements que nous avons proposés à nos membres et sympathisants. <br /><br />
                  Il vous suffit de cliquer sur une année pour en voir le détail: <br />
                </p>
                <ul className="ml-8 mt-2">
                  {
                    years.map( y => (
                      <li key={ y } className="list-disc text-purple-navy">
                        <YearLink year={ y }/>
                      </li>
                    ) )
                  }
                </ul>
              </>
            }
          />
        </div>
      </section>
    );
  }

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid gap-4 lg:mx-4 sm:grid-cols-12">
          <SectionTitle
            subtitle={ `les événements de ${selectedYear}` }
            title={ "Historique" }
            caption={
              <>
                <p>
                  Retrouvez l&apos;historique des évènements que nous avons proposés à nos membres et sympathisants. <br /><br />
                  <i>Notez que l&apos;historique ne contient pas tous les événements. Il commence seulement à partir de la date où nous avons mis ce site en ligne.</i><br /><br />
                  Il vous suffit de cliquer sur une année pour en voir le détail: <br />
                </p>
                <ul className="ml-8 mt-2">
                  {
                    years.map( y => (
                      <li key={ y } className="list-disc text-purple-navy">
                        <YearLink year={ y }/>
                      </li>
                    ) )
                  }
                </ul>
                <p className="mt-2 text-gray-600">
                  Il y a eu <b>{events.length} événements</ b> {selectedYear}.
                </p>
              </>
            }
          />
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="sm-mt-0 relative md:px-4 col-span-8 space-y-8 md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 md:before:bg-upsdell-red">
              {
                events.map( ( e, index ) => (
                  <Timeline e={ e } key={ index }/>
                ) )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
