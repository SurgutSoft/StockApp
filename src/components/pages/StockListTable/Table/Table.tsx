import React from 'react';
import {TableRow} from './TableRow';

import "./Table.module.scss";
import {IStockListData} from '../../../../Interfaces/ICommon';


interface IProps {
  data: IStockListData,
}

const columns = ["Наименование", "нижний порог", "верхний порог", "на дату"]

export const Table = ({data}: IProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns && columns.map(x => <th key={x}>{x}</th>)}
        </tr>
      </thead>

      <tbody>
        {data.items?.map((item: any) =>
          <TableRow item={item} key={item.SECID}/>
        )}
      </tbody>
    </table>
  )
}