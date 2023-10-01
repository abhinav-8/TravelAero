import React from "react";
import Navbar from "../Navbar/Navbar";
import SignInStyles from "./SignInStyles";
import { Card, CardContent, Grid } from "@material-ui/core";
const SignIn = () => {
  const classes = SignInStyles();
  return (
    <>
      <Navbar />
      <Grid className={classes.mainContainer}>
        <Card elevation={0} className={classes.cardContainer}>
          <CardContent className={classes.cardItemsContainer}>
            Hello
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SignIn;
