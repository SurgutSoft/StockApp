
import React from 'react';
import { Button, Radio } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
import Chart from './StockChart';
import { connect } from "react-redux";

import { chartPeriodFilters } from '../../../utils/constants/common'
import { TypeChooser } from "react-stockcharts/lib/helper";
import css from "./StockChart.module.scss";

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
			<div className={css.wrapper}>
				<div className={css.content}>
					<div className={css.header}>
						<Button type="default" onClick={() => this.props.history.goBack()}>
							<ArrowLeftOutlined />
						</Button>

						<Radio.Group>
							{chartPeriodFilters.map(item => <Radio.Button value={item.value}>{item.label}</Radio.Button>)}
						</Radio.Group>
					</div>
					<TypeChooser>
						{type => <Chart type={type} data={this.state.data} />}
					</TypeChooser>
				</div>
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