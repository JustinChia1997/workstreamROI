import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function CTA(props) {
  let variables = useSelector((state) => state.variables);
  return (
    <div style={{ backgroundColor: "white", padding: "8px" }}>
      <h1>Heres how we can help!</h1>
      <h2>Annual savings with workstream: </h2>
      <h1 style={{ color: "#1890ff" }}>${variables["annualSavings"]}</h1>
      <h2>New no-show rate:</h2>
      <h1>{variables.newNoShow}</h1>
      <h2>How many days it takes to fill an open role</h2>
      <h1>{variables.newDaysToFill}</h1>
      <form>
        <input type="text" value="First Name" />
      </form>
      <form>
        <input type="text" value="Last Name" />
      </form>
      <form>
        <input type="text" value="Phone Number" />
      </form>
      <form>
        <input type="text" value="Email" />
      </form>
      <form>
        <input type="text" value="Company Name" />
      </form>
      <h2>Roi @ 10% interest rate for 5 years</h2>
      <BarChart
        width={350}
        height={300}
        data={[
          { name: "1st", value: Math.round(1.1 * variables["annualSavings"]) },
          { name: "2nd", value: Math.round(1.21 * variables["annualSavings"]) },
          {
            name: "3rd",
            value: Math.round(1.343 * variables["annualSavings"]),
          },
          { name: "4th", value: Math.round(1.49 * variables["annualSavings"]) },
          {
            name: "5th",
            value: Math.round(1.655 * variables["annualSavings"]),
          },
        ]}
        margin={{
          top: 32,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
