import { Grid, Container } from "@material-ui/core";
import React from "react";
import "./Landing.css";
import Bounce from "react-reveal/Bounce";

const Landing = () => {
  return (
    <div>
      <Container style={{ padding: 0, }}>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Bounce top>
            <Grid item md={6} xs={12}>
              <h1 className="heading-landing">
                <span>H</span>
                <span>E</span>
                <span>L</span>
              </h1>
            </Grid>
          </Bounce>
          <Bounce bottom>
            <Grid item md={6} xs={12}>
              <h1 className="heading2-landing">
                <span>L</span>
                <span>O</span>
                <span>!</span>
              </h1>
            </Grid>
          </Bounce>
        </Grid>
        <Grid container>
          <Grid item md={12} xs={12}>
            <h2
              style={{
                textAlign: "center",
                textTransform: "capitalize",
                fontSize: 32,
              }}
            >
              from me to you!
            </h2>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
