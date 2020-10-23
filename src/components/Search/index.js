import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Slide, CircularProgress } from "@material-ui/core";
import Lottie from "react-lottie";
import {
  makeStyles,
  Button,
  TextField,
  TablePagination,
  IconButton,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@material-ui/icons/Search";
import DrawerFiltros from "./DrawerFiltros";
import FilterListIcon from "@material-ui/icons/FilterList";
import Form from "../Form";
import Crud from "../Crud";
import loadingProsesmt from "../../assets/loadingProsesmt.json";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    [theme.breakpoints.down(1450)]: {
      width: "100%",
      padding: "10px 10px",
    },
    transition: "0.5s ease-in-out",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: 0,
    margin: 0,
  },
  select: {
    width: "15%",
    padding: 0,
    margin: "0 20px 0 0",
  },
  rootForm: {
    display: "flex",
    contentAlign: "center",
    padding: "20px",
    justifyContent: "space-around",
    width: "80%",
    // flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // margin: 20,
  },
  rootBody: {
    display: "flex",
    contentAlign: "center",
    padding: "20px",
    // justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // margin: 20,
  },
  rootContent: {
    marginTop: 10,
    padding: "0px 20px",
  },
  header: {
    display: "flex",
    // flex: 1,
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
      flexDirection: "column",
    },
    alignItems: "center",
  },
  button: {
    margin: "0px 20px 0px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px 0px 0px",
    },
  },
  buttons: {
    [theme.breakpoints.down("sm")]: {
      margin: "0px 20px 15px 0px",
      flexDirection: "row",
    },
    "& button": {
      margin: "10px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: 300,
    margin: 50,
  },
  fullList: {
    width: "auto",
  },
  tableRow: {
    cursor: "pointer",
  },
  iconButton: {
    marginLeft: 15,
  },
}));

export default function Search({
  classGrid,
  search,
  label,
  name,
  title,
  fieldsFilter,
  fieldsSearchMain,
  fieldsContent,
  loading,
  content,
  edit = false,
  extraButtons,
  crudProps,
}) {
  const classes = useStyles();

  const { register, handleSubmit, control, errors, formState } = useForm();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingProsesmt,
  };

  return (
    <div>
      {/* <div className={classes.root}></div> */}
      <Paper elevation={2}>
        {title && (
          <Typography style={{ padding: "20px 20px 0px 20px" }} variant="h5">
            {title}
          </Typography>
        )}

        <div className={classes.header}>
          <Form
            onSubmit={search}
            classBody={classes.rootBody}
            classForm={classes.rootForm}
            schema={fieldsSearchMain}
            buttons={
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            }
          />
          <div className={classes.buttons}>
            {fieldsFilter && (
              <Button
                startIcon={<FilterListIcon />}
                className={classes.button}
                onClick={toggleDrawer(true)}
                variant="outlined"
                color="primary"
              >
                Filtros
              </Button>
            )}
            {extraButtons}

            {fieldsFilter && (
              <DrawerFiltros
                open={openDrawer}
                onClose={toggleDrawer}
                register={register}
                handleSubmit={handleSubmit}
                search={search}
                errors={errors}
                label="Filtros"
                formState={formState}
                fields={fieldsFilter}
                select={true}
              />
            )}
          </div>
        </div>
      </Paper>
      {/* <div style={{ disply: "flex", overflow: "hidden" }}> */}
      {loading ? (
        <center>
          <br />
          <Lottie options={defaultOptions} height={400} width={400} />
        </center>
      ) : (
        content && (
          <Crud
            {...crudProps}
            edit={edit}
            content={content}
            schema={fieldsContent}
          />
        )
      )}
    </div>
  );
}
