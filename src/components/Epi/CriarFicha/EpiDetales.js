import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import { useFetch } from "services/hook.js/useFetch";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  uwu: {
    margin: 20,
  },
  appBar: {
    margin: 20,
    maxHeight: "50vh",
    width: "100%",
    overflow: "auto",
    transition: theme.transitions.create(["margin", "width", "maxHeight"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(50%)`,
    // marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width", "maxHeight"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  ListItemLoading: {
    height: "50px",
    margin: "5px 15px",
  },
}));

export default function EpiDetales({ handleToggle, checked, value }) {
  const classes = useStyles();
  const { data } = useFetch(`/safety/epi/items?EpiType=${value}`);

  return (
    <Paper
      className={clsx(classes.appBar, {
        [classes.appBarShift]: true,
      })}
      elevation={3}
    >
      {/* <Typography variant="h3"> {} </Typography> */}
      <List>
        {data ? (
          data.map((epiItem, index) => {
            const labelId = `checkbox-list-label-${epiItem.EPIID}`;

            return (
              <ListItem
                key={index}
                role={undefined}
                dense
                button
                onClick={handleToggle(epiItem)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={
                      checked.find((item) => item.EPIID === epiItem.EPIID)
                        ? true
                        : false
                    }
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={epiItem.EPIDESCRICAO}
                  // secondary={epiItem.EPIDESCRICAO}
                />
              </ListItem>
            );
          })
        ) : (
          <>
            <Skeleton className={classes.ListItemLoading} />
            <Skeleton className={classes.ListItemLoading} />
            <Skeleton className={classes.ListItemLoading} />
            <Skeleton className={classes.ListItemLoading} />
          </>
        )}
      </List>
    </Paper>
  );
}
