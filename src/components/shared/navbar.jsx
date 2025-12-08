import { Link } from "react-router-dom";

const NavBar = ( { menu } ) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full mb-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center hover:cursor-pointer">
          <img src="/img/logo_transparent_circle.png" className="pr-6 xs:h-24 h-20" alt="Flowbite Logo" />
          <span className="self-center text-base lg:text-xl font-semibold whitespace-nowrap">Français du monde - Munich</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
