import { useState } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import JoinUsPage from "./components/join_us";
import AboutUs from "./components/about_us";
import { path } from "./const";
import ContactPage from "./components/contact_us";

const router = createBrowserRouter( [
  {
    path    : "/",
    element : <Home />
  },
  {
    path    : `/${path.joinUs}`,
    element : <JoinUsPage />
  },
  {
    path    : `/${path.aboutUs}`,
    element : <AboutUs />
  },
  {
    path    : `/${path.contactUs}`,
    element : <ContactPage />
  }
] );


function App() {
  return (
    <>
      <RouterProvider router={ router }/>
      <Footer />
    </>
  );
}

export default App;
