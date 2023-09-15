import { Link, animateScroll as scroll } from "react-scroll";


const HomeMenu = () => {
  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="events"
          spy={ true }
          smooth={ true }
          offset={ -250 }
          duration={ 500 }
          className="active:text-upsdell-red "
        >
          Evenements
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="page-about"
          spy={ true }
          smooth={ true }
          offset={ -100 }
          duration={ 500 }
        >
          Notre association
        </Link>
      </li>
      {/* <li>
              <Link
                activeClass="text-upsdell-red"
                to="section2"
                spy={ true }
                smooth={ true }
                offset={ -210 }
                duration={ 500 }
              >
                Section 2
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-upsdell-red"
                to="section3"
                spy={ true }
                smooth={ true }
                offset={ -70 }
                duration={ 500 }
              >
                Section 3
              </Link>
            </li> */}
    </ul>
  );
};

export default HomeMenu;