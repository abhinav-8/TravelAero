import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  NavbarContainer: {
    padding: "10px 0px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Noto Sans",
    fontWeight: "500",
    fontSize: "15px",
    color: "black",
    backgroundColor: "rgba(0, 0, 0,0.2)",
    width: "max-width",
    boxShadow: "1px 0px 0px",
  },
  LogoContainer: {
    width: "20%",
    cursor: "pointer",
    "&:hover": {
      color: "grey",
      transform: "scale(1.2)",
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
