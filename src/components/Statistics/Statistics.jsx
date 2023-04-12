import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  ResponsiveContainer,
  Radar,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import Banner from "../Banner/Banner";


const Statistics = () => {
  const data = useLoaderData();

  
  // 
  return (
    <div className="">
      <Banner>RadarChart of Assignment Marks</Banner>
      <div className="my-10 flex w-full h-full justify-center items-center">
      <ResponsiveContainer width="80%" height="50%" outerRadius="20%" aspect={5 / 2} >
        <RadarChart
          cx="50%"
          cy="50%"
          // outerRadius={100}
          // width={500}
          // height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            name="Abdul Alim"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;


