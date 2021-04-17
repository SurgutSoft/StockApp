export interface IStockListData {
  isFetching: boolean;
  isErrored: boolean;
  items: IStockList[];
}

export interface IStockList {
  SECID: string;
  TRADEDATE: string;
  bottom_predict: number;
  top_predict: number;
}