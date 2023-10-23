import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SignInStyles from "./SignInStyles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const SignIn = () => {
  const [selected, setSelected] = useState(false);
  
  const classes = SignInStyles();
  const handleClick = () => {
    setSelected(!selected);
    console.log(selected);
  };
  return (
    <>
      <Navbar />
      <Grid className={classes.mainContainer}>
        <Card
          elevation={0}
          className={`${classes.cardContainer} ${
            selected ? classes.cardClickedStyles : {}
          }`}
          onClick={() => handleClick()}
        >
          {selected && <CheckCircleIcon className={classes.checkboxStyles} />}
          <CardContent className={classes.cardItemsContainer}>
            <TextField id="user-name" label="Username" />
            <TextField id="password" label="Password" type="password" />
            <Button variant="outlined">Submit</Button>
          </CardContent>
        </Card>
        
      </Grid>
    </>
  );
};

export default SignIn;
