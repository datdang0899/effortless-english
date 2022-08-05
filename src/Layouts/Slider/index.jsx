import React from "react";
import Carousel from "../../Components/Carousel" ; 
import SliderItem from "../../Components/Carousel/SliderItem" ; 

function Slider() {
  const data = [
    {
      id : 1 , 
      title: "You just can't beat the person who won't give up. - Bale Ruth",
    },
    {
      id : 2 , 
      title:
        "The best way to predict the future is to create it - Abraham Lincoln",
    },
    {
      id : 3 , 
      title: "Genius is 1% talent and 99% percent hard work. - Albert Einstein",
    },
  ];

  return (
    <section id="slider">
      <div className="container">
        <Carousel> 
          <SliderItem data={data}/>
        </Carousel>
      </div>
    </section>
  );
}

export default Slider;
