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
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import NestedMenuItem from "material-ui-nested-menu-item";

import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import clsx from "clsx";

import navigation from "./_nav";
import { Typography } from "@material-ui/core";

const drawerWidth = 160;

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
    marginLeft: theme.spacing(2),
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
  labelRoot: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 10,
    borderLeft: `1px dashed ${fade(theme.palette.primary.main, 0.6)}`,
  },
  label: {
    padding: 10,
  },
}))((props) => <TreeItem {...props} />);

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
  const [menuPosition, setMenuPosition] = React.useState(null);
  const renderItems = (nodes) =>
    nodes.map((itemNode) => {
      const { Icon } = itemNode;
      return (
        <StyledTreeItem
          onLabelClick={
            !Array.isArray(itemNode.children)
              ? () => changePage(itemNode.url, 0)
              : null
          }
          key={itemNode.url}
          nodeId={itemNode.url}
          label={
            <div className={classes.labelRoot}>
              {Icon && (
                <Icon
                  color="primary"
                  size="small"
                  className={classes.labelIcon}
                />
              )}
              <Typography className={classes.labelText} variant="body2">
                {itemNode.name}
              </Typography>
            </div>
          }
        >
          {Array.isArray(itemNode.children)
            ? itemNode.children.map((node) => renderTree(node))
            : null}
        </StyledTreeItem>
      );
    });

  const renderTree = (nodes) => (
    <StyledTreeItem
      onLabelClick={
        !Array.isArray(nodes.children) ? () => changePage(nodes.url, 0) : null
      }
      key={nodes.url}
      nodeId={nodes.url}
      label={nodes.name}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  const renderItemsMenu = (nodes) =>
    // nodes.map((itemNode) => {
    // const { Icon } = itemNode;
    !Array.isArray(nodes.children) ? (
      <MenuItem
        onClick={() => {
          setMenuPosition(null);
          changePage(nodes.url, 0);
        }}
      >
        {nodes.name}
      </MenuItem>
    ) : (
      <NestedMenuItem
        label={nodes.name}
        parentMenuOpen={!!menuPosition}
        onClick={handleItemClick}
      >
        {nodes.children.map((node) => renderItemsMenu(node))}
        {/* <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem> */}
        {/* <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem> */}
      </NestedMenuItem>
    );
  // }
  // );

  const handleRightClick = (event, index) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
      index,
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

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
        {open ? (
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMore />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {renderItems(navigation.items)}
          </TreeView>
        ) : (
          <>
            {navigation.items.map((text, index) => (
              <>
                <ListItem
                  onClick={
                    text.children
                      ? (e) => handleRightClick(e, index)
                      : () => changePage(text.url, index)
                  }
                  selected={selectedIndex === index}
                  button
                  key={text.name}
                >
                  <ListItemIcon>
                    {text.Icon && <text.Icon color="primary" size="small" />}
                    {!open && text.children && <ChevronRightIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                  {text.children &&
                    (openColls[index] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                <Menu
                  open={menuPosition && menuPosition.index == index}
                  onClose={() => setMenuPosition(null)}
                  anchorReference="anchorPosition"
                  anchorPosition={menuPosition}
                  className={classes.menuUwU}
                >
                  {renderItemsMenu(text)}
                </Menu>
                {/* {text.children && (
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
              )} */}
              </>
            ))}
          </>
        )}
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
