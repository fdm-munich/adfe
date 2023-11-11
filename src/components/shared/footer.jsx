
const Footer = () => {
  return (
    <footer className="bg-gray-300 p-4">
      <div className="my-6 sm:mx-auto bg-gradient-to-r from-green-cyan via-purple-navy to-upsdell-red lg:my-8" style={ { height: 1 } }/>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 mb-4 sm:mb-0">
          <a href="https://twitter.com/Fdmadfe" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noreferrer">
            <img src="/adfe/img/twitter_logo.png" className="w-5 h-5"/>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="https://www.facebook.com/ADFEMunich" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noreferrer">
            <img src="/adfe/img/facebook_logo.png" className="w-5 h-5"/>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="https://www.instagram.com/francaisdumondeadfe/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noreferrer">
            <img src="/adfe/img/instagram_logo.png" className="w-5 h-5"/>
            <span className="sr-only">Instagram page</span>
          </a>
          
        </div>
        <div className="pt-4 pb-4">
          <a href="https://francais-du-monde.org" className="flex items-center" target="_blank" rel="noreferrer">
            <img src="/adfe/img/fdm-footer.png" className="mr-3 h-8" alt="Francais du monde logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;