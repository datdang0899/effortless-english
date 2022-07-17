import React from "react";

function Carousel({ children }) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
        {children}
    </div>
  );
}

export default Carousel;
