//import link
import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import CalenderIcon from "../icons/calender-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRgtIcon from "../icons/arrow-rgt-icon";


//call a prop so as to pass it to another component
const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  //the date init
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //the address init
  const formattedAddress = location.replace(",", "\n");
  //the link init
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <CalenderIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
             <ArrowRgtIcon/>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
