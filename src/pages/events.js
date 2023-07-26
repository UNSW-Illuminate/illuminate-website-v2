import React from "react";
import EventDisplay from "../components/Events/EventDisplay.js";
import Template from "../components/Template/template";
import * as styles from "../components/About/styles/about.module.scss";

const Events = () => (
  <Template currentPage="events">
    <title>Events | UNSW Illuminate</title>
    <div className={styles.wrapper}>
      <EventDisplay />
    </div>
  </Template>
);

export default Events;
