import "./App.css";
import Footer from "./components/shared/footer";
import Home from "./components/home";
import { createBrowserRouter,  RouterProvider, } from "react-router-dom";
import History from "./components/history";
import Event from "./components/event";
import Return from "./components/stripe/return";
import "@stripe/stripe-js";
import Subscription from "./components/stripe/adhesion";

const router = createBrowserRouter( [
  {
    path    : "/",
    element : <Home />,
  } ,
  {
    path    : "/home",
    element : <Home />,
  } ,
  {
    path    : "/historique",
    element : <History />,
  },
  {
    path    : "/historique/:year",
    element : <History />,
  },
  {
    path    : "/:year/:id",
    element : <Event />
  },
  // {
  //   path    : "/checkout",
  //   element : <Checkout />
  // },
  {
    path    : "/return/:year/:id",
    element : <Return />
  },
  {
    path    : "/adhesion",
    element : <Subscription />
  },
] );

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <RouterProvider router={ router } />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
