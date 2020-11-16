import { Slider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./actions";

export default function HiringVariables(props) {
  const dispatch = useDispatch();
  let variables = useSelector((state) => state.variables);
  // I used a props based functional components to ensure resuability
  return (
    <div
      style={{
        textAlign: "left",
        paddingLeft: "16px",
        paddingRight: "16px",
        marginBottom: "48px",
      }}
    >
      <h2>{props.title}</h2>
      <p style={{ marginTop: "-16px", fontSize: "16px" }}>
        {props.description}
      </p>
      <h2 style={{ margin: "-4px" }}>
        {variables[props.type] ? variables[props.type] : "0"} {props.units}
      </h2>
      <div style={{ display: "flex", marginBottom: "-12px" }}>
        <p style={{ flexGrow: "1" }}>{props.min}</p>
        <p style={{ paddingRight: "8px" }}>
          {props.max} {props.units}
        </p>
      </div>
      <Slider
        style={{ marginLeft: "-2px" }}
        max={props.max}
        min={props.min}
        value={useSelector((state) => state.variables[props.type])}
        onChange={(value) => dispatch(change(props.type, value))}
      />
    </div>
  );
}
