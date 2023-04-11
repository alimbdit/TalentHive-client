import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import Banner from "../Banner/Banner";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="">
      <Banner>RadarChart of Assignment Marks</Banner>
      <div className="chart-container">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius={100}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Abdul Alim"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};

export default Statistics;

// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

//     render() {
//       return (
//         <ResponsiveContainer width="100%" height="100%">
//           <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//             <PolarGrid />
//             <PolarAngleAxis dataKey="subject" />
//             <PolarRadiusAxis />
//             <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//           </RadarChart>
//         </ResponsiveContainer>
//       );
//     }
//   }
