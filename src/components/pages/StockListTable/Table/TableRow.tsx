import React from 'react';
import {DoubleRightOutlined} from '@ant-design/icons';
import moment from 'moment';
import {useHistory} from 'react-router';
import {IStockList} from '../../../../Interfaces/ICommon';
import {URLS} from '../../../../utils/constants/Urls';

interface IProps {
  item: IStockList;
  fetchPrice: (stock: string) => void;
}

export const TableRow = ({item, fetchPrice}: IProps) => {
  const history = useHistory();

  const handleRouteToChart = async () => {
    await fetchPrice(item.SECID);
    history.push(URLS.stockChart);
  }

  return (
    <tr onClick={() => handleRouteToChart()}>
      <td>{item.SECID}</td>
      <td>{item.bottom_predict}</td>
      <td>{item.top_predict}</td>
      <td>{moment(item.TRADEDATE).format("YYYY-MM-DD")}</td>
      <td><DoubleRightOutlined /></td>
    </tr>
  )
}