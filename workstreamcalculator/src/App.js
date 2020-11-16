import "./App.css";
import { useDispatch } from "react-redux";
import { change } from "./actions";
import { useState, useEffect } from "react";
import Hiring from "./Hiring";
import CTA from "./cta";
import "./edited_styles.css"; //edited original ant design css to have suitable slider colours

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width);
  return {
    width,
    height,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch(); // assign this constant for easier calling

  return (
    <div className="App">
      <div>
        <h2>Workstream ROI Calculator</h2>
        <h3>common restaurant sizes</h3>
        <div style={{ display: "flex", width: "500px", margin: "0 auto" }}>
          <button
            style={{ flexGrow: "1", margin: "8px" }}
            onClick={() => dispatch(change("newHires", 100))}
            //this buttons can allow for easier setting of variables according to restaurant sizes
            //can consider using a different reducer function to better set these pre sets
          >
            small
          </button>
          <button
            style={{ flexGrow: "1", margin: "8px" }}
            onClick={() => dispatch(change("newHires", 200))}
          >
            medium
          </button>
          <button
            style={{ flexGrow: "1", margin: "8px" }}
            onClick={() => dispatch(change("newHires", 500))}
          >
            large
          </button>
        </div>
        {windowDimensions.width > 1000 ? (
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: "85vw",
            }}
          >
            <div style={{ width: "55vw" }}>
              <Hiring />
            </div>
            <div style={{ width: "35vw" }}>
              <CTA />
            </div>
          </div>
        ) : (
          <div>
            <Hiring />
            <CTA />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
