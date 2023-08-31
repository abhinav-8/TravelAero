import Navbar from "../Navbar/Navbar";
import TicketBooking from "../TicketBooking/TicketBooking";
import HomeStyles from "./HomeStyles";
import { Typography } from "@material-ui/core";

const Home = () => {
  const classes = HomeStyles();
  return (
    <>
      <Navbar />

      <div>
        <Typography className={classes.Header}>Ready To take off?</Typography>
      </div>
      <TicketBooking />
    </>
  );
};

export default Home;
