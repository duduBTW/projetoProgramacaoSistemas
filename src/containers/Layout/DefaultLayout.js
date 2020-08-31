import React, { useState } from "react";

import { withRouter, Route, Switch, useHistory } from "react-router-dom";
import routes from "./routes";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import AllInboxIcon from "@material-ui/icons/AllInbox";
import DescriptionIcon from "@material-ui/icons/Description";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SideNav from "./sideNav";

import { useSelector, useDispatch } from "react-redux";
import { Card, LinearProgress, Backdrop } from "@material-ui/core";
import ModalAdicionar from "../../components/Crud/ModalAdicionar";
import EstoqueAdicionar from "../../components/Epi/Estoque/EstoqueAdicionar";
import CriarFicha from "../../pages/Epi/CriarFicha";
// import { getOpen } from "../../services/LayoutStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 50,
    background: `linear-gradient(90deg, ${theme.palette.primary} 0%, ${theme.palette.secondary} 41%)`,
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: 50,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    height: 50,
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  noMaxWidth: {
    maxWidth: "none",
  },
  tooltip: {
    marginTop: "-.01rem",
    fontSize: "1.5rem",
    color: "red",
  },
}));

function DefaultLayout({ user, history, total, totalBaixado, downloadinOn }) {
  const classes = useStyles();
  // const history = useHistory();
  // const [open, setOpen] = useState(getOpen());
  const [open, setOpen] = useState(true);

  const [helperOpen, setHelperOpen] = useState(false);
  const [estoqueOpen, setEstoqueOpen] = useState(false);
  const [fichaOpen, setFichaOpen] = useState(false);

  const [resized, setResized] = useState(true);
  const [showSideNav, setShowSideNav] = useState(true);
  const [auth, setAuth] = useState(false);
  const [openColls, setOpenColls] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState([]);
  const downloading = useSelector((state) => state.downloadsList);
  const dispatch = useDispatch();

  const actions = [
    {
      icon: <AllInboxIcon />,
      name: "Estoque",
      onClick: () => setEstoqueOpen((estO) => !estO),
    },
    {
      icon: <DescriptionIcon />,
      name: "Ficha",
      onClick: () => setFichaOpen((fichaO) => !fichaO),
    },
  ];

  // const addDownload = () => {
  //   console.log("uwu");
  //   dispatch({ type: "ADD_DOWNLOAD", downloadData: { title: "uwu" } });
  // };

  const matches = useMediaQuery((theme) => theme.breakpoints.down(1150));

  if (matches && open && resized) {
    setOpen(false);
  } else if (!matches && !resized) {
    setResized(true);
  }

  const handleDrawerOpen = () => {
    if (matches) {
      setResized(false);
    }
    localStorage.setItem("open", "true");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    localStorage.setItem("open", "false");
    setOpen(false);
  };

  const handleClick = (event, index) => {
    if (openColls[index]) {
      setAnchorEl({ [index]: null });
    } else {
      setAnchorEl({ [index]: event.currentTarget });
    }
    if (index) setOpenColls({ [index]: !openColls[index] });
  };

  const changePage = (url, index) => {
    setSelectedIndex(index);
    history.push(url);
  };

  const handleMenuClose = (index) => {
    setAnchorEl({ [index]: null });
    setOpenColls({ [index]: false });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {console.log(open)}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setShowSideNav(!showSideNav)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ProSESMT
          </Typography>
        </Toolbar>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        )}
      </AppBar>
      {showSideNav && (
        <SideNav
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleClick={handleClick}
          handleDrawerClose={handleDrawerClose}
          selectedIndex={selectedIndex}
          openColls={openColls}
          changePage={changePage}
          handleMenuClose={handleMenuClose}
          anchorEl={anchorEl}
          auth={auth}
        />
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} user={user} />}
                />
              )
            );
          })}

          {/* <Redirect from="/" to="/dashboard" /> */}
        </Switch>
        {downloading.length
          ? downloading.map((item) => <h1>{item.title}</h1>)
          : null}
        {downloadinOn && (
          <div style={{ position: "fixed", bottom: 40, right: 40 }}>
            <Card style={{ padding: 20, width: 200 }}>
              <div>Baixando: </div>
              <br />
              <LinearProgress
                variant="determinate"
                value={Math.round((Number(totalBaixado) / Number(total)) * 100)}
              />{" "}
            </Card>
          </div>
        )}
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          // hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={() => setHelperOpen(false)}
          onOpen={() => setHelperOpen(true)}
          open={helperOpen}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              TooltipClasses={classes}
              onClick={() => {
                action.onClick();
                setHelperOpen(false);
              }}
            />
          ))}
        </SpeedDial>
        {/* <button type="button" onClick={addDownload}>
          Adicionar teste 
        </button> */}
      </main>
      <ModalAdicionar
        fullScreen
        cancelar={() => setEstoqueOpen(false)}
        openModal={estoqueOpen}
        title="Adicionar Estoque"
      >
        {(buttons) => {
          return (
            <>
              <EstoqueAdicionar />
            </>
          );
        }}
      </ModalAdicionar>
      <ModalAdicionar
        fullScreen
        cancelar={() => setFichaOpen(false)}
        openModal={fichaOpen}
        title="Criar Ficha"
      >
        {(buttons) => {
          return (
            <>
              <CriarFicha />
            </>
          );
        }}
      </ModalAdicionar>
    </div>
  );
}

export default DefaultLayout;
