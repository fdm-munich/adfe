import NavBar from "../shared/navbar";
import AboutUs from "./about_us";

const AboutUsPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-4 xl:pt-60">
        <AboutUs />
      </div>
    </>
  );
};

export default AboutUsPage;