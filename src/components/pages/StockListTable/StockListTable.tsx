import React from "react";
import {connect} from 'react-redux';
import {fetchStocksList, fetchPrice} from "../../../store/actions";
import {Table} from "./Table/Table";

import css from "./StockListTable.module.scss";
import {IStockListData} from "../../../Interfaces/ICommon";


interface IProps {
  stockList: IStockListData;
  fetchStocksList: () => void;
  fetchPrice: (stock: string) => void;
}

const StockListTableComponent = ({stockList, fetchPrice}: IProps) => {
  return (
    <div className={css.wrapper} >
      <div className={css.content}>
        <Table data={stockList} fetchPrice={fetchPrice}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    stockList: state.stockList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchStocksList: () => dispatch(fetchStocksList()),
    fetchPrice: (stock: string) => dispatch(fetchPrice(stock)),
  };
};

export const StockListTable = connect(mapStateToProps, mapDispatchToProps)(StockListTableComponent);