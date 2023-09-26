import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TicketBookingStyles from "./TicketBookingStyles";
import { getTodaysDate } from "./TicketBookingUtils";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
const TicketBooking = () => {
  const classes = TicketBookingStyles();
  const todaysDate = getTodaysDate();
  return (
    <Card
      elevation={0}
      className={`border-0 shadow-none my-[10%] mx-[10%] ${classes.ticketBookingContainer}`}
    >
      <CardContent className={classes.cardItemsContainer}>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="from"
          label="Departure City"
          placeholder="Bengaluru"
          className={`mx-4 w-48 ${classes.departureTextField}`}
          variant="outlined"
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="to"
          label="Arrival City"
          placeholder="Mumbai"
          className="px-4 w-48 border-8"
          variant="outlined"
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="date"
          type="date"
          label="Travel Date"
          className="px-4 w-48 border-8"
          defaultValue={todaysDate}
          variant="outlined"
        ></TextField>
        <TextField
          id="from"
          label="Passenger"
          variant="outlined"
          className="w-48 m-10"
        ></TextField>
        <Button
          variant="outlined"
          backgroundColor="transparent"
          sx={{ height: 50 }}
          className={classes.Button}
        >
          <Typography style={{ textTransform: "capitalize" }}>
            Search
          </Typography>
          <SearchIcon className="pl-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TicketBooking;
