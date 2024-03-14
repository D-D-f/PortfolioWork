import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";

const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default RoutesProject;
