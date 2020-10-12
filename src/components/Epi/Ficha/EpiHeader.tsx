import React from "react";
import { Card, createStyles, Divider, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";
import GetAppIcon from "@material-ui/icons/GetApp";


import { Guia } from "../ficha";

interface HeaderProps {
  content: Guia;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "20px 20px 10px 20px",
    },
    document: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },
    documentItem: {
      flex: 1,
      marginBottom: "5px",
    },
    paddingHeader: {
      padding: "25px 25px 0px 25px"
    }
  })
);

export default function EpiHeader({ content }: HeaderProps) {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.paddingHeader}>
        <div className={classes.document}>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> CPF </Typography>
            <Typography variant="h6">{content.EpiGuiaHeader.FUNCPF}</Typography>
          </div>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> Nome </Typography>
            <Typography variant="h6"> {content.EpiGuiaHeader.FUNNOME}</Typography>
          </div>
          <div className={classes.documentItem}>
            <Typography variant="subtitle1"> Data Criação </Typography>
            <Typography variant="h6">
              {moment(content.EpiGuiaHeader.FIEDATA).format("DD/MM/yyyy")}
            </Typography>
          </div>
        </div>
      </div>
      <Typography variant="subtitle1" style={{marginLeft: 25}}> <b>Fichas</b> </Typography>
      {/* <Divider /> */}
      {content.EpiGuiaHeader.Files.map((file) => (
        <ListItem button style={{padding: "10px 25px"}}>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary={file.ARQNOME} />
        </ListItem>
      ))}
      <br/>
    </div>
  );
}
