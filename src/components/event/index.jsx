import React from "react";
import { useParams } from "react-router";
import { TimeLineItem } from "../home/timeline";
import { useMemo } from "react";
import { findEventByYearAndId } from "../../evenements";
import NavBar from "../shared/navbar";

export default function Event() {
  const params = useParams();

  const event = useMemo(
    () =>
      findEventByYearAndId( { id: params.id, year: params.year } ),
    [ params.year, params.id ]
  );

  return (
    <>
      <NavBar />
      <div className="container max-w-3xl px-4 mx-auto">
        <div className="
        sm-mt-0
        relative md:px-4 col-span-8 space-y-8
        md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 md:before:bg-upsdell-red">
          <TimeLineItem event={ event } share />
        </div>
      </div>
    </>
  );
}
