import React from "react";
import { Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, TextField } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import { InputMasked } from "../../Input/InputMasked";
import Form from "../../Form";

const useStyles = makeStyles((theme) => ({
  gridConteiner: {
    padding: "0px 0px 0px 0px",
  },
  formItem: {
    // padding: 20,
    margin: "20px 0px ",
    position: "relative",
  },
  paper: {
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

export default function FormularioFuncionario({ data, buttons, nextDados }) {
  const classes = useStyles();

  return (
    <Form
      schema={[
        {
          lg: 4,
          name: "cpf",
          label: "CPF",
          masked: true,
          mask: "999.999.999-99",
          rules: { required: "Campo obrigatório" },
        },
        {
          lg: 8,
          name: "nome",
          label: "Nome do Funcionário",
          rules: { required: "Campo obrigatório" },
        },
        {
          lg: 4,
          name: "rg",
          label: "RG",
          rules: { required: "Campo obrigatório" },
        },
        {
          lg: 4,
          name: "nis",
          label: "NIS",
        },
        {
          lg: 4,
          name: "matricula",
          label: "Matricula",
        },
        {
          lg: 4,
          name: "nascimento",
          label: "Data de nascimento",
          rules: { required: "Campo obrigatório" },
          date: true,
          // masked: true,
          // mask: "99/99/9999",
        },
        {
          lg: 4,
          name: "admissao",
          label: "Data de admissao",
          rules: { required: "Campo obrigatório" },
          date: true,
        },
        // {},
      ]}
      buttons={buttons(() => console.log("owo"))}
      onSubmit={nextDados}
      defaultValues={data}
    />
    // <>
    //   <form
    //     noValidate
    //     onSubmit={handleSubmit(nextDados)}
    //     className={classes.formItem}
    //   >
    //     <Grid container spacing={3} className={classes.gridConteiner}>
    //       {/* <Grid item xs={12} sm={12} lg={12}>

    //     </Grid> */}
    //       <Grid item xs={12} sm={2} lg={4}>
    //         {/* <TextField
    //           inputRef={register()}
    //           className={classes.paper}
    //           name="cpf"
    //           id="filled-basic"
    //           type="text"
    //           label="CPF"
    //           variant="outlined"
    //         /> */}
    //         <InputMasked
    //           classStyle={classes.paper}
    //           name="cpf"
    //           label="CPF"
    //           errors={errors.cpf}
    //           control={control}
    //           mask="999.999.999-99"
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={2} lg={8}>
    //         <TextField
    //           inputRef={register()}
    //           className={classes.paper}
    //           name="nome"
    //           id="filled-basic"
    //           type="text"
    //           label="Nome do Funcionário"
    //           variant="outlined"
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={2} lg={4}>
    //         <TextField
    //           inputRef={register()}
    //           className={classes.paper}
    //           name="rg"
    //           id="filled-basic"
    //           type="text"
    //           label="RG"
    //           variant="outlined"
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={2} lg={4}>
    //         <TextField
    //           inputRef={register()}
    //           className={classes.paper}
    //           name="nis"
    //           id="filled-basic"
    //           type="text"
    //           label="NIS"
    //           variant="outlined"
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={2} lg={4}>
    //         <TextField
    //           inputRef={register()}
    //           className={classes.paper}
    //           name="matricula"
    //           id="filled-basic"
    //           type="text"
    //           label="Matricula"
    //           variant="outlined"
    //         />
    //       </Grid>
    //     </Grid>
    //     {buttons(() => console.log("owo"))}
    //   </form>
    // </>
  );
}
