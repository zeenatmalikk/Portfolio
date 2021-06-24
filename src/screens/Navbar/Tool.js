import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import { Button, } from "@material-ui/core";

const styles = (theme) => ({
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    margin: theme.spacing(2),
    color:'#000',
    fontWeight:'bold',
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logo: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: 32,
    fontFamily: "Times New Roman Times serif",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 15),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logotxt:{
    color:'#000',
    fontWeight:'bold',
    // fontSize:'29px'
  },
   menu:{
    color:'#000',
    display:'flex',
    justifyContent:'space-between'
  }
});

const Tool = (props) => {
  console.log("toolbars", props);
  const { classes } = props;
  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: "#fff" }} position="static">
        <Toolbar>
        
          <div>
        <div style={{display:'flex',}}>
          <div className={classes.logotxt}>
            Butex
          </div>
          <div className={classes.menu}>
            <Typography variant='h5'>
              Home
            </Typography>
            <Typography variant='h5'>
              About
            </Typography>
            <Typography variant='h5'>
              Services
            </Typography>
            <Typography variant='h5'>
              Blog
            </Typography>
          </div>
<Button variant='contained'>
  HIRE ME
</Button>
        </div>
            <IconButton
              edge="start"
              className={classes.sectionMobile}
              color="inherit"
              aria-label="open drawer"
              onClick={props.openDrawerHandler}
            >
              <MenuIcon style={{color:"#000"}}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Tool);