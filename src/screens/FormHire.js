import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";
const FormHire = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "zeenatmalikk",
        "template_fypdh0h",
        e.target,
        "user_85K6vkpaKTH5Ycpb2SW7v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: 0, margin: 0 }}>
        Hire Me for your next project!!
      </h2>
      <Grid container>
        <Grid
          item
          md={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className="contact-form" onSubmit={sendEmail}>
            <TextField
              variant="outlined"
              style={{ backgroundColor: "white", marginTop: 20 }}
              placeholder="enter your name"
              fullWidth
              type="text"
              name="name"
            />

            <TextField
              variant="outlined"
              style={{ backgroundColor: "white", marginTop: 20 }}
              placeholder="enter your mail"
              fullWidth
              type="email"
              name="user_email"
            />

            <TextField
              variant="outlined"
              style={{ backgroundColor: "white", marginTop: 20 }}
              multiline
              rows={6}
              placeholder="enter your message"
              fullWidth
              name="message"
            />
            <Button
              style={{ backgroundColor: "white", marginTop: 20 }}
              fullWidth
              type="submit"
              value="Send"
              onClick={handleClickOpen}
            >
              Submit
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <DialogTitle style={{ textAlign: "center" }}>
                  <h2> Your Email has been sent !!</h2>
                </DialogTitle>
                <DialogContentText style={{ textAlign: "center" }}>
                  <h3>
                    {" "}
                    Your mail has been successfully sent. You might get a
                    response within 24 hrs{" "}
                  </h3>
                </DialogContentText>
              </DialogContent>
              <DialogContentText style={{ textAlign: "center" }}>
                <h3> Regards, Zeenat K Malik</h3>
              </DialogContentText>
            </Dialog>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormHire;
