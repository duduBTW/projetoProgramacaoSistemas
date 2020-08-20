import React from "react";
import { Typography, Grid, Paper, TextField } from "@material-ui/core";

export default function ConfirmarDados({ data, buttons, epis }) {
  console.log("epis", epis);
  return (
    <div>
      <Grid style={{ padding: "20px 0px" }} container spacing={3}>
        <Row label="CPF" value={data.cpf} />
        <Row label="Nome do Funcionário" value={data.nome} />
        <Row label="RG" value={data.rg} />
        <Row label="EPI's" value="" />
        {epis.map((epi) => (
          <Row label="C.A" value={epi.ca} />
        ))}
      </Grid>
      {buttons()}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <>
      <Grid item xs={12} sm={2} lg={2}>
        <b>{label}</b>
      </Grid>
      <Grid item xs={12} sm={2} lg={10}>
        <div>{value}</div>
      </Grid>
    </>
  );
}
