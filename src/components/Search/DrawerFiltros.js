import {
  makeStyles,
  Button,
  TextField,
  Drawer,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import React from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    padding: 0,
    margin: "15px 0px",
  },
  buttonSearch: {
    width: "100%",
    // padding: 0,
    margin: "5px 0px",
  },
  list: {
    width: 300,
    margin: "80px 40px",
  },
  fullList: {
    width: "auto",
  },
}));

export default function DrawerFiltros({
  open,
  onClose,
  register,
  handleSubmit,
  search,
  label = "Filtros",
  fields,
  errors,
  formState,
}) {
  const { isValid } = formState;
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={onClose(false)}>
      <form
        className={classes.list}
        role="presentation"
        onSubmit={handleSubmit(search)}
      >
        <Typography variant="h6">{label}</Typography>
        {fields.map((field) => (
          <TextField
            className={classes.input}
            variant="outlined"
            label={field.label}
            name={field.name}
            inputRef={register(field.configuration)}
            error={errors[field.name]}
            helperText={
              errors[field.name] && <span>{errors[field.name].message}</span>
            }
          />
        ))}
        <Button
          className={classes.buttonSearch}
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          onClick={isValid && onClose(false)}
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </form>
    </Drawer>
  );
}