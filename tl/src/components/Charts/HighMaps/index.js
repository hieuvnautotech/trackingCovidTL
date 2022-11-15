import React from "react";
import Highchart from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

highchartsMap(Highchart);
const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Dân số",
      joinBy: ["hc-key", "key"],
    },
  ],
};
export default function HighMaps({ mapData }) {
  const [oprions, setOptions] = useState({});

  // console.log("mapdata", { mapData });

  // return null;

  useEffect(() => {
    const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties['hc-key'],
        value: index,
      }),
    setOptions({
      ...initOptions,
      series: [
        {
          ...initOption.series[0],
          mapData: mapData,
        },
      ],
    });
  }, []);
  return (
    <HighchartsReact
      highcharts={Highchart}
      options={{}}
      constructorType="mapChart"
    />
  );
}
