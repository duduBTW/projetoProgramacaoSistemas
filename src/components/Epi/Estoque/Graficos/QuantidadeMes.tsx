import { Typography } from '@material-ui/core';
import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

import { useFetch } from 'services/hook.js/useFetch'

export default function QuantidadeMes({id}: {id: string}) {
  const { data } = useFetch(`/safety/epi/graph/quantity?id=${id}`)

  return (
    // @ts-ignore
    <center>
      <br />
      <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="MES"  />
          <YAxis label={{ value: 'Quantidade', angle: -90, position: 'insideLeft' }}  />
          <Tooltip />
          <Bar name="Quantidade" dataKey="TOTALCOUNT" fill="#8884d8" />
          {/* <ReferenceLine y={min} stroke="red" label="Quantidade Minima" /> */}
          {/* <Line dataKey="min"  dot={false} stroke="#c90000" /> */}
        </BarChart>
    {/* @ts-ignore */}
    </center>
  )
}
