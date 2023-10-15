import SectionTitle from "../shared/section_title";

const Timeline = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="events">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          {/* <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-cyan">
                <h3 className="text-3xl font-semibold">Evenements</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">retrouvez nous lors de</span>
              </div>
            </div> */}
          <SectionTitle subtitle={ "retrouvez nous lors de" } title={ "Evenements" } />
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="
            col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 
            sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-upsdell-red">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-upsdell-red">
                <h3 className="text-xl font-semibold tracking-wide">Brunch débat</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Automne 2023 <a target="blank" href="https://www.zumkloster-muenchen.de">Zum kloster</a></time>
                <p className="mt-3">L'équipe de Français du Monde Munich est ravie de vous inviter à nous rejoindre pour un moment convivial et enrichissant au "Zum Kloster" à Haidhausen. Nous prévoyons d'organiser un brunch au cours du mois de novembre (la date exacte sera confirmée prochainement). Lors de cette occasion, nous aurons l'opportunité d'échanger et de discuter de sujets d'actualité tout en partageant un repas délicieux. Nous nous réjouissons à l'idée de vous revoir. Nous vous tiendrons informé(e) de la date exacte dès qu'elle sera confirmée.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-upsdell-red">
                <h3 className="text-xl font-semibold tracking-wide">Galette et fresque du climat</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Debut 2024 - Ferdinan Villaume</time>
                <p className="mt-3">Une approche ludique, une implication personnelle, permettent de mieux appréhender et comprendre les enjeux liés aux changements climatiques. Plus de détail prochainement.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-upsdell-red">
                <h3 className="text-xl font-semibold tracking-wide">Conference ELT</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Printemps 2024 - <a target="blank" href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAALRZvkB74_aV_ns9REsGmqgB7tSgVnRrv0&keywords=elise%20vernet&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ea700353-7f49-4df6-bcab-d814e078bbab&sid=ATM&spellCorrectionEnabled=true">Elise Vernet</a></time>
                <p className="mt-3">Construction du prochain télescope Européen au Chili. Lors de cette conférence, je vous présenterais en détail l’état d’avancement du projet : le design, la fabrication, l’intégration et la vérification des éléments tels que les parties structurelles du télescope et du dôme, les miroirs et leurs supports, les différents systèmes de mesures et d’alignement, et mettrais en valeur l’expertise des entreprises européennes impliquées dans le projet.</p>
              </div>
              {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-upsdell-red">
                <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
                <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-upsdell-red">
                <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
                <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Timeline;