import {combineReducers} from "redux";
import {stockListReducer} from "./common";

export const rootReducer = combineReducers({
  stockList: stockListReducer
});
