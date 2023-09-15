import NavBar from "../shared/navbar";
import JoinUs from "./join_us";

const JoinUsPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-4 xl:pt-60">
        <JoinUs />
      </div>
    </>
  );
};

export default JoinUsPage;