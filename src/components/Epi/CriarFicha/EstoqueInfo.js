import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  column: {
    flexBasis: "33.33%",
  },
  columnMetade: {
    flexBasis: "50%",
    padding: 20,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
  paper: {
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
}));

export default function EstoqueInfo({ info }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Estoque</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Clique para ver mais detalhes
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={clsx(classes.columnMetade)}>
            <center>
              <Typography color="secondary" variant="h3">
                {info.quantidade}
              </Typography>
              <Typography variant="subtitle2">Disponível no estoque</Typography>
            </center>
          </div>
          <div className={clsx(classes.columnMetade, classes.helper)}>
            <center>
              <Typography color="primary" variant="h3">
                {info.quantidadeMin}
              </Typography>
              <Typography variant="subtitle2">Estoque Mínimo</Typography>
            </center>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function EstoqueDetails({ info }) {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <div className={clsx(classes.columnMetade)}>
        <center>
          <Typography color="secondary" variant="h3">
            {info.quantidade}
          </Typography>
          <Typography variant="subtitle2">Disponível no estoque</Typography>
        </center>
      </div>
      <div className={clsx(classes.columnMetade, classes.helper)}>
        <center>
          <Typography color="primary" variant="h3">
            {info.quantidadeMin}
          </Typography>
          <Typography variant="subtitle2">Estoque Mínimo</Typography>
        </center>
      </div>
    </div>
  );
}

export function EstoqueDetailsEditable({
  info,
  onQuantidadeClick,
  onQuantidadeMInClick,
}) {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <ButtonBase
        onClick={onQuantidadeClick}
        className={clsx(classes.columnMetade, classes.paper)}
      >
        <div>
          <center>
            <Typography color="secondary" variant="h3">
              {info.quantidade}
            </Typography>
            <Typography variant="subtitle2">Disponível no estoque</Typography>
          </center>
        </div>
      </ButtonBase>
      <ButtonBase
        onClick={onQuantidadeMInClick}
        className={clsx(classes.columnMetade, classes.helper, classes.paper)}
      >
        <div>
          <center>
            <Typography color="primary" variant="h3">
              {info.quantidadeMin}
            </Typography>
            <Typography variant="subtitle2">Estoque Mínimo</Typography>
          </center>
        </div>
      </ButtonBase>
    </div>
  );
}
