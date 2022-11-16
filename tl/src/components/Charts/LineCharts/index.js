import React from 'react'
import HighChartsReact from 'highcharts-react-official'
import Highcharts from "highcharts";
import { useEffect, useState } from 'react';

const showData = [1, 2, 4, 8, 16, 32]

// const option = {
//   chart: {
//     type: "spline",
//   },
//   title: {
//     text: "My chart",
//   },
//   series: [
//       {
//         name: "Tổng ca nhiễm",
//       data: showData,
//     },
//   ],
// };

const generateOptions = () => {
  return {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [
        {
          name: "Tổng ca nhiễm",
        data: showData,
      },
    ],
  }
}

export default function LineChart() {

  const [options, setOptions] = useState({})

  useEffect(() => {
    setOptions(generateOptions())
  },[])

    
  return (
    <div>
      <HighChartsReact
        highcharts={Highcharts}   
        options={options}
      />
      
    </div>
  );
}
