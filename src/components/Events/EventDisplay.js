import React from "react";
import * as styles from "./styles/eventDisplay.module.scss";
import { motion } from "framer-motion";
import { intervalToDuration, format } from "date-fns";

const EventDisplay = () => {
  const events = [1, 2, 3, 4, 5];
  // e.g. event occurs at 12:00pm on 30/09/2023, which is
  let eventStartTime = new Date(2023, 8, 30, 12, 0, 0);

  const [timeToEvent, setTimeToEvent] = React.useState(
    timeLeftToEvent(eventStartTime)
  );

  React.useEffect(() => {
    setTimeToEvent(timeLeftToEvent(eventStartTime));
  });

  return (
    <motion.div
      className={styles.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className={styles.mainEventCont}>
        <div className={styles.mainEventCountdown}>
          {formatCountdown(timeToEvent)}
        </div>
        <div className={styles.mainEventCard}>
          Most recent upcoming event here!
        </div>
      </div>
      <div className={styles.eventsCont}>
        {events.map(() => (
          <div className={styles.eventCard}>Upcoming event!</div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventDisplay;

const timeLeftToEvent = (eventStartTime) => {
  let now = new Date();
  let difference = intervalToDuration({
    start: now,
    end: eventStartTime,
  });

  return difference;
};

const formatCountdown = (timeLeft) => {
  let formatted = "";

  if (timeLeft.months) {
    formatted += `${timeLeft.months} months `;
  }

  if (timeLeft.days) {
    formatted += `${timeLeft.days} days `;
  }

  if (timeLeft.hours) {
    formatted += `${timeLeft.hours} hours `;
  }

  formatted += `${timeLeft.minutes} mins left`;

  return formatted;
};
