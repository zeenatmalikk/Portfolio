import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import axios from "axios";
import "./PrevPage.css"
const PrevPage = () => {
  const [searchterm, setsearchterm] = useState("");
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

  const filterData = data
    ? data.filter((item) => {
        console.log("itemfilter", item);
        if (searchterm == "") {
          return item;
        } else if (
          item.projectname.toLowerCase().includes(searchterm.toLowerCase())
        ) {
          return item;
        } else if (
          item.projectdesc.toLowerCase().includes(searchterm.toLowerCase())
        ) {
          return item;
        }
      })
    : "";
  return (
    <div>
      <Container>
        <div className='hd-pp'>
          <h2 className='heading-pp'>
            Previous Projects
          </h2>
        </div>
        <TextField
          fullWidth
          style={{ backgroundColor: "white" }}
          type="text"
          placeholder="search"
          onChange={(e) => {
            setsearchterm(e.target.value);
          }}
        />
        <Grid container>
          {filterData
            ? filterData.map((item, key) => {
                return (
                  <Grid item md={4} xs={12}>
                    <Card style={{ margin: 8 }}>
                      <CardContent>
                        <div>
                          <h2>{item.projectname}</h2>
                          <h3>{item.projectdesc}</h3>
                          <a  href="#">{item.projectlink}</a>
                        </div>
                      </CardContent>
                      <CardMedia>
                        <img
                          style={{ width: "100%", height: "200px" }}
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--tSq3pK63--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/j71o6fyry39eaz1eyjna.jpg"
                        />
                      </CardMedia>
                    </Card>
                  </Grid>
                );
              })
            : "no projects"}
        </Grid>
      </Container>
    </div>
  );
};

export default PrevPage;
