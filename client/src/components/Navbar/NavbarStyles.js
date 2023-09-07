import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  NavbarContainer: {
    margin: "0px 10px",
    padding: "10px 0px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Noto Sans",
    fontWeight: "500",
    fontSize: "15px",
    color: "black",
  },
  LogoContainer: {
    width: "20%",
    display: "inline-block",
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
  NavButtonsContainer: {
    display: "flex",
    width: "40%",
    justifyContent: "space-evenly",
  },
  NavButton: {
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
  UserAccountContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  SignInButton: {
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
  SignUpButton: {
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
}));
