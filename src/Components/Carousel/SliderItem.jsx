import React from "react";

function SliderItem({ data }) {
  return (
    <div className="carousel-inner">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={getClassName(index)}
            data-bs-interval="5000"
          >
            <div className="bg-dark_slide">
              <h4>{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );

  function getClassName(index) {
    return index === 0 ? "carousel-item active" : "carousel-item";
  }
}

export default SliderItem;
