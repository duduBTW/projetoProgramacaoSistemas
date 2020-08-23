import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import FormBody from "./FormBody";
import EstoqueInfo from "../Epi/CriarFicha/EstoqueInfo";

export default function ArrayForm({
  schema,
  fields,
  register,
  errors,
  control,
  handleSubmit,
  buttons,
  onSubmit,
  estoqueInfo,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        console.log("item", item);
        item.EPECODIGO = 0;
        return (
          <Paper
            elevation={4}
            style={{ padding: "30px 20px", margin: "20px 0px", width: "100%" }}
          >
            {item.EPIDESCRICAO && (
              <Grid
                style={{ padding: "0px 0px 15px 0px" }}
                container
                direction="row"
                alignItems="center"
              >
                <Typography style={{ padding: 0 }} variant="h5">
                  {item.EPIDESCRICAO}
                </Typography>
              </Grid>
            )}
            <Grid container spacing={3}>
              <FormBody
                index={index}
                key={item.id}
                schema={schema}
                register={register}
                control={control}
                errors={errors}
                customValue={item}
              />
            </Grid>
            <br />
            {console.log(`estoqueInfo[${index}]`, estoqueInfo[index])}
            {console.log(`estoqueInfo[${index}]`, estoqueInfo)}
            {estoqueInfo[index] && <EstoqueInfo info={estoqueInfo[index]} />}
          </Paper>
        );
      })}
      {/* <button type="submit">Enviar</button> */}
      {buttons}
    </form>
  );
}
