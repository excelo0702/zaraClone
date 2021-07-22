import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CarouselData } from "../dummy_data/CarouselData";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? CarouselData.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === CarouselData.length - 1 ? 0 : current + 1);
  };

  const dots = [1,2,3,4,5];

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        <div className="carouselContainer">
          {CarouselData.map((image, index) => {
            return (
              <div
                key={index}
                className={index === current ? "slide-active" : "slide"}
              >
                {index === current && (
                  <img src={image.image} className="image"></img>
                )}
              </div>
            );
          })}
        </div>
        <div className="dot-div">
          {dots.map((dot,index)=>{
              return(
                  <div className = {index === current?"dot-active":"dot"}/>                   
              )
          })}
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
