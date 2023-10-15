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
          offset={ -450 }
          duration={ 500 }
          className="hover:cursor-pointer"
        >
          Evenements
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="joinus"
          spy={ true }
          smooth={ true }
          offset={ -200  }
          duration={ 500 }
          className="hover:cursor-pointer"
        >
          Nous rejoindre
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="contact"
          spy={ true }
          smooth={ true }
          offset={ -600 }
          duration={ 500 }
          className="hover:cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default HomeMenu;