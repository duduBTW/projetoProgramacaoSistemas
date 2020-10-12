import { Paper } from '@material-ui/core'
import ItemContainer from '../../../components/Item/ItemContainer'
import React from 'react'
import { useFetch } from 'services/hook.js/useFetch'
import EpiHeader from './EpiHeader'
import EpiDEtails from './EpiDEtails'
import { Guia } from '../ficha'

export default function ItmeEpi({ match }: { match: any }) {
  const { id }: { id: number } = match.params
  const { data } = useFetch<Guia>(`/safety/epi/GetEpiSingle?id=${id}`)
  console.log('data', data)

  return data ?  <ItemContainer 
  paddingHeader={"0px"} 
  itemContainer={<EpiDEtails detalhes={data.EpiGuiaDetalhesItem} />} 
  itemDetails={<EpiHeader content={data} 
  />} /> : <div>Carregando...</div> 
}
