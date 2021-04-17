import {GET_STOCK_LIST_SUCESS, GET_STOCK_LIST_LOADING, GET_STOCK_LIST_ERROR} from "../actions";

export const stockListReducer = (state = [], action: {type: any; items: {}}) => {
  switch (action.type) {
    case GET_STOCK_LIST_LOADING:
      return {
        ...state,
        isFetching: true,
        isErrored: false,
      }
    case GET_STOCK_LIST_SUCESS:
      return {
        ...state,
        items: action.items,
        isFetching: false,
        isErrored: false,
      }
    case GET_STOCK_LIST_ERROR:
      return {
        ...state,
        items: action.items,
        isFetching: false,
        isErrored: true,
      };
    default:
      return state;
  }
};
