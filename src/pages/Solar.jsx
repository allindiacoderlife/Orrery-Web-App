import {useEffect} from "react";
import './Solar.css'
const Solar = () => {
  const createStars = () => {
    const container = document.querySelector(".div")
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }

  useEffect(() => {
    // createStars();
  },[])

  return (
    <div className="body">
      <div className="containr">
        <div className="sun">
          <img src="src/assets/sun.png" alt="sun" />
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
      </div>
    </div>
  );
};

export default Solar;
