
import NavBar from "../shared/navbar";
import About from "./about";
import HomeMenu from "./home_menu";
import Timeline from "./timeline";

const Home = () => {
  return <>
    <NavBar menu={ <HomeMenu /> }/>
    <div className="xl:pt-60 pt-16">
      <Timeline />
    </div>
    <div className="xl:pt-32">
      <About />
    </div>
  </>;
};

export default Home;