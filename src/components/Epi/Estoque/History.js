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
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function History() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <center>
        {" "}
        <Typography variant="overline">Historico</Typography>{" "}
      </center>

      {/* Add */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            10/10/2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AddIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1">
              10
            </Typography>
            {/* <Typography>Because it&apos;s awesome!</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* Remove */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            10/10/2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            11:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="danger"
            style={{ color: "red" }}
            variant="outlined"
          >
            <RemoveIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1">
              5
            </Typography>
            {/* <Typography>Because you need rest</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* Remove */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            10/10/2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            11:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="danger"
            style={{ color: "red" }}
            variant="outlined"
          >
            <RemoveIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1">
              5
            </Typography>
            {/* <Typography>Because you need rest</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            10/10/2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AddIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h6" component="h1">
              10
            </Typography>
            {/* <Typography>Because it&apos;s awesome!</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
