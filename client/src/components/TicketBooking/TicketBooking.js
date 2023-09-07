import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TicketBookingStyles from "./TicketBookingStyles";

const TicketBooking = () => {
  const classes = TicketBookingStyles();
  return (
    <Card className="block my-[5%] mx-[15%]">
      <CardContent className={classes.CardContent}>
        <Typography className={classes.Label}>Search Flights</Typography>
      </CardContent>
    </Card>
  );
};

export default TicketBooking;
