import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@material-ui/core";
import clsx from "clsx";
import Form from "components/Form";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
  alinhar: {
    padding: 10,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
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
}));

export default function History({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("alternate");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Timeline align={value}>
      {/* <div className={classes.root}>
        <Accordion style={{ margin: 15 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>Filtros</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Clique para ver mais detalhes
              </Typography>
            </div>
          </AccordionSummary>
          <div style={{ padding: "0px 15px 10px 15px" }}>
            <div style={{ marginBottom: 20 }}>
              <Form
                schema={[
                  {
                    date: true,
                    name: "startDate",
                    label: "Data inicial",
                    lg: 6,
                  },
                  { date: true, name: "endDate", label: "Data final", lg: 6 },
                ]}
              />
            </div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Alinhar</FormLabel>
              <RadioGroup
                aria-label="Alinhar"
                name="Alinhar"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label="Direita"
                />
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label="Esquerda"
                />
                <FormControlLabel
                  value="alternate"
                  control={<Radio />}
                  label="Alternar"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Accordion>
      </div> */}
      <center>
        <Typography variant="overline">Historico</Typography>{" "}
      </center>

      {data.map((item) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent style={{ paddingTop: 10 }}>
              <Typography variant="body2" color="textPrimary">
                {moment(item.EPEHDATE).format("DD/MM/YYYY")}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {moment(item.EPEHDATE).format("HH:mm")}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {item.EPEHTYPE == 2 ? (
                <TimelineDot
                  color="danger"
                  style={{ color: "red" }}
                  variant="outlined"
                >
                  <RemoveIcon />
                </TimelineDot>
              ) : (
                <TimelineDot color="primary">
                  <AddIcon />
                </TimelineDot>
              )}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={1} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {item.EPEHQUANT}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
