import Navigation from "./components/Principal/Navigation/Navigation";
import {
  BrowserRouter
} from "react-router-dom";
import { SideBar } from "./components/Principal/SideBar/SideBar";
import { useState } from "react";

const AppCommerce = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <BrowserRouter>
      <Navigation handleOpen={setTabIndex}/>
      {
        tabIndex === 1 ? <SideBar handleClose={setTabIndex} /> : null
      }
    </BrowserRouter>
  );
}

export default AppCommerce;