import { NavBar } from "../../Secondary/NavBar/NavBar"
import {
  Routes,
  Route,
} from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>Checkou</h1>} />
      </Routes>
    </>
  );
}

export default Navigation