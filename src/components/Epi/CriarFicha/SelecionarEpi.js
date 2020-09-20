import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import AdicionarEpi from "./AdicionarEpi";
import Form from "../../Form";
import ArrayForm from "../../Form/ArrayForm";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { instance } from "../../../services/api";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelecionarEpi({
  buttons,
  nextEpi,
  fields,
  append,
  remove,
  register,
  control,
  errors,
  handleSubmit,
  setValue,
}) {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const [selectedEpis, setSelectedEpis] = React.useState([]);
  const [estoqueInfo, setEstoqueInfo] = React.useState({
    99: "uwu",
  });
  // const { register, control, errors, handleSubmit, setValue } = useForm();
  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "items",
  // });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const addItem = (checked) => {
  // handleClose();
  // append({});
  // console.log("checked", checked);
  // append(checked);

  // setSelectedEpis([...selectedEpis, ...checked]);
  // };

  const epiAutocomplete = (ca, index) => {
    if (ca)
      instance
        .get(`/safety/epi/epiinformation?EpiCa=${ca}`)
        .then((response) => {
          console.log(response.data)
          setValue(`items[${index}].descricao`, response.data.NomeEquipamento, {
            shouldValidate: true,
          });
          setValue(`items[${index}].vencimento`, response.data.DataValidade, {
            shouldValidate: true,
          });
          setValue(`items[${index}].EPECODIGO`, response.data.epeinfos.EPECODIGO, {
            shouldValidate: true,
          });

          if (response.data.temEstoque) {
            setEstoqueInfo({
              ...estoqueInfo,
              [index]: {
                quantidade: response.data.epeinfos.EPIQUANTIDADE,
                quantidadeMin: response.data.epeinfos.EPIQUANTIDADEMIN,
              },
            });
          } else {
            setEstoqueInfo({
              ...estoqueInfo,
              [index]: null,
            });
          }
        });
  };

  return (
    <div>
      <ArrayForm
        fields={fields}
        register={register}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
        buttons={buttons(() => {})}
        onSubmit={nextEpi}
        estoqueInfo={estoqueInfo}
        schema={[
          {
            lg: 4,
            name: "ca",
            label: "C.A",
            rules: {
              required: "C.A obrigatório",
            },
            onChange: (e, index) => epiAutocomplete(e.target.value, index),
          },
          {
            lg: 2,
            name: "recebimento",
            label: "Data Recebimento",
            rules: {
              required: "Campo obrigatório",
            },
          },
          {
            lg: 2,
            name: "vencimento",
            label: "Validade",
            rules: {
              required: "Campo obrigatório",
            },
          },
          // { blank: true, lg: 2 },
          {
            lg: 2,
            name: "quantidade",
            label: "Quantidade",
            rules: {
              required: "Campo obrigatório",
            },
          },
          {
            lg: 2,
            name: "troca",
            label: "Dias Para Troca",
            rules: {
              required: "Campo obrigatório",
            },
          },
          {
            lg: 12,
            name: "descricao",
            label: "Descrição Equipamento",
            rules: {
              required: "Campo obrigatório",
            },
          },
          {
            hidden: true,
            name: "epiNome",
            value: "EPINOME",
          },
          {
            hidden: true,
            name: "EPIID",
            value: "EPIID",
          },
          {
            hidden: true,
            name: "EPECODIGO",
          },
        ]}
      />
      {/* <Button
        style={{ width: "100%" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Mais Epis
      </Button> */}

      {/* <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Mais EPI's
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>
        <AdicionarEpi
          selectedEpis={selectedEpis}
          setSelectedEpis={setSelectedEpis}
          handleClose={handleClose}
          addItem={addItem}
        />
      </Dialog> */}
    </div>
  );
}
