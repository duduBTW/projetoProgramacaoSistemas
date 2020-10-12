import React from "react";
import {
  Paper,
  Typography,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { EstoqueDetailsEditable } from "../CriarFicha/EstoqueInfo";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Form from "components/Form";
import DataShow from "components/Item/DataShow";

// export default function Header({ name, quantidade, quantidadeMin, ca }) {
export default function Header({data}) {
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  return (
      <DataShow 
        schema={[
          [
            {label: "Descrição", content: "EPIDESCRICAO"}
          ], 
          [
            {label: "CA",content: "EPECA"}, 
          ], 
          [
            {label: "Quantidade", content: "EPIQUANTIDADE"},
          ], 
          [
            {label: "Quantidade Minima", content: "EPIQUANTIDADEMIN"},
          ]]
        } 
        data={data}
      />
      );
     
}
//<AlertDialogType open={open} setOpen={setOpen} setOpenAdd={setOpenAdd} /> 
//<AlertDialogSlide open={openAdd} setOpen={setOpenAdd} /> 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide({ open, setOpen }) {
  const [value, setValue] = React.useState(0);

  const handleClose = () => {
    setValue(0);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {open === 2 ? "Remover Estoque" : "Adicionar Estoque"}
        </DialogTitle>

        <DialogContent style={{ margin: 10 }}>
          <IconButton
            onClick={() => {
              setValue((val) => val - 1);
            }}
            color="primary"
            style={{ margin: "0px 10px" }}
            disabled={value <= 0}
          >
            <RemoveIcon />
          </IconButton>
          <TextField
            id="outlined-basic"
            value={value}
            label="Quantidade"
            variant="outlined"
          />
          <IconButton
            onClick={() => {
              setValue((val) => val + 1);
            }}
            color="primary"
            style={{ margin: "0px 10px" }}
          >
            <AddIcon />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function AlertDialogType({ open, setOpen, setOpenAdd }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <List>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              setOpenAdd(1);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Adicionar ao estoque" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              setOpenAdd(2);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <RemoveIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Remover do estoque" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
export function AlertDialogTime({ open, setOpen, setOpenAdd }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Selecionar Data</DialogTitle>
        <DialogContent>
          <Form
            style={{ padding: 0, margin: 0 }}
            schema={[
              { date: true, lg: 12, label: "Data Inicio", name: "dateInicio" },
            ]}
            buttons={
              <DialogActions style={{ paddingRight: 0, paddingTop: 20 }}>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  Editar
                </Button>
              </DialogActions>
            }
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
