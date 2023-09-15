import NavBar from "../shared/navbar";
import ContactUs from "./contact_us";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-4 xl:pt-60">
        <ContactUs />
      </div>
    </>
  );
};

export default ContactPage;