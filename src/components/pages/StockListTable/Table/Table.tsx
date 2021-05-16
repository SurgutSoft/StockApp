import React from 'react';
import {TableRow} from './TableRow';

import "./Table.module.scss";
import {IStockListData} from '../../../../Interfaces/ICommon';


interface IProps {
  data: IStockListData,
  fetchPrice: (stock: string) => void;
}

const columns = ["НАИМЕНОВАНИЕ", "НИЖНИЙ ПОРОГ", "ВЕРХНИЙ ПОРОГ", "ДАТА", " "]

export const Table = ({data, fetchPrice}: IProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns && columns.map(x => <th key={x}>{x}</th>)}
        </tr>
      </thead>

      <tbody>
        {data.items?.map((item: any) =>
          <TableRow item={item} key={item.SECID} fetchPrice={fetchPrice}/>
        )}
      </tbody>
    </table>
  )
}