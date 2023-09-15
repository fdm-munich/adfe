import NavBar from "../shared/navbar";
import About from "./about";
import HomeMenu from "./home_menu";
import Timeline from "./timeline";

const Home = () => {
  return <>
    <NavBar menu={ <HomeMenu /> }/>
    <div className="pt-4 xl:pt-60">
      <Timeline />
    </div>
    <div className="pt-4 xl:pt-32">
      <About />
    </div>
  </>;
};

export default Home;