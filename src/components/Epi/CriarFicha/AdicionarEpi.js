import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Skeleton from "@material-ui/lab/Skeleton";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import { instance } from "../../../services/api";
import { useFetch } from "services/hook.js/useFetch";
import EpiDetales from "./EpiDetales";

const drawerWidth = 300;

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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

const AdicionarEpi = ({
  setSelectedEpis,
  selectedEpis,
  handleClose = () => {},
  addItem,
  buttons,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  // const [epiItems, setEpiItems] = React.useState();
  let epiItems = undefined;

  const { data } = useFetch("/safety/epi/types");
  // const [epiTypes, setEpiTypes] = React.useState(null);
  // React.useEffect(() => {
  //   instance.get("/safety/epi/types").then((response) => {
  //     console.log("response.data", response.data);
  //     setEpiTypes(response.data);
  //   });
  // }, []);

  const handleToggle = (value) => () => {
    if (checked.find((item) => item === value)) {
      const newItem = checked.filter((item) => item !== value);
      setChecked(newItem);
    } else {
      setChecked([...checked, value]);
    }
  };

  const handleDrawer = (value) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // epiItems = useFetch(`/safety/epi/types?EpiType=${value}`).data;
    setOpen(value);
    // instance
    //   .get("/safety/epi/items", {
    //     params: {
    //       EpiType: value,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("response.data", response.data);
    //     setEpiItems(response.data);
    //     setOpen(value);
    //   });
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Paper
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          elevation={3}
        >
          {data ? (
            <List>
              {data.map((epiType, index) => (
                <div key={index}>
                  <ListItem
                    selected={epiType.EPITIPO === open}
                    onClick={() => handleDrawer(epiType.EPITIPO)}
                    button
                  >
                    <ListItemText
                      primary={epiType.EPITIPO}
                      // secondary={epiType.EPITIPO}
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          ) : (
            <div>
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
              <Skeleton className={classes.ListItemLoading} />
            </div>
          )}
        </Paper>
        {open && (
          <EpiDetales
            value={open}
            checked={checked}
            handleToggle={handleToggle}
          />
        )}
        {/* {open && (
          <Paper
            className={clsx(classes.appBar, {
              [classes.appBarShift]: !open,
            })}
            elevation={3}
          >
            <List>
              {epiItems.map((epiItem, index) => {
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
                    />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        )} */}
      </div>

      <Paper className={classes.uwu} elevation={3}>
        <Grid
          style={{ padding: "20px 20px 10px 20px" }}
          container
          direction="row"
          alignItems="center"
        >
          <PlaylistAddCheckIcon fontSize="small" />
          <Typography style={{ margin: "0px 10px", padding: 0 }} variant="h6">
            EPI's selecionados
          </Typography>
        </Grid>
        {checked.length ? (
          checked.map((value) => {
            const labelId = `checkbox-list-label-${value.EPIID}`;

            return (
              <ListItem
                key={value.EPIID}
                role={undefined}
                dense
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={
                      checked.find((item) => item.EPIID === value.EPIID)
                        ? true
                        : false
                    }
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.EPIDESCRICAO} />
              </ListItem>
            );
          })
        ) : (
          <div style={{ padding: 20 }}>
            <Typography variant="h5">Nenhum Epi Selecionado</Typography>
          </div>
        )}
      </Paper>

      {checked.length && !buttons ? (
        <Button
          style={{ width: "100%" }}
          variant="contained"
          size="large"
          color="primary"
          onClick={() => addItem(checked)}
        >
          Adicionar
        </Button>
      ) : checked.length && buttons ? (
        buttons(() => addItem(checked))
      ) : null}
    </>
  );
};

export default React.memo(AdicionarEpi);
