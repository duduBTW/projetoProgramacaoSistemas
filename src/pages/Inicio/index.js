import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import GetAppIcon from "@material-ui/icons/GetApp";

import Axios from "axios";

export default function Inicio() {
  return (
    <div>
      <center>
        <Typography variant="h2">Ficha gerada com sucesso</Typography>
      </center>
      <center>
        <Button
          variant="contained"
          size="large"
          startIcon={<GetAppIcon />}
          onClick={() =>
            Axios({
              url: "https://speed.hetzner.de/1GB.bin",
              method: "GET",
              responseType: "blob", // important
            }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "file.zip");
              document.body.appendChild(link);
              link.click();
            })
          }
        >
          Baixar
        </Button>
      </center>
    </div>
  );
}
