import {
  GET_STOCK_PRICE_SUCESS,
  GET_STOCK_PRICE_LOADING,
  GET_STOCK_PRICE_ERROR,
} from "../actions";

export const stockPriceReducer = (state = [], action: {type: any; items: {}}) => {
  switch (action.type) {
    case GET_STOCK_PRICE_LOADING:
      return {
        ...state,
        isFetching: true,
        isErrored: false,
      }
    case GET_STOCK_PRICE_SUCESS:
      return {
        ...state,
        items: action.items,
        isFetching: false,
        isErrored: false,
      }
    case GET_STOCK_PRICE_ERROR:
      return {
        ...state,
        items: action.items,
        isFetching: false,
        isErrored: true,
      };
    default:
      return state;
  };
};
