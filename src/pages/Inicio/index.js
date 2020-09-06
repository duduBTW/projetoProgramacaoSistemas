import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import GetAppIcon from "@material-ui/icons/GetApp";

import { Box } from "@material-ui/core";
const Loading = require("../../assets/Loading EPI.gif");

export default function Inicio() {
  return (
    <Paper style={{ background: "#134B7B" }}>
      {/* <video type="video/mp4" style={{ height: 400 }} src={Loading} /> */}
      <center>
        <img style={{ height: 400 }} src={Loading} />
        <Typography style={{ color: "white", padding: 15 }} variant="h3">
          Gerando ficha
        </Typography>
      </center>
    </Paper>
  );
}
