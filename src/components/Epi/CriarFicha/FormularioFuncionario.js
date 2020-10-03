import React from "react";
import { Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import { InputMasked } from "../../Input/InputMasked";
import Form from "../../Form";
import Search from "components/Search";
import { instance } from "services/api";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function FormularioFuncionario({ data, buttons, nextDados }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [content, setContent] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const search = (data) => {
    console.log(data);
    instance
      .get(`/safety/epi/GetEmployeeWithEpis?Name=${data.Name}&Cpf=`)
      .then((response) => {
        setContent(response.data);
        console.log("response.data", response.data);
      });
  };

  const itemClick = ({
    Gender,
    Admission,
    Birth,
    Document_Matricula,
    Document_NIT,
    Document_RG,
    Name,
    Document_CPF,
    Id,
  }) => {
    nextDados({
      id: Id,
      cpf: Document_CPF,
      nome: Name,
      rg: Document_RG,
      nis: Document_NIT,
      matricula: Document_Matricula,
      nascimento: Birth,
      admissao: Admission,
      sexo: Gender,
    });
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Novo Funcionário" />
        <Tab label="Funcionário ja Cadastrado" />
      </Tabs>
      <TabPanel value={value} index={0}>
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
            {
              lg: 4,
              name: "sexo",
              label: "Gênero",
              rules: { required: "Campo obrigatório" },
              select: true,
              options: (
                <>
                  <MenuItem key={1} value={1}>
                    Masculino
                  </MenuItem>
                  <MenuItem key={0} value={2}>
                    Feminino
                  </MenuItem>
                </>
              ),
            },
            // {},
          ]}
          buttons={buttons(() => console.log("owo"))}
          onSubmit={nextDados}
          defaultValues={data}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Search
          loading={false}
          search={search}
          content={content}
          crudProps={{ onEditClick: itemClick }}
          // title="Ficha EPI"
          edit={true}
          fieldsContent={[
            { label: "Nome", content: "Name" },
            { label: "CPF", content: "Document_CPF" },
            // { label: "Código", content: "nucleo.NUCCODIGO" },
          ]}
          fieldsFilter={[
            { label: "Teste bla", name: "EPICODIGO" },
            { label: "Tipo", name: "EPITIPO" },
            { label: "Nome", name: "EPINOME" },
          ]}
          fieldsSearchMain={[
            {
              lg: 12,
              name: "Name",
              label: "Nome funcionario",
              variant: "standard",
            },
          ]}
        />
      </TabPanel>
    </div>

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
