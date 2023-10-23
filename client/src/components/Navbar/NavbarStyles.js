import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  NavbarContainer: {
    padding: "10px 0px",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Noto Sans",
    fontWeight: "500",
    fontSize: "20px",
    color: "black",
    backgroundColor: "rgba(0, 0, 0,0.2)",
    width: "max-width",
    boxShadow: "1px 0px 1px",
  },
  LogoContainer: {
    height: "auto",
    width: "auto",
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      color: "white",
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
    fontSize: "20px",
    transition: "transform .2s",
    "&:hover": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
  UserAccountContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  SignInButton: {
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
  SignUpButton: {
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
}));
