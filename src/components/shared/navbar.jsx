
const NavBar = ( { menu } ) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/fdm-munich" className="flex items-center">
          <img src="/fdm-munich/img/logo_transparent_circle.png" className="pr-6 h-10 lg:h-24" alt="Flowbite Logo" />
          <span className="self-center text-sm lg:text-xl font-semibold whitespace-nowrap dark:text-white">Français du monde - Munich</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;