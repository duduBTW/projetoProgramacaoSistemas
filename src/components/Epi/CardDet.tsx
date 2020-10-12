import { Card, Typography } from '@material-ui/core'
import React from 'react'
import { EpiGuiaDetalhes } from './ficha'
import { makeStyles } from "@material-ui/core/styles";

interface cardDetProps {detalhes: EpiGuiaDetalhes}

const useStyles = makeStyles((theme) => ({
  document: {
    display: "flex",
    flexDirection: "row",
    margin: "0px 10px",
  },
  documentItem: {
    flex: 1,
    marginBottom: "5px",
  },
  card: {
    padding: "10px 10px 0px 10px",
    margin: "0px 0px 20px 0px",
    position: "relative",
  },
}));

export default function CardDet({detalhes}: cardDetProps) {
  const classes = useStyles();

  return <Card className={classes.card}>
      {" "}
      <div className={classes.document}>
        <div className={classes.documentItem}>
          <Typography variant="subtitle1"> Nome </Typography>
          <Typography variant="h6">
            {" "}
            {detalhes.EPINOME}
          </Typography>
        </div>
        <div className={classes.documentItem}>
          <Typography variant="subtitle1"> C.A </Typography>
          <Typography variant="h6">
            {" "}
            {detalhes.FIECA}
          </Typography>
        </div>
      </div>
      <div className={classes.document}>
        <div className={classes.documentItem}>
          <Typography variant="subtitle1">
            {" "}
            Quantidade{" "}
          </Typography>
          <Typography variant="h6">
            {detalhes.FIEQUANTIDADE}
          </Typography>
        </div>
        <div className={classes.documentItem}>
          <Typography variant="subtitle1"> Troca</Typography>
          <Typography variant="h6">
            {detalhes.FIETROCA}
          </Typography>
        </div>
      </div>
    </Card>
}
