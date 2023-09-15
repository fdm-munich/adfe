import React from "react";

const SectionTitle = ( { title, subtitle } ) => {
  return (
    <div className="col-span-12 sm:col-span-3">
      <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-cyan">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
};

export default SectionTitle;