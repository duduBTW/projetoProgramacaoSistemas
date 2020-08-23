import React from "react";
import image from "../../assets/backgroundLogin.png";
import logo from "../../assets/ic_main.png";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import Formulario from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    width: "80%",
    height: "80%",
    display: "flex",
  },
  container: {
    height: "100vh",
    minWidth: "100vw",
    backgroundSize: "cover",
    background: `url(${image}) no-repeat center center `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  extraContent: {
    flexBasis: "35%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // border: `2px solid ${theme.palette.divider}`,
    background: "rgb(23, 75, 122, 0.7)",
    margin: "50px 0px 50px 50px",
    borderRadius: "5px 0px 0px 0px",
    position: "relative",
  },
  login: {
    flexBasis: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
}));

export default function Login({ history, setLogged }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <img
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100%",
          minHeight: "100%",
        }}
        src={image}
        alt=""
      /> */}
      <div elevation={7} className={classes.mainCard}>
        <div elevation={2} className={classes.extraContent}>
          {/* <img
            style={{ position: "absolute", top: 20, left: 20 }}
            src={logo}
            alt=""
          /> */}

          <Typography style={{ color: "white" }} variant="h2">
            Bem vindo
          </Typography>
          <br />
          <Typography style={{ color: "white" }} variant="subtitle1">
            Preencha as informações para continuar
          </Typography>
        </div>
        <Paper elevation={7} className={classes.login}>
          <img
            style={{ position: "absolute", top: 24, right: 24 }}
            src={logo}
            alt=""
          />
          <Formulario setLogged={setLogged} history={history} />
        </Paper>
      </div>
    </div>
  );
}
