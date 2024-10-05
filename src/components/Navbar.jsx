import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/Orrery-Web-App/"
        className="h-10 w-10 rounded-lg bg-white
            flex items-center justify-center shadow-md font-bold
        "
      >
        <p className="blue-gradient_text">CS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/Orrery-Web-App/SolarSystem3D"
          className={({isActive}) => isActive ? "blue-gradient_text" : "text-blue-200"}
        >
          Solar 3D
        </NavLink>
        <NavLink
          to="/Orrery-Web-App/Project"
          className={({isActive}) => isActive ? "blue-gradient_text" : "text-blue-200"}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
