
import React from 'react';
import Chart from './StockChart';
import {connect} from "react-redux";
import {getData} from "../../../utils/mockData";
import {fetchPrice} from "../../../store/actions";

import { TypeChooser } from "react-stockcharts/lib/helper";

class StockChartComponent extends React.Component {
	async componentDidMount() {
		const data = await this.props.dispatch(fetchPrice());
		console.log(this.props);
		console.log(data);	

		getData().then(data => {
			this.setState({ data })
		})
	}

	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

const mapStateToProps = state => {
  return {
    stockPrice: state.stockPrice,
  };
};

export const StockChart = connect(mapStateToProps)(StockChartComponent);