import React from "react";
import HighChartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useEffect, useState } from "react";

// const showData = [1, 2, 4, 8, 16, 32];

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

const generateOptions = (data) => {
  console.log(data, "kkk");
  return {
    // chart: {
    //   type: "spline",
    // },
    // title: {
    //   text: "My chart",
    // },
    // series: [
    //     {
    //       name: "Tổng ca nhiễm",
    //     data: showData,
    //   },
    // ],
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      // categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((value) => value.Confirmed),
      },
    ],
  };
};

export default function LineChart({ data }) {
  console.log("lineChartData", data);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(generateOptions(data));
  }, [data]);
  useEffect(() => {
    console.log(options, "okok");
  }, [options]);

  return (
    <div>
      {options && <HighChartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
}
