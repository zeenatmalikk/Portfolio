import { Container, TextField, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

const PrevPageForm = () => {
  const [nameofProject, setnameofProject] = useState("");
  const [descofProject, setdescofProject] = useState("");
  const [link, setlink] = useState("");

  const submitData = () => {
   axios({
       method:'post',
       url:`http://localhost:5000/newrev`,
       data:{projectname:nameofProject, projectdesc:descofProject,projectlink:link}
   })
   .then((res) => console.log("res", res))
   .catch((err) => console.log("err", err));
}
  console.log('title',nameofProject);
  console.log('descr',descofProject);
  console.log('url',link);

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={10} xs={12}>
            <h3>Form for Previous projects</h3>
            <TextField
              style={{ backgroundColor: "#fff", margin: 10 }}
              label="name"
              fullWidth
              placeholder="name of project"
              onChange={(e) => setnameofProject(e.target.value)}
            />
            <TextField
              style={{ backgroundColor: "#fff", margin: 10 }}
              label="description"
              fullWidth
              placeholder="description of project"
              onChange={(e) => setdescofProject(e.target.value)}
            />
            <TextField
              style={{ backgroundColor: "#fff", margin: 10 }}
              label="link"
              fullWidth
              placeholder="link"
              onChange={(e) => setlink(e.target.value)}
            />
            <Button
              style={{ margin: 10 }}
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => submitData(nameofProject, descofProject, link)}
            >
              sub
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PrevPageForm;
