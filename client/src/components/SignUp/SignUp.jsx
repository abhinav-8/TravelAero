import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authorize/Authorize.action";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import SignUpStyles from "./SignUpStyles";
import { Form } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const classes = SignUpStyles();
  const signUp = () => {
    const userDetails = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(signup(userDetails));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp();
  };
  return (
    <>
      <Navbar />
      <Grid className={classes.mainContainer}>
        <Card elevation={0} className={classes.cardContainer}>
          <CardContent className={classes.cardItemsContainer}>
            <TextField
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SignIn;
