import { NavBar } from "../../Secondary/NavBar/NavBar"
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../../Routes/Home/Home";
import { Checkout } from "../../Routes/Checkout/Checkout";


const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default Navigation