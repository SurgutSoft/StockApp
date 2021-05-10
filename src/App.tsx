import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {connect} from "react-redux";

import {URLS} from "./utils/constants/Urls";
import Sidebar from "./components/sidebar/Sidebar";
import {StockListTable} from "./components/pages/StockListTable/StockListTable";
import {StockChart} from "./components/pages/Charts/index";

import css from "./App.module.scss";
import {fetchStocksList} from "./store/actions";

interface IProps {
  fetchStocksList: () => void;
}

const App = ({
  fetchStocksList
}: IProps) => {

  useEffect(() => {
    fetchStocksList();
  }, [
    fetchStocksList
  ]);

  return (
    <Router>
      <div className={css.container}>
        <Sidebar />
        <div className={css.pages}>
          <Switch>
            <Route path={URLS.stockList} component={StockListTable} />
            <Route path={URLS.stockChart} component={StockChart} />
            <Redirect to={URLS.stockList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchStocksList: () => dispatch(fetchStocksList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
