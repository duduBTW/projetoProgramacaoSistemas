import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import GetAppIcon from "@material-ui/icons/GetApp";

import Axios from "axios";

import { instance } from "../../../services/api";

export default function Sucesso({ epis }) {
  const [complete, setComplete] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    console.log("aaaaaaaaaaa", epis);
    instance
      .post("/safety/epi/PostStock", epis.items)
      .then((response) => {
        setLoading(false);
        setComplete(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper style={{ padding: 20, margin: 30 }}>
      {loading ? (
        <>
          <center>
            <Typography variant="h2">Gerando Guia</Typography>
          </center>
          <br />
          <center>
            {" "}
            <CircularProgress />
          </center>
        </>
      ) : (
          <>
            {" "}
            <center>
              <Typography variant="h2">Ficha gerada com sucesso</Typography>
            </center>
            <center>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {}}
              >
                Baixar
            </Button>
            </center>
          </>
        )}
    </Paper>
  );
}
