import React from "react";
import "./styles/EventCarousel.scss";
import events from "./events";
import ProgressBar from "@ramonak/react-progress-bar";

const EventCarousel = () => {
  const eventNum = events.length;
  const [nowDisplaying, setNowDisplaying] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setProgress(progress + 10);

      if (progress == 100) {
        setProgress(0);
        setNowDisplaying((nowDisplaying + 1) % eventNum);
      }
    }, 500);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <div className="container">
      <div className="displayContainer">
        <div className="eventDisplaying">
          <img
            src={
              require(`../../images/events/${events[nowDisplaying].image}.jpg`)
                .default
            }
            className="imageDisplaying"
          />
          <div className="overlay">
            <div className="content">
              <h1 className="eventName">{events[nowDisplaying].name}</h1>
              <div className="eventDescription">
                {events[nowDisplaying].description}
              </div>
              <div className="eventDate">{events[nowDisplaying].date}</div>
              <div className="eventLocation">
                {events[nowDisplaying].location}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eventListContainer">
        {events.map((e, key) => (
          <div>
            <div className="eventCard" key={key}>
              <img
                className="eventImage"
                src={require(`../../images/events/${e.image}.jpg`).default}
                id={key}
              />
              <div className="eventContent">{e.name}</div>
              {e.name == events[nowDisplaying].name && (
                <ProgressBar
                  completed={progress}
                  height="180px"
                  width="300px"
                  borderRadius="20px"
                  isLabelVisible={false}
                  bgColor="rgba(255, 255, 255, 0.08)"
                  //bgColor="red"
                  maxCompleted={100}
                  className="progressBar"
                  baseBgColor="rgba(18, 18, 18, 0.9)"
                  transitionDuration="5"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
