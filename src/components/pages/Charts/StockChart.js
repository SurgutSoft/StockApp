// import React, {useEffect, useState} from "react";

// import {ChartCanvas, Chart} from "react-stockcharts";
// import {CandlestickSeries} from "react-stockcharts/lib/series";
// import {XAxis, YAxis} from "react-stockcharts/lib/axes";
// import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";
// import {fitWidth} from "react-stockcharts/lib/helper";
// import {last} from "react-stockcharts/lib/utils";
// import {getData} from "../../../utils/mockData";

// let StockChart = () => {
//   const {chartData, setChartData} = useState();
//   useEffect(() => {
//     const getMockData = async () => {
//       const chartData = await getData();
//       setChartData(chartData);
//     }

//     getMockData();
//   }, [])

//   const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
//   const {
//     data,
//     xScale,
//     xAccessor,
//     displayXAccessor,
//   } = xScaleProvider(chartData);
//   const xExtents = [
//     xAccessor(last(data)),
//     xAccessor(data[data.length - 100])
//   ];

//   return (
//     <ChartCanvas
//       height={400}
//       margin={{left: 50, right: 50, top: 10, bottom: 30}}
//       seriesName="MSFT"
//       data={data}
//       xScale={xScale}
//       xAccessor={xAccessor}
//       displayXAccessor={displayXAccessor}
//       xExtents={xExtents}
//     >
//       <Chart id={1} yExtents={d => [d.high, d.low]}>
//         <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//         <YAxis axisAt="left" orient="left" ticks={5} />
//         <CandlestickSeries />
//       </Chart>
//     </ChartCanvas>
//   )
// }

// StockChart = fitWidth(StockChart);

// export default StockChart;

import React from "react";
import PropTypes from "prop-types";

import {ChartCanvas, Chart} from "react-stockcharts";
import {
  CandlestickSeries,
} from "react-stockcharts/lib/series";
import {XAxis, YAxis} from "react-stockcharts/lib/axes";

import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";
import {fitWidth} from "react-stockcharts/lib/helper";
import {last} from "react-stockcharts/lib/utils";

class StockChart extends React.Component {
  // state = {
  //   chartData: [],
  // }

  // componentDidMount = async () => {
  //   const data = await getData();
  //   this.setState({chartData: data})
  // }

  render = () => {
    const {type, data: initialData, width, ratio} = this.props;

    const xScaleProvider = discontinuousTimeScaleProvider
      .inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor,
    } = xScaleProvider(initialData);
    const xExtents = [
      xAccessor(last(data)),
      xAccessor(data[data.length - 100])
    ];

    return (
      <ChartCanvas height={400}
        ratio={ratio}
        width={width}
        margin={{left: 50, right: 50, top: 10, bottom: 30}}
        type="svg"
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >

        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries />
        </Chart>
      </ChartCanvas>
    );
  }
}

StockChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

StockChart.defaultProps = {
  type: "svg",
};
StockChart = fitWidth(StockChart);

export default StockChart;

