import SectionTitle from "./section_title";

const Section = ( { title, subTitle, children, sectionID, ...props } ) => {
  return <section className="sm-mt-0 dark:bg-gray-800 dark:text-gray-100 xl:mb-32" { ...props }>
    <div className="container max-w-5xl px-4 md:py-12 mx-auto">
      <SectionTitle title={ title } subtitle={ subTitle } sectionID={ sectionID }/>
      {children}
    </div>
  </section>;
};

export default Section;
