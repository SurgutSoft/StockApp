import React from "react";
import PropTypes from "prop-types";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
  CandlestickSeries,
  LineSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { HoverTooltip } from "react-stockcharts/lib/tooltip";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");
class StockChart extends React.Component {
  tooltipContent = () => {
    return ({ currentItem, xAccessor }) => {
      return {
        x: dateFormat(xAccessor(currentItem)),
        y: [
          {
            label: "open",
            value: currentItem.open && numberFormat(currentItem.open)
          },
          {
            label: "high",
            value: currentItem.high && numberFormat(currentItem.high)
          },
          {
            label: "low",
            value: currentItem.low && numberFormat(currentItem.low)
          },
          {
            label: "close",
            value: currentItem.close && numberFormat(currentItem.close)
          }
        ]
          .filter(line => line.value)
      };
    };
  }

  render = () => {
    const { data: initialData, width, ratio } = this.props;
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
      <ChartCanvas height={600}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type="svg"
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >

        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={16} />
          <YAxis axisAt="left" orient="left" ticks={10} />
          <YAxis axisAt="right" orient="left" ticks={10} />
          <CandlestickSeries />

          <LineSeries
            yAccessor={d => d.close}
            stroke="blue" />

          {/* <LineSeries
            yAccessor={d => d.open}
            stroke="white" /> */}

          <HoverTooltip
            tooltipContent={this.tooltipContent()}
            fontSize={15}
          />
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
