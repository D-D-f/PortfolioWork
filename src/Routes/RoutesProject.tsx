import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesProject;
