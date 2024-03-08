import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home/Home";
import About from "../Pages/About/About";

const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesProject;
