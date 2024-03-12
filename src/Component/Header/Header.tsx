import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>{"< D-D-f />"}</h1>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
