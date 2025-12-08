import { Link, animateScroll as scroll } from "react-scroll";

const HomeMenu = () => {
  return (
    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="events"
          spy={true}
          smooth={true}
          offset={-450}
          duration={500}
          className="hover:cursor-pointer"
        >
          Evenements
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="joinus"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="hover:cursor-pointer"
        >
          Nous rejoindre
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="newsletter"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="hover:cursor-pointer"
        >
          Newsletter
        </Link>
      </li>
      <li>
        <Link
          activeClass="text-upsdell-red"
          to="contact"
          spy={true}
          smooth={true}
          offset={-600}
          duration={500}
          className="hover:cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default HomeMenu;
