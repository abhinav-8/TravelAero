import React from "react";
import NavbarStyles from "./NavbarStyles";
import { Typography } from "@material-ui/core";
const Navbar = () => {
  const classes = NavbarStyles();
  return (
    <div className={classes.NavbarContainer}>
      <div className={classes.LogoContainer}>LOGO</div>
      <div className={classes.NavButtonsContainer}>
        <Typography className={classes.NavButton}>Flights</Typography>
        <Typography className={classes.NavButton}>Offers</Typography>
        <Typography className={classes.NavButton}>Contact Us</Typography>
      </div>
      <div className={classes.UserAccountContainer}>
        <div className={classes.SignInButton}>Sign In</div>
        <div className={classes.SignUpButton}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
