import {combineReducers} from "redux";
import {stockListReducer} from "./stockList";
import {stockPriceReducer} from "./stockPrice";

export const rootReducer = combineReducers({
  stockList: stockListReducer,
  stockPrice: stockPriceReducer,
});
