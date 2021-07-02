import React from "react";
import { Container, Grid, Toolbar, AppBar } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar style={{ backgroundColor: "#000", color:'#fff' }}>
          <Container>
            <Grid container>
              <Grid item md={3} xs={0} />
              <Grid item md={2} xs={4} className='center'>
                <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                  <h5 className="home">Home</h5>
                </Link>
              </Grid>
              <Grid item md={2} xs={4} className='center'>
                <Link  to="/previouspage" style={{ color: "#000", textDecoration: "none" }}>
                  <h5 className="home">Previous Projects</h5>
                </Link>
              </Grid>
              <Grid item md={2} xs={4} className='center'>
                <Link to="/contact" style={{ color: "#000", textDecoration: "none" }}>
                  <h5 className="home">Contact</h5>
                </Link>
              </Grid>
              <Grid item md={3} xs={0} />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
