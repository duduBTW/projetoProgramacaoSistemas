import { Typography } from '@material-ui/core';
import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default function QuantidadeTodal({ data }: {data: any}) {
  return (
    //@ts-ignore
    <center>
      <br/>
      <LineChart
        width={750}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="EPEHDATE"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Quantidade" type="monotone" dataKey="EPEHQUANT" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      {/* @ts-ignore */}
    </center>
  )
}
