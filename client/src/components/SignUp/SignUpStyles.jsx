import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    // padding: "24px",
    backgroundColor: "rgba(0, 0, 0,0.2)",
    overflow: "visible",
  },
  cardItemsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "30px",
  },
  cardClickedStyles: {
    border: "1px solid blue",
  },
  checkboxStyles: {
    position: "relative",
    top: "-10px",
    right: "-10px",
    alignSelf: "flex-end",
    zIndex: "10",
  },
}));
