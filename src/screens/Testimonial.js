import { Grid, Card, CardContent, Container, Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Test.css";
const Testimonial = () => {
  const [data, setdata] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allrev`)
      .then((res) => {
        console.log("response", res);
        setdata(res.data.show);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
 
  return (

    <div>
      <Container>
        <div style={{ paddingTop: "5%" }}>
          <h2 className="testi">Testimonial----</h2>
        </div>
        <Grid container>
          <Grid item md={1} />
          
            {data ? data.map((item)=>(
              
          <Grid item md={4} xs={12} className="center-test">
{/* <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={4}
              gutter={20}
              leftChevron={<button>{<ArrowBackIcon/>}</button>}
              rightChevron={<button>{<ArrowForwardIcon/>}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
              disableSwipe={true}
            > */}
              <Card style={{ width: "90%" }}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Avatar src="https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200" />
                  <div>
                    <h1 className="name">{item.fullname}</h1>
                    <h3 className="post">{item.designation} </h3>
                  </div>
                </div>
                <div className="desc">
                  <h5 className="desc-style">
                    {item.review}
                  </h5>
                </div>
              </CardContent>
            </Card>
          {/* </ItemsCarousel> */}

          </Grid>

            )):'No data'}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonial;
