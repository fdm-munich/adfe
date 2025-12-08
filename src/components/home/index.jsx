import NavBar from "../shared/navbar";
import About from "./about";
import Timeline from "./timeline";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Timeline />
      </div>
      <div className="xl:pt-32">
        <About />
      </div>
    </>
  );
};

export default Home;
