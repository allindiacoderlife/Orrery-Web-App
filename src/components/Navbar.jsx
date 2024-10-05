import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isProject, setIsProject] = useState(false);
  const [isSolar, setIsSolar] = useState(false);
  const handleClick = (name) => {
    setIsHome(name === "Home");
    setIsProject(name === "Project");
    setIsSolar(name === "Solar");
  };
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
          to="/Orrery-Web-App/"
          onClick={() => handleClick("Home")}
          className={isHome ? "blue-gradient_text" : "text-blue-200"}
        >
          Home
        </NavLink>
        <NavLink
          to="/Orrery-Web-App/SolarSystem3D"
          onClick={() => handleClick("Solar")}
          className={isSolar ? "blue-gradient_text" : "text-blue-200"}
        >
          Solar 3D
        </NavLink>
        <NavLink
          to="/Orrery-Web-App/Project"
          onClick={() => handleClick("Project")}
          className={isProject ? "blue-gradient_text" : "text-blue-200"}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
