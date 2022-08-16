import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img src={heartstrings} />,
    <img src={laneway} />,
    <img src={pancake} />,
    <img src={synergy} />,
    <img src={crystallise} />,
    <img src={cube} />,
  ];

  return (
    <div style={{ touchAction: "none" }}>
      <AliceCarousel
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Carousel;
