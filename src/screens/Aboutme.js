import React from "react";
import { Container, Grid, Button, makeStyles } from "@material-ui/core";
import "./About.css";
import mypdf from "./Navbar/ZeenatMalik_Resume.pdf"

const useStyles = makeStyles((theme) => ({
  gridpic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  },
  butn: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 20,
    fontWeight:'bold',
    "&:hover":{
      fontWeight:'bold'
    }
  },

}));

const Aboutme = () => {
  const classes = useStyles();
  return (
    <div style={{paddingTop:'5%',}}>
      <Container style={{padding:0}}>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={4} xs={12}>
            <h2 className="head">About me ----</h2>
            <h3 className="desc-abt">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </h3>
            <div
              
            >
              <div>
                <Button variant="contained" className={classes.butn}>
                <a href={mypdf} download className='cv'>
                    Download CV
                </a>
                </Button>
              </div>
             
            </div>
          </Grid>
          <Grid item md={1} xs={0} />
          <Grid
            item
            md={5}
            xs={12}
           className={classes.gridpic}
          >
            <img
            alt='img'
              className="abt-img"
              src="https://cdn.dribbble.com/users/2400016/screenshots/13987608/image.png?compress=1&resize=800x600"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Aboutme;
