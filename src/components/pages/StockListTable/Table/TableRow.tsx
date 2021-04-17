import React from 'react';
import {IStockList} from '../../../../Interfaces/ICommon';


interface IProps {
  item: IStockList;
}

export const TableRow = ({item}: IProps) => {
  return (
    <tr>
      <td>{item.SECID}</td>
      <td>{item.bottom_predict}</td>
      <td>{item.top_predict}</td>
      <td>{item.TRADEDATE}</td>
    </tr>
  )
}