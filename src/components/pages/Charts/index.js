
import React from 'react';
import { Button } from 'antd'
import Chart from './StockChart';
import { connect } from "react-redux";

import { TypeChooser } from "react-stockcharts/lib/helper";

class StockChartComponent extends React.Component {
	async componentDidMount() {
		if(this.props.stockPrice.items) {
			const parseData = [];
			this.props.stockPrice.items.forEach(el => {
				parseData.push({
					date: new Date(el.TRADEDATE),
					open: el.OPEN,
					high: el.HIGH,
					low: el.LOW,
					close: el.CLOSE,
					//volume: d.volume,
				})
			});

			this.setState({ data: parseData })
		}
	}

	render() {
		if(this.state?.data == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<Button type="primary" onClick={() => this.props.history.goBack()}>{"<="}</Button>
				<TypeChooser>
					{type => <Chart type={type} data={this.state.data} />}
				</TypeChooser>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		stockPrice: state.stockPrice,
	};
};

export const StockChart = connect(mapStateToProps)(StockChartComponent);