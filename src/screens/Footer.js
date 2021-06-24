import { Grid, Container,  } from "@material-ui/core";
import { Twitter, WhatsApp, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={3} xs={12}>
            <h2 className="hd-footer">Butex</h2>
            <h4 className="txt-footer">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <Twitter />
              <WhatsApp />
              <YouTube />
            </div>
          </Grid>
          <Grid item md={1} />

          <Grid item md={6} xs={12} className="grid-foot">
            <img
            alt='img'
              className="img-footer"
              src="https://cdn.dribbble.com/users/788099/screenshots/15883337/media/026c48d95ff32ab76080779ecdce8c9c.jpg?compress=1&resize=1600x1200"
            />
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
