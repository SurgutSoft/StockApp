import {applyMiddleware, compose, createStore} from "redux";
import reduxThunk from "redux-thunk";
import {rootReducer} from "./reducers";

const middleware = [reduxThunk];
const composeEnhancers = compose;

export const defaultState = {}


export const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(...middleware))
);
