import React, { useEffect, useRef, useState } from "react";
import "./Solar3D.css";

const Solar3D = () => {
  const [isactive, setActive] = useState({});

  const [activeSun, setActiveSun] = useState(false);
  const [activeMercury, setActiveMercury] = useState(false);
  const [activeVenus, setActiveVenus] = useState(false);
  const [activeEarth, setActiveEarth] = useState(true);
  const [activeMars, setActiveMars] = useState(false);
  const [activeJupiter, setActiveJupiter] = useState(false);
  const [activeSaturn, setActiveSaturn] = useState(false);
  const [activeUranus, setActiveUranus] = useState(false);
  const [activeNeptune, setActiveNeptune] = useState(false);

  const [speedData, setSpeedData] = useState(true);
  const [sizeData, setSizeData] = useState(false);
  const [distanceData, setDistanceData] = useState(false);

  const [verticalKaificent, setVerticalKaificent] = useState(0.2);
  const [deltaMerc, setDeltaMerc] = useState(0);
  const [deltaVenus, setDeltaVenus] = useState(0);
  const [deltaEarth, setDeltaEarth] = useState(0);
  const [deltaMoon, setDeltaMoon] = useState(0);
  const [deltaMars, setDeltaMars] = useState(0);
  const [deltaJupiter, setDeltaJupiter] = useState(0);
  const [deltaSaturn, setDeltaSaturn] = useState(0);
  const [deltaUranus, setDeltaUranus] = useState(0);
  const [deltaNeptune, setDeltaNeptune] = useState(0);

  const [currentMousePos, setCurrentMousePos] = useState({ x: -1, y: -1 });
  const [isDragged, setIsDragged] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const sunRef = useRef(null);
  const mercuryRef = useRef(null);
  const venusRef = useRef(null);
  const earthRef = useRef(null);
  const moonRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const saturnRef = useRef(null);
  const uranusRef = useRef(null);
  const neptuneRef = useRef(null);

  const Rmercury = 90;
  const n = 20;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(verticalKaificent);
    }, 1000);

    const handleMouseMove = (event) => {
      if (!isDragged) {
        setCurrentMousePos({ x: event.pageX, y: event.pageY });
      } else {
        const delta =
          (event.pageY - currentMousePos.y) / 10000 + verticalKaificent;
        if (delta <= 1 && delta >= 0) {
          setVerticalKaificent(delta);
        }
        drawCircles();
        // Mercury
        const mercuryContainer = mercuryRef.current;
        const Rmercury = 90;
        const alpha = (Math.PI * deltaMerc) / 180;
        const mercuryY = height / 2 - mercuryContainer.offsetHeight / 2;
        mercuryContainer.style.top = `${
          mercuryY + Rmercury * Math.sin(alpha) * verticalKaificent
        }px`;
        // Venus
        const venusContainer = venusRef.current;
        const Rvenus = 130;
        const alphaVenus = (Math.PI * deltaVenus) / 180;
        const venusY = height / 2 - venusContainer.offsetHeight / 2;
        venusContainer.style.top = `${
          venusY + 130 * Math.sin(alphaVenus) * verticalKaificent
        }px`;

        // Earth
        const earthContainer = earthRef.current;
        const Rearth = 185;
        const alphaEarth = (Math.PI * deltaEarth) / 180;
        const earthY = height / 2 - earthContainer.offsetHeight / 2;
        earthContainer.style.top = `${
          earthY + 185 * Math.sin(alphaEarth) * verticalKaificent
        }px`;

        // Moon
        const moonContainer = moonRef.current;
        const Rmoon = 28;
        const moonX =
          earthContainer.offsetWidth / 2 - moonContainer.offsetWidth / 9;
        const moonY =
          earthContainer.offsetHeight / 2 - moonContainer.offsetHeight / 9;
        const alphaMoon = (Math.PI * deltaMoon) / 180;
        moonContainer.style.top = `${
          moonY + 28 * Math.sin(alphaMoon) * verticalKaificent
        }px`;

        // Mars
        const marsContainer = marsRef.current;
        const Rmars = 240;
        const alphaMars = (Math.PI * deltaMars) / 180;
        const marsY = height / 2 - marsContainer.offsetHeight / 2;
        marsContainer.style.top = `${
          marsY + 240 * Math.sin(alphaMars) * verticalKaificent
        }px`;

        // Jupiter
        const jupiterContainer = jupiterRef.current;
        const Rjupiter = 320;
        const alphaJupiter = (Math.PI * deltaJupiter) / 180;
        const jupiterY = height / 2 - jupiterContainer.offsetHeight / 2;
        jupiterContainer.style.top = `${
          jupiterY + 320 * Math.sin(alphaJupiter) * verticalKaificent
        }px`;

        // Saturn
        const saturnContainer = saturnRef.current;
        const Rsaturn = 430;
        const alphaSaturn = (Math.PI * deltaSaturn) / 180;
        const saturnY = height / 2 - saturnContainer.offsetHeight / 2;
        saturnContainer.style.top = `${
          saturnY + 430 * Math.sin(alphaSaturn) * verticalKaificent
        }px`;

        // Uranus
        const uranusContainer = uranusRef.current;
        const Ruranus = 510;
        const alphaUranus = (Math.PI * deltaUranus) / 180;
        const uranusY = height / 2 - uranusContainer.offsetHeight / 2;
        uranusContainer.style.top = `${
          uranusY + 510 * Math.sin(alphaUranus) * verticalKaificent
        }px`;

        // Neptune
        const neptuneContainer = neptuneRef.current;
        const Rneptune = 560;
        const alphaNeptune = (Math.PI * deltaNeptune) / 180;
        const neptuneY = height / 2 - neptuneContainer.offsetHeight / 2;
        neptuneContainer.style.top = `${
          neptuneY + 560 * Math.sin(alphaNeptune) * verticalKaificent
        }px`;

        // console.log(delta);
      }
    };

    const handleMouseDown = () => {
      setIsDragged(true);
      $("bod1").css("cursor", "-webkit-grabbing");
    };

    const handleMouseUp = () => {
      setIsDragged(false);
      $("body1").css("cursor", "-webkit-grab");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragged, currentMousePos, verticalKaificent]);

  const spacePosition = () => {
    const sun = document.getElementsByClassName("suns")[0];
    sun.style.top = `${height / 2 - sun.offsetHeight / 2}px`;
    sun.style.left = `${width / 2 - sun.offsetWidth / 2}px`;

    const mercuryContainer = mercuryRef.current;
    mercuryContainer.style.top = `${
      height / 2 - mercuryContainer.offsetHeight / 2
    }px`;
    mercuryContainer.style.left = `${
      width / 2 - mercuryContainer.offsetWidth / 2 + Rmercury
    }px`;

    const venusContainer = venusRef.current;
    const Rvenus = 130;
    venusContainer.style.top = `${
      height / 2 - venusContainer.offsetHeight / 2
    }px`;
    venusContainer.style.left = `${
      width / 2 - venusContainer.offsetWidth / 2 + Rvenus
    }px`;

    const earthMoonContainer = earthRef.current;
    const Rearth = 185;
    earthMoonContainer.style.top = `${
      height / 2 - earthMoonContainer.offsetHeight / 2
    }px`;
    earthMoonContainer.style.left = `${
      width / 2 - earthMoonContainer.offsetWidth / 2 + Rearth
    }px`;

    const moon = moonRef.current;
    const Rmoon = 28;
    moon.style.top = `${
      earthMoonContainer.offsetHeight / 2 - moon.offsetHeight / 2
    }px`;
    moon.style.left = `${
      earthMoonContainer.offsetWidth / 2 - moon.offsetWidth / 2 + Rmoon
    }px`;

    const marsContainer = marsRef.current;
    const Rmars = 240;
    marsContainer.style.top = `${
      height / 2 - marsContainer.offsetHeight / 2
    }px`;
    marsContainer.style.left = `${
      width / 2 - marsContainer.offsetWidth / 2 + Rmars
    }px`;

    const jupiterContainer = jupiterRef.current;
    const Rjupiter = 320;
    jupiterContainer.style.top = `${
      height / 2 - jupiterContainer.offsetHeight / 2
    }px`;
    jupiterContainer.style.left = `${
      width / 2 - jupiterContainer.offsetWidth / 2 + Rjupiter
    }px`;

    const saturnRingContainer = saturnRef.current;
    const Rsaturn = 430;
    saturnRingContainer.style.top = `${
      height / 2 - saturnRingContainer.offsetHeight / 2
    }px`;
    saturnRingContainer.style.left = `${
      width / 2 - saturnRingContainer.offsetWidth / 2 + Rsaturn
    }px`;

    const uranusContainer = uranusRef.current;
    const Ruranus = 510;
    uranusContainer.style.top = `${
      height / 2 - uranusContainer.offsetHeight / 2
    }px`;
    uranusContainer.style.left = `${
      width / 2 - uranusContainer.offsetWidth / 2 + Ruranus
    }px`;

    const neptuneContainer = neptuneRef.current;
    const Rneptune = 560;
    neptuneContainer.style.top = `${
      height / 2 - neptuneContainer.offsetHeight / 2
    }px`;
    neptuneContainer.style.left = `${
      width / 2 - neptuneContainer.offsetWidth / 2 + Rneptune
    }px`;
  };

  const movePlanets = () => {
    spacePosition();
    moveMercury();
    moveVenus();
    moveEarth();
    moveMoon();
    moveMars();
    moveJupiter();
    moveSaturn();
    moveUranus();
    moveNeptune();
  };

  const moveMercury = () => {
    const mercuryContainer = mercuryRef.current;
    const mercury = document.getElementsByClassName("shadow_mercury")[0];
    const mercuryX = width / 2 - mercuryContainer.offsetWidth / 2;
    const mercuryY = height / 2 - mercuryContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaMerc) / 180;
    // mercuryContainer
    if (mercuryRef.current) {
      mercuryRef.current.style.top = `${
        mercuryY + Rmercury * Math.sin(alpha) * verticalKaificent
      }px`;
      mercuryRef.current.style.left = `${mercuryX + 90 * Math.cos(alpha)}px`;
      mercury.style.transform = `rotate(${deltaMerc}deg)`;
    }

    setDeltaMerc((prev) => (prev + 47.87 / n) % 360);
  };

  const moveVenus = () => {
    const venusContainer = venusRef.current;
    const venus = document.getElementsByClassName("shadow_venus")[0];
    const venusX = width / 2 - venusContainer.offsetWidth / 2;
    const venusY = height / 2 - venusContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaVenus) / 180;
    // venusContainer
    if (venusRef.current) {
      venusRef.current.style.top = `${
        venusY + 130 * Math.sin(alpha) * verticalKaificent
      }px`;
      venusRef.current.style.left = `${venusX + 130 * Math.cos(alpha)}px`;
      venus.style.transform = `rotate(${deltaVenus}deg)`;
    }

    setDeltaVenus((prev) => (prev + 35.02 / n) % 360);
  };

  const moveEarth = () => {
    const earthContainer = earthRef.current;
    const earth = document.getElementsByClassName("shadow_earth")[0];
    const earthX = width / 2 - earthContainer.offsetWidth / 2;
    const earthY = height / 2 - earthContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaEarth) / 180;
    // earthContainer
    if (earthRef.current) {
      earthRef.current.style.top = `${
        earthY + 185 * Math.sin(alpha) * verticalKaificent
      }px`;
      earthRef.current.style.left = `${earthX + 185 * Math.cos(alpha)}px`;
      earth.style.transform = `rotate(${deltaEarth}deg)`;
    }

    setDeltaEarth((prev) => (prev + 29.78 / n) % 360);
  };

  const moveMoon = () => {
    const moonContainer = moonRef.current;
    const earthContainer = earthRef.current;
    const Rmoon = 28;
    const moonX =
      earthContainer.offsetWidth / 2 - moonContainer.offsetWidth / 9;
    const moonY =
      earthContainer.offsetHeight / 2 - moonContainer.offsetHeight / 9;
    const alpha = (Math.PI * deltaMoon) / 180;
    // moonContainer
    if (moonRef.current) {
      moonRef.current.style.top = `${
        moonY + 28 * Math.sin(alpha) * verticalKaificent
      }px`;
      moonRef.current.style.left = `${moonX + Rmoon * Math.cos(alpha)}px`;
    }
    setDeltaMoon((prev) => (prev + 340 / n) % 360);
  };

  const moveMars = () => {
    const marsContainer = marsRef.current;
    const mars = document.getElementsByClassName("shadow_mars")[0];
    const marsX = width / 2 - marsContainer.offsetWidth / 2;
    const marsY = height / 2 - marsContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaMars) / 180;
    // marsContainer
    if (marsRef.current) {
      marsRef.current.style.top = `${
        marsY + 240 * Math.sin(alpha) * verticalKaificent
      }px`;
      marsRef.current.style.left = `${marsX + 240 * Math.cos(alpha)}px`;
      mars.style.transform = `rotate(${deltaMars}deg)`;
    }

    setDeltaMars((prev) => (prev + 24.077 / n) % 360);
  };

  const moveJupiter = () => {
    const jupiterContainer = jupiterRef.current;
    const jupiter = document.getElementsByClassName("shadow_jupiter")[0];
    const jupiterX = width / 2 - jupiterContainer.offsetWidth / 2;
    const jupiterY = height / 2 - jupiterContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaJupiter) / 180;
    // jupiterContainer
    if (jupiterRef.current) {
      jupiterRef.current.style.top = `${
        jupiterY + 320 * Math.sin(alpha) * verticalKaificent
      }px`;
      jupiterRef.current.style.left = `${jupiterX + 320 * Math.cos(alpha)}px`;
      jupiter.style.transform = `rotate(${deltaJupiter}deg)`;
    }

    setDeltaJupiter((prev) => (prev + 13.07 / n) % 360);
  };

  const moveSaturn = () => {
    const saturnContainer = saturnRef.current;
    const saturn = document.getElementsByClassName("shadow_saturn")[0];
    const saturnX = width / 2 - saturnContainer.offsetWidth / 2;
    const saturnY = height / 2 - saturnContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaSaturn) / 180;
    // saturnContainer
    if (saturnRef.current) {
      saturnRef.current.style.top = `${
        saturnY + 430 * Math.sin(alpha) * verticalKaificent
      }px`;
      saturnRef.current.style.left = `${saturnX + 430 * Math.cos(alpha)}px`;
      saturn.style.transform = `rotate(${deltaSaturn}deg)`;
    }

    setDeltaSaturn((prev) => (prev + 9.69 / n) % 360);
  };

  const moveUranus = () => {
    const uranusContainer = uranusRef.current;
    const uranus = document.getElementsByClassName("shadow_uranus")[0];
    const uranusX = width / 2 - uranusContainer.offsetWidth / 2;
    const uranusY = height / 2 - uranusContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaUranus) / 180;
    // uranusContainer
    if (uranusRef.current) {
      uranusRef.current.style.top = `${
        uranusY + 510 * Math.sin(alpha) * verticalKaificent
      }px`;
      uranusRef.current.style.left = `${uranusX + 510 * Math.cos(alpha)}px`;
      uranus.style.transform = `rotate(${deltaUranus}deg)`;
    }

    setDeltaUranus((prev) => (prev + 6.81 / n) % 360);
  };

  const moveNeptune = () => {
    const neptuneContainer = neptuneRef.current;
    const neptune = document.getElementsByClassName("shadow_neptune")[0];
    const neptuneX = width / 2 - neptuneContainer.offsetWidth / 2;
    const neptuneY = height / 2 - neptuneContainer.offsetHeight / 2;
    const alpha = (Math.PI * deltaNeptune) / 180;
    // neptuneContainer
    if (neptuneRef.current) {
      neptuneRef.current.style.top = `${
        neptuneY + 560 * Math.sin(alpha) * verticalKaificent
      }px`;
      neptuneRef.current.style.left = `${neptuneX + 560 * Math.cos(alpha)}px`;
      neptune.style.transform = `rotate(${deltaNeptune}deg)`;
    }

    setDeltaNeptune((prev) => (prev + 5.43 / n) % 360);
  };

  const drawCircles = () => {
    const mercuryCircle = document.getElementsByClassName("mercury_circle")[0];
    mercuryCircle.style.left = `${width / 2 - Rmercury}px`;
    mercuryCircle.style.top = `${height / 2 - Rmercury * verticalKaificent}px`;
    mercuryCircle.style.width = `${Rmercury * 2}px`;
    mercuryCircle.style.height = `${Rmercury * 2 * verticalKaificent}px`;

    const venusCircle = document.getElementsByClassName("venus_circle")[0];
    const Rvenus = 130;
    venusCircle.style.left = `${width / 2 - Rvenus}px`;
    venusCircle.style.top = `${height / 2 - Rvenus * verticalKaificent}px`;
    venusCircle.style.width = `${Rvenus * 2}px`;
    venusCircle.style.height = `${Rvenus * 2 * verticalKaificent}px`;

    const earthCircle = document.getElementsByClassName("earth_circle")[0];
    const Rearth = 185;
    earthCircle.style.left = `${width / 2 - Rearth}px`;
    earthCircle.style.top = `${height / 2 - Rearth * verticalKaificent}px`;
    earthCircle.style.width = `${Rearth * 2}px`;
    earthCircle.style.height = `${Rearth * 2 * verticalKaificent}px`;

    const marsCircle = document.getElementsByClassName("mars_circle")[0];
    const Rmars = 240;
    marsCircle.style.left = `${width / 2 - Rmars}px`;
    marsCircle.style.top = `${height / 2 - Rmars * verticalKaificent}px`;
    marsCircle.style.width = `${Rmars * 2}px`;
    marsCircle.style.height = `${Rmars * 2 * verticalKaificent}px`;

    const jupiterCircle = document.getElementsByClassName("jupiter_circle")[0];
    const Rjupiter = 320;
    jupiterCircle.style.left = `${width / 2 - Rjupiter}px`;
    jupiterCircle.style.top = `${height / 2 - Rjupiter * verticalKaificent}px`;
    jupiterCircle.style.width = `${Rjupiter * 2}px`;
    jupiterCircle.style.height = `${Rjupiter * 2 * verticalKaificent}px`;

    const saturnCircle = document.getElementsByClassName("saturn_circle")[0];
    const Rsaturn = 430;
    saturnCircle.style.left = `${width / 2 - Rsaturn}px`;
    saturnCircle.style.top = `${height / 2 - Rsaturn * verticalKaificent}px`;
    saturnCircle.style.width = `${Rsaturn * 2}px`;
    saturnCircle.style.height = `${Rsaturn * 2 * verticalKaificent}px`;

    const uranusCircle = document.getElementsByClassName("uranus_circle")[0];
    const Ruranus = 510;
    uranusCircle.style.left = `${width / 2 - Ruranus}px`;
    uranusCircle.style.top = `${height / 2 - Ruranus * verticalKaificent}px`;
    uranusCircle.style.width = `${Ruranus * 2}px`;
    uranusCircle.style.height = `${Ruranus * 2 * verticalKaificent}px`;

    const neptuneCircle = document.getElementsByClassName("neptune_circle")[0];
    const Rneptune = 560;
    neptuneCircle.style.left = `${width / 2 - Rneptune}px`;
    neptuneCircle.style.top = `${height / 2 - Rneptune * verticalKaificent}px`;
    neptuneCircle.style.width = `${Rneptune * 2}px`;
    neptuneCircle.style.height = `${Rneptune * 2 * verticalKaificent}px`;
  };

  const handleActiveData = (data) => {
    setSpeedData(false);
    setSizeData(false);
    setDistanceData(false);
    if (data === "speed") {
      setSpeedData(true);
    } else if (data === "size") {
      setSizeData(true);
    } else if (data === "distance") {
      setDistanceData(true);
    }
  };

  const handleActivePlanet = (planet) => {
    setActiveSun(planet === "Sun");
    setActiveMercury(planet === "Mercury");
    setActiveVenus(planet === "Venus");
    setActiveEarth(planet === "Earth");
    setActiveMars(planet === "Mars");
    setActiveJupiter(planet === "Jupiter");
    setActiveSaturn(planet === "Saturn");
    setActiveUranus(planet === "Uranus");
    setActiveNeptune(planet === "Neptune");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      movePlanets();
    }, 100);
    drawCircles();
    return () => clearInterval(interval);
  }, [
    deltaMerc,
    deltaVenus,
    deltaEarth,
    deltaMoon,
    deltaMars,
    deltaJupiter,
    deltaSaturn,
    deltaUranus,
    deltaNeptune,
  ]);

  return (
    <div className="body1">
      <div className="content1">
        <div className="circles1">
          <div className="mercury_circle"></div>
          <div className="venus_circle"></div>
          <div className="earth_circle"></div>
          <div className="mars_circle"></div>
          <div className="saturn_circle"></div>
          <div className="jupiter_circle"></div>
          <div className="uranus_circle"></div>
          <div className="neptune_circle"></div>
        </div>
        <div id="planets">
          <div className="planet1 suns" ref={sunRef}>
          {activeSun ? (
              <dl class="info">
                <dt>Sun</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>0 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>4,370,005 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>149,598,262 km</p>
                      <span>From Earth</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
          </div>
          <div className="mercury_container" ref={mercuryRef}>
            {activeMercury ? (
              <dl class="info">
                <dt>Mercury</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>170,503 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>4,370,005 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>57,909,227 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_mercury"></div>
            <div className="shadow_mercury">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="venus_container" ref={venusRef}>
          {activeVenus ? (
              <dl class="info">
                <dt>Venus</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>126,074 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>38,024 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>108,209,475 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_venus"></div>
            <div className="shadow_venus">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="earth_moon_container" ref={earthRef}>
            <div className="earth_container">
            {activeEarth ? (
              <dl class="info">
                <dt>Earth</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>107,218 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>40,030 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>149,598,262 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
              <div className="gif_earth">
                <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080036/earth_saibbo.gif" />
              </div>
              <div className="shadow_earth">
                <div className="light"></div>
                <div className="shadow"></div>
              </div>
            </div>
            <div className="moon_container" ref={moonRef}>
              <div className="moon1">
                <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080036/moon_nqqsgu.gif" />
              </div>
            </div>
          </div>
          <div className="mars_container" ref={marsRef}>
          {activeMars ? (
              <dl class="info">
                <dt>Mars</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>86,677 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>21,296 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>227,943,824 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_mars"></div>
            <div className="shadow_mars">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="jupiter_container" ref={jupiterRef}>
          {activeJupiter ? (
              <dl class="info">
                <dt>Jupiter</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>47,002 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>439,263 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>778,340,821 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_jupiter">
              <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080036/jupiter_cxhuh5.gif" />
            </div>
            <div className="shadow_jupiter">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="saturn_ring_container" ref={saturnRef}>
            <div className="saturn_container">
            {activeSaturn ? (
              <dl class="info">
                <dt>Saturn</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>34,701 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>365,882 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>1,426,666,422 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
              <div className="gif_saturn">
                <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080036/jupiter_cxhuh5.gif" />
              </div>
              <div className="shadow_saturn">
                <div className="light"></div>
                <div className="shadow"></div>
              </div>
            </div>
            <div className="ring_container">
              <div className="gif_ring">
                <div>
                  <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080037/ring_zofwhd.png" />
                </div>
                <div>
                  <img src="https://res.cloudinary.com/yerevan/image/upload/v1484080037/ring_zofwhd.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="uranus_container" ref={uranusRef}>
          {activeUranus ? (
              <dl class="info">
                <dt>Saturn</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>24,477 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>159,354 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>2,870,658,186 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_uranus"></div>
            <div className="shadow_uranus">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
          <div className="neptune_container" ref={neptuneRef}>
          {activeNeptune ? (
              <dl class="info">
                <dt>Neptune</dt>
                  {
                    speedData ? (
                      <dd>
                      <p>19,566 km/h</p>
                      <span>Orbit Velocity</span>
                      </dd>
                    ) : sizeData ? (
                      <dd>
                      <p>154,704 km</p>
                      <span>Equatorial Circumference</span>
                      </dd>
                    ) : distanceData ? (
                      <dd>
                      <p>4,498,396,441 km</p>
                      <span>From Sun</span>
                      </dd>
                    ) : null
                  }
              </dl>
            ) : null}
            <div className="gif_neptune"></div>
            <div className="shadow_neptune">
              <div className="light"></div>
              <div className="shadow"></div>
            </div>
          </div>
        </div>

        <div className="controls" id="controls">
          <div className="gap-1 flex">
            <button
              className={speedData ? "newbtn text-blue-500" : "newbtn text-white"}
              onClick={() => handleActiveData("speed")}
            >
              Speed
            </button>
            <button
              className={sizeData ? "newbtn text-blue-500" : "newbtn text-white"}
              onClick={() => handleActiveData("size")}
            >
              Size
            </button>
            <button
              className={distanceData ? "newbtn text-blue-500" : "newbtn text-white"}
              onClick={() => handleActiveData("distance")}
            >
              Distance
            </button>
          </div>
          <p className="text-white">
            Grab and move mouse verticaly to change perspective
          </p>
        </div>
        <div className=" gap-2 flex fixed justify-center items-center bottom-0 right-0 left-0 ">
          <a
            className={
              activeSun ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Sun")}
          >
            Sun
          </a>
          <a
            className={
              activeMercury ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Mercury")}
          >
            Mercury
          </a>
          <a
            className={
              activeVenus ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Venus")}
          >
            Venus
          </a>
          <a
            className={
              activeEarth ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Earth")}
          >
            Earth
          </a>
          <a
            className={
              activeMars ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Mars")}
          >
            Mars
          </a>
          <a
            className={
              activeJupiter ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Jupiter")}
          >
            Jupiter
          </a>
          <a
            className={
              activeSaturn ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Saturn")}
          >
            Saturn
          </a>
          <a
            className={
              activeUranus ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Uranus")}
          >
            Uranus
          </a>
          <a
            className={
              activeNeptune ? "text-blue-500 databtn" : "text-white databtn"
            }
            onClick={() => handleActivePlanet("Neptune")}
          >
            Neptune
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solar3D;
