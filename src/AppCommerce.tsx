import Navigation from "./components/Principal/Navigation/Navigation";
import {
  BrowserRouter
} from "react-router-dom";

const AppCommerce = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default AppCommerce;