import { Grid, Container, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Reviews.css";
import axios from "axios";
const Review = () => {
  const [name, setname] = useState("");
  const [desig, setdesig] = useState("");
  const [rev, setrev] = useState("");

  const submitdata = () => {
    //   axios.post(
    //     `http://localhost:3000/newrev`,
    //     { fullname: name, designation: desig, review: rev }
    //     .then((res) => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
    //     .catch(err)=>
    //   );

    axios({
      method: "post",
      url: `http://localhost:5000/newrev`,
      data: { fullname: name, designation: desig, review: rev },
    })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  };
  console.log("name", name);
  console.log("des", desig);
  console.log("rev", rev);

  return (
    <div>
      <Container>
        {<Grid container>
          <Grid item md={4} xs={12} style={{ width: "100%" }}>
            <h2 className="hd-rev">Feedback form</h2>
            <TextField
              variant="outlined"
              label="name"
              placeholder="enter your name"
              fullWidth
              onChange={(e) => setname(e.target.value)}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                outline: "none",
                margin:10
              }}
            />
            <TextField
              variant="outlined"
              label="designation"
              placeholder="enter your desgination"
              onChange={(e) => setdesig(e.target.value)}
              fullWidth
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                outline: "none",
                margin:10
              }}
            />
            <TextField
              variant="outlined"
              label="review"
              placeholder="enter your feedback"
              fullWidth
              onChange={(e) => setrev(e.target.value)}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                outline: "none",
                margin:10
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => submitdata(name, desig, rev)}
              style={{ margin: 20 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
}      </Container>
    </div>
  );
};

export default Review;
