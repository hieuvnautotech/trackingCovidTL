import React from 'react'
import HighChartsReact from 'highcharts-react-official'
import Highcharts from "highcharts";
export default function LineChart() {
    const options = {
      chart: {
        type: "spline",
      },
      title: {
        text: "My chart",
      },
      series: [
          {
            name: "Tổng ca nhiễm",
          data: [1, 2, 1, 4, 3, 6],
        },
      ],
    };
  return (
    <div>
      <HighChartsReact
        highcharts={Highcharts}   
        options={options}
      />
      
    </div>
  );
}
