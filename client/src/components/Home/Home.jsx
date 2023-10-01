import Navbar from "../Navbar/Navbar";
import TicketBooking from "../TicketBooking/TicketBooking";
import HomeStyles from "./HomeStyles";
import { Typography } from "@material-ui/core";

const Home = () => {
  const classes = HomeStyles();
  return (
    <div>
      <Navbar />
      <div>
        <Typography className={classes.Header}>Ready to take off?</Typography>
        <Typography className={classes.SubHeader}>
          Book your flights hassle-free and enjoy a seamless travel experience.
        </Typography>
      </div>
      <TicketBooking />
    </div>
  );
};

export default Home;
