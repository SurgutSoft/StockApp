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

import css from "./App.module.scss";


const App = ({}) => {
  useEffect(() => {

  }, []);

  return (
    <Router>
      <div className={css.container}>
        <Sidebar />
        <div className={css.pages}>
          <Switch>
            <Route path={URLS.dashboard} component={StockListTable} />
            <Redirect to={URLS.dashboard} />
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
