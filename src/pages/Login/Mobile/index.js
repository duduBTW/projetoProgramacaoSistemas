import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { instance } from "services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Mobile() {
  const classes = useStyles();
  const [code, setCode] = React.useState(null);

  React.useEffect(() => {
    instance
      .get("/auth/mobile")
      .then((response) => {
        setCode(response.data);
      })
      .catch(() => {});
  }, [setCode]);

  return (
    <div className={classes.root}>
      <Paper>
        {code ? (
          <img
            src={`https://chart.apis.google.com/chart?cht=qr&chld=0|0&chs=500x500&chl=${code}`}
            alt=""
          />
        ) : (
          <h1>Carregando...</h1>
        )}
      </Paper>
    </div>
  );
}
