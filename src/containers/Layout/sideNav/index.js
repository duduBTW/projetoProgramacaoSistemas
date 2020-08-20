import Drawer from "@material-ui/core/Drawer";
import React from "react";

import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

import navigation from "./_nav";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  },
  menuButton: {
    marginRight: 36,
  },
  menuUwU: {
    marginLeft: theme.spacing(7),
  },
  sideNavClose: {
    marginRight: 5,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
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
  toolbarRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 0,
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
}));

function SideNav({
  open,
  handleDrawerOpen,
  handleClick,
  handleDrawerClose,
  selectedIndex,
  openColls,
  changePage,
  handleMenuClose,
  anchorEl,
  auth,
}) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <List
      // subheader={
      //   <ListSubheader
      //     className={clsx(classes.menuButton, {
      //       [classes.hide]: !open,
      //     })}
      //     component="div"
      //     id="nested-list-subheader"
      //   >
      //     {navigation.title}
      //   </ListSubheader>
      // }
      >
        <div className={classes.toolbarRight}>
          <IconButton
            className={clsx(classes.sideNavClose, {
              [classes.hide]: open,
            })}
            onClick={handleDrawerOpen}
          >
            <ChevronRightIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.sideNavClose, {
              [classes.hide]: !open,
            })}
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {navigation.items.map((text, index) => (
          <>
            <ListItem
              onClick={
                text.children
                  ? (e) => handleClick(e, index)
                  : () => changePage(text.url, index)
              }
              selected={selectedIndex === index}
              button
              key={text.name}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                {!open && text.children && <ChevronRightIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
              {text.children &&
                (openColls[index] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {open
              ? text.children && (
                  <>
                    <Collapse
                      in={openColls[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {text.children.map((subItem) => (
                          <ListItem
                            onClick={() =>
                              changePage(text.url + subItem.url, index)
                            }
                            button
                            className={classes.nested}
                          >
                            <ListItemText primary={subItem.name} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                )
              : text.children && (
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl[index]}
                    keepMounted
                    open={Boolean(anchorEl[index])}
                    onClose={() => handleMenuClose(index)}
                    className={classes.menuUwU}
                  >
                    {text.children.map((subItem) => (
                      <MenuItem
                        onClick={() => {
                          handleMenuClose(index);
                          changePage(text.url + subItem.url, index);
                        }}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
          </>
        ))}
      </List>
      {auth && (
        <>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Drawer>
  );
}

export default React.memo(SideNav);
