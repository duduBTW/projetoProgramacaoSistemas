import { Typography } from '@material-ui/core'
import React from 'react'
import CardDet from '../CardDet'
import { EpiGuiaDetalhes } from '../ficha'

export default function EpiDEtails({detalhes}: {detalhes: EpiGuiaDetalhes[]}) {
  return <div>
  <Typography variant="h5" style={{margin: "25px 25px 0px 25px"}}> <b>EPI's</b> </Typography>
  {detalhes.map((item, index) => <div style={{margin: "15px 25px 0px 25px"}}><CardDet key={index} detalhes={item} /></div>)}
  </div>
}
