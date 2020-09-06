import React from "react";
import clsx from "clsx";
import {
  Paper,
  makeStyles,
  Typography,
  Zoom,
  createStyles,
} from "@material-ui/core";
import Formulario from "./LoginForm";
import FormularioRegister from "./FormularioRegister";

const image = require("../../assets/backgroundLogin.png");
const logo = require("../../assets/ic_main.png");
const LoginImg = require("../../assets/Login.gif");

const useStyles = makeStyles((theme) =>
  createStyles({
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
      transition: theme.transitions.create(["flex-basis", "width", "opacity"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    extraContentLeft: {
      flexBasis: "35%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // border: `2px solid ${theme.palette.divider}`,
      background: "rgb(23, 75, 122, 0.7)",
      margin: "50px 50px 50px 0px",
      borderRadius: "0px 5px 5px 0px",
      position: "relative",
      transition: theme.transitions.create(["flex-basis", "width", "opacity"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    extraContentShift: {
      flexBasis: "0%",
      opacity: "0",
      margin: "0px",
      // width: "100px",
      // marginLeft: drawerWidth,
      transition: theme.transitions.create(["flex-basis", "width", "opacity"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    login: {
      flexBasis: "65%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      // maxHeight: "90vh"
      transition: theme.transitions.create(
        ["flex-basis", "width", "maxHeight"],
        {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
      ),
    },
    loginShift: {
      flexBasis: "65%",
      // width: "100px",
      // marginLeft: drawerWidth,
      transition: theme.transitions.create(
        ["flex-basis", "width", "maxHeight"],
        {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      ),
    },
    logo: {
      position: "absolute",
      top: 24,
      right: 24,
      transition: theme.transitions.create(
        ["right", "top", "position", "let"],
        {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      ),
    },
    logoShift: {
      left: 24,
      transition: theme.transitions.create(
        ["right", "top", "position", "let"],
        {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      ),
    },
  })
);

// @ts-ignore
export default function Login({ history, setLogged }) {
  const classes = useStyles();
  const [onRegister, setOnRegister] = React.useState(false);
  const [loginRed, setLoginRed] = React.useState(false);

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
      {loginRed ? (
        <img
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
          src={LoginImg}
        />
      ) : (
        <div className={classes.mainCard}>
          <div
            // elevation={2}
            className={clsx(classes.extraContent, {
              [classes.extraContentShift]: onRegister,
            })}
          >
            {!onRegister && (
              <>
                {" "}
                <Typography style={{ color: "white" }} variant="h2">
                  Login
                </Typography>
                <br />
                <Typography style={{ color: "white" }} variant="subtitle1">
                  Preencha as informações para continuar
                </Typography>{" "}
              </>
            )}
          </div>

          <Paper
            elevation={7}
            className={clsx(classes.login, {
              [classes.loginShift]: onRegister,
            })}
          >
            <img
              className={clsx(classes.logo, {
                [classes.logoShift]: onRegister,
              })}
              src={logo}
              alt=""
            />
            {!onRegister && (
              <Zoom in={!onRegister}>
                <Formulario
                  register={() => setOnRegister(true)}
                  setLogged={setLogged}
                  setLoginRed={setLoginRed}
                  history={history}
                />
              </Zoom>
            )}

            {onRegister && (
              <Zoom in={onRegister}>
                <FormularioRegister login={() => setOnRegister(false)} />
              </Zoom>
            )}
          </Paper>
          <div
            className={clsx(classes.extraContentLeft, {
              [classes.extraContentShift]: !onRegister,
            })}
          >
            {onRegister && (
              <>
                {" "}
                <Typography style={{ color: "white" }} variant="h2">
                  Registro
                </Typography>
                <br />
                <Typography style={{ color: "white" }} variant="subtitle1">
                  Preencha as informações para continuar
                </Typography>{" "}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
