import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React from "react";
import "./Services.css";
import LightSpeed from 'react-reveal/LightSpeed'
const Services = () => {
  return (
    <div style={{paddingTop:'5%'}}>
      <Container style={{padding:10}}>
        <LightSpeed right>
      <h2 className="services">----Services</h2>
      </LightSpeed>
        <Grid container>
          <Grid item md={1} />
          <Grid
            item
            md={2}
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card style={{ width: "100%", margin: 10 }}>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-ser"
                  alt='img'
                  src="https://cdn.dribbble.com/users/2165459/screenshots/6249015/3af4bf60-0164-4cd8-ba8b-d4fb92e264a3.jpeg?compress=1&resize=800x600"
                />
              </CardMedia>
              <CardContent>
                <h4 className="txt"> HTML / CSS </h4>
                <h6 className="txt-desc"> Web development </h6>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            md={2}
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card style={{ width: "100%", margin: 10 }}>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-ser"
                  alt='img'
                  src="https://cdn.dribbble.com/users/2165459/screenshots/6249015/3af4bf60-0164-4cd8-ba8b-d4fb92e264a3.jpeg?compress=1&resize=800x600"
                />
              </CardMedia>
              <CardContent>
                <h4 className="txt"> MERN Stack </h4>
                <h6 className="txt-desc"> Web development </h6>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={1} />
          <Grid item md={5} xs={12} className='center-ser'>
           <div>
          
            <h6 className="desc-ser">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </h6>
           
           </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
