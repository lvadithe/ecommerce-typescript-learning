import { NavBar } from "../../Secondary/NavBar/NavBar"
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../../Routes/Home/Home";
import { Checkout } from "../../Routes/Checkout/Checkout";

type Props = {
  handleOpen: (state: number) => void
}

const Navigation = ({handleOpen}: Props) => {
  return (
    <>
      <NavBar handleOpen={handleOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default Navigation