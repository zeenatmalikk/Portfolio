import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerComp = (props) => {
  const { classes } = props;

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <List>
        {["AboutMFP", "Services", "Promotions", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Policy", "Help", "About us"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer
      anchor="right"
      open={props.left}
      onClose={props.toggleDrawerHandler}
    >
      {sideList("left")}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComp);