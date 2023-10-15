import SectionTitle from "./section_title";

const Section = ( { title, subTitle, children, sectionID, ...props } ) => {
  return <section className="dark:bg-gray-800 dark:text-gray-100 mb-32" { ...props }>
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <SectionTitle title={ title } subtitle={ subTitle } sectionID={ sectionID }/>
      {children}
    </div>
  </section>;
};

export default Section;