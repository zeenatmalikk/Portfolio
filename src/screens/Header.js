import React from "react";
import { Container, Grid, Button, makeStyles } from "@material-ui/core";
import "./header.css";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import { ArrowForward } from "@material-ui/icons";
const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 20,
    fontWeight:'bold',
    "&:hover":{
        backgroundColor:'#000',
        color:'#fff',
        transition:'0.4s ease-in-out'
    }
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: "5%",  }}>
      <Fade bottom>
         
        <Container style={{padding:0}}>
          <Grid container>
            <Grid item md={1} xs={0} />

            <Grid item md={5} xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <img
              alt='img'
                className="img"
                src="https://cdn.dribbble.com/users/2400016/screenshots/14269416/media/bcf80bab1f1dcc38bdc02559fd414fef.jpg?compress=1&resize=1600x1200"
              />
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin:20
              }}
            >
              <div>
                <h2 className="myname">
                  <Typed strings={["I Am M Zeenat"]} typeSpeed={60}></Typed>
                </h2>
                <h3 className="descname">
                  I'm a{" "}
                  <Typed
                    strings={["Web Developer", "MERN STACK DEVELOPER"]}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                  ></Typed>
                </h3>
                <h5 className="details">
                  Just a student trying to make space in coding world
                </h5>
              </div>
              <div className="social">
                <Button
                  className={classes.btn}
                //   variant="contained"
                  fullWidth
                >
                  Hire Me <ArrowForward/>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
};

export default Header;
