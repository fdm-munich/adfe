import React from "react";

const SectionTitle = ( { title, subtitle, sectionID, caption } ) => {
  return (
    <div className="col-span-12 sm:col-span-3" id={ sectionID }>
      <div className="
      mb-14  
      before:hidden sm:before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-cyan
      md:after:hidden after:w-24 after:h-1 after:mb-5 after:rounded-md after:mx-auto sm:after:mx-0 after:bg-green-cyan
      ">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">{subtitle}</span>
        <div className="mt-4 text-sm">
          {caption}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;