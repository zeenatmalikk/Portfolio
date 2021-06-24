import { Grid, Container } from "@material-ui/core";
import React from "react";
import "./Previous.css";



const images=[
    {
        img:"https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200"
    },
    {
        img:"https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200"
    },
    {
        img:"https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200"
    },
    {
        img:"https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200"
    },
]

const Previous = () => {
  return (
    <div style={{paddingTop:'5%'}}>
      <Container style={{padding:0}}>
        <h1 className="heading-prev">Previous Work-</h1>
        <Grid container>
          <Grid item md={4} xs={12} sm={6}>
            <img
            alt='img'
              className="images"
              src="https://cdn.dribbble.com/users/548267/screenshots/15796771/media/2c97aca97a15ee47830fdb9d2f15a57d.png?compress=1&resize=1600x1200"
            />
          </Grid>
          <Grid item md={5} xs={12} sm={6}>
            <img
            alt='img'
              className="images"
              src="https://cdn.dribbble.com/users/548267/screenshots/15796771/media/2c97aca97a15ee47830fdb9d2f15a57d.png?compress=1&resize=1600x1200"
            />
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <img
            alt='img'
              className="images"
              src="https://cdn.dribbble.com/users/548267/screenshots/15796771/media/2c97aca97a15ee47830fdb9d2f15a57d.png?compress=1&resize=1600x1200"
            />
          </Grid>
        </Grid>
        <Grid container>
           {images.map((item)=>(
                <Grid item md={3} xs={12} sm={6}>
         <img alt='img' className='images' src={item.img}/>
                </Grid>
           ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Previous;
