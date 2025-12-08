type FdMEvent = {
  year        : number;
  title       : string;
  date        : string;
  description : JSX.Element | string;
  Location    : JSX.Element | string;
  price       : {
    adherents? : number;
    nonadh?    : number;
    default?   : number;
  };
  past        : boolean;
  Actor?      : JSX.Element | string;
};
