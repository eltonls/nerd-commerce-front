import { useEffect, useState } from "react";
import Styles from "./Slide.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Slide = () => {
  // const [images, setImages] = useState([]);
  // const [slideCount, setSlideCount] = useState(0);
  // const endpoint = "https://api.lorem.space/image/fashion";

  /*
  const slideMinusClickHandler = () => {
    setSlideCount((lastNum) => {
      return lastNum - 1;
    })
  }

  const slidePlusClickHandler = () => {
    setSlideCount((lastNum) => {
      return lastNum + 1;
    })
  }
  */

  return (
    <div className={Styles["slide"]} >
      <button className={Styles["slide__btn--left"]} > 
        <AiOutlineArrowLeft className={Styles["slide__icon"]} />
      </button>
      <img src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg" className={Styles["slide__img"]} alt="" />
      <button className={Styles["slide__btn--right"]}>
        <AiOutlineArrowRight className={Styles["slide__icon"]} />
      </button>
    </div>
  )
}

export default Slide;

