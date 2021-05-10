import api from "../../utils/api";

export const GET_STOCK_LIST_SUCESS = "GET_STOCK_LIST_SUCESS";
export const GET_STOCK_LIST_ERROR = "GET_STOCK_LIST_ERROR";
export const GET_STOCK_LIST_LOADING = "GET_STOCK_LIST_LOADING";

export const GET_STOCK_PRICE_SUCESS = "GET_STOCK_PRICE_SUCESS";
export const GET_STOCK_PRICE_ERROR = "GET_STOCK_PRICE_ERROR";
export const GET_STOCK_PRICE_LOADING = "GET_STOCK_PRICE_LOADING";


export const fetchErrored = (type: any) => {
  return {
    type,
    hasErrored: true
  };
};

export const fetchSuccess = (type: any, items: any) => {
  return {
    type,
    items
  };
};

const fetchItems = (path: string, success: string, error: string, loading: string, method?: string, body?: any) => {
  return async (dispatch: any) => {
    loading && dispatch({type: loading});

    try {
      const data = await api({
        method: method || "GET",
        url: path,
      });
      dispatch(fetchSuccess(success, data));
    } catch {
      dispatch(fetchErrored(error))
    }
  }
};

export const fetchStocksList = () => {
  return fetchItems(
    "/stock_predict/api/get_list",
    GET_STOCK_LIST_SUCESS,
    GET_STOCK_LIST_ERROR,
    GET_STOCK_LIST_LOADING
  );
};

export const fetchPrice = (stock: string) => {
  return fetchItems(
    `/stock_predict/api/get_price/SBER`,
    GET_STOCK_PRICE_SUCESS,
    GET_STOCK_PRICE_ERROR,
    GET_STOCK_PRICE_LOADING
  );
};
