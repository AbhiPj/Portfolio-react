// import room from "./top2.png";
import finalRoof from "./finalroof.png";
import room from "./newroom.png";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [sideScroll, setSideScroll] = useState(0);
  const [scrollY1, setScrollY1] = useState(0);
  const [scrollY3, setScrollY3] = useState(0);
  const [opacity, setOpacity] = useState(1);
  console.log(scrollY, "sc");
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 1400) {
        setSideScroll(1400);
      } else {
        setSideScroll(window.pageYOffset);
      }
      setScrollY1(window.pageYOffset);

      setScrollY(window.pageYOffset);
      setOpacity(opacity - window.pageYOffset / 600);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-content" style={{ visibility: "visible" }}>
          {/* houses and shiz */}
        </div>
        <h1
          style={{
            visibility: "inherit",
            // opacity: { scrollY },
            opacity: `${opacity}`,

            transform: `translate3d(0px, ${scrollY / 2}px, 0px)`,
            // transform: `translate3d(0px, 16.9518px, 0px)`
          }}
        >
          <span className="logo-1"></span>
          <span className="logo-2"></span>
          <span className="logo-3"></span>
        </h1>
        <div
          // className="house-back house-item-back"
          className="house-back house-item-back"
          style={{
            transform: `translate3d(0px, ${-(scrollY / 3)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="house-left house-item-side"
          style={{
            transform: `translate3d(0px, ${-(sideScroll / 2)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="house-right house-item-side"
          style={{
            transform: `translate3d(0px, ${-(sideScroll / 2)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="house-head house-item-head"
          style={{
            transform: `translate3d(0px, ${-(scrollY / 3)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="house-square-left-3 house-item-layer1"
          style={{
            transform: `translate3d(0px, ${-(scrollY1 / 2.5)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="house-square-right-1 house-item-layer1"
          style={{
            transform: `translate3d(0px, ${-(scrollY1 / 2.5)}px, 0px)`,
          }}
        >
          <i></i>
        </div>

        <div
          className="house-square-left-1 house-item-layer2"
          style={{
            transform: `translate3d(0px, ${-(scrollY1 / 4)}px, 0px)`,
          }}
        >
          <i></i>
        </div>

        <div
          className="house-tower-right-1 house-item-layer3"
          style={{
            transform: `translate3d(0px, ${-(scrollY1 / 4)}px, 0px)`,
          }}
        >
          <i></i>
        </div>
      </header>
      {/* <div style={{ height: "420vh" }}>fsssdf</div> */}

      <div class="header-placeholder"></div>

      <div style={{ width: "100%", position: "absolute", zIndex: "10" }}>
        <img
          src={finalRoof}
          alt=""
          style={{ width: "100%", zIndex: "10", marginBottom: "-20px" }}
        />
        {/* <div
          className="gradient-1"
          style={{
            height: "25vh",
            backgroundColor: "#0d1005",
            // width: "100%",
            borderTop: "solid 10px black",
            // borderBottom: "none",
          }}
        ></div> */}
        <div
          // className="gradient"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            marginTop: "-105px",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "110px",
                height: "268px",
                left: "0px",
                width: "395px",
                background: "rgb(24, 32, 103)",
                zIndex: "-1",
                transform: "rotateZ(153deg)",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "27px",
                height: "268px",
                left: "315px",
                width: "905px",
                background: "rgb(24, 32, 103)",
                zIndex: "-1",
                transform: "rotateZ(179deg)",
              }}
            ></div>

            <div
              // className="gradient"
              style={{
                height: "30vh",
                width: "82px",
                marginTop: "201px",
                background: "rgb(24, 32, 103)",
              }}
            ></div>
          </div>
          <div
            className="gradient"
            style={{
              height: "40vh",
              backgroundColor: "#0d1005",
              width: "100%",
              borderTop: "solid 9px black",
            }}
          ></div>
        </div>
        <img src={room} alt="" style={{ width: "100%", zIndex: "10" }} />
      </div>

      <section>
        <div className="room-top"></div>
        <div className="section"></div>
      </section>
    </>
  );
}

export default App;
