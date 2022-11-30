import { useEffect, useState } from "react";
import Styles from "./Slide.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Slide = () => {
  const [images, setImages] = useState([]);
  const [slideCount, setSlideCount] = useState(0);
  const endpoint = "https://picsum.photos/v2/list";

  useEffect(() => {
    fetch(endpoint)
      .then((image) => {
        image.json()
          .then((image) => {
            console.log(image);
            setImages(image);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

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

  return (
    <div className={Styles["slide"]} >
      <button className={Styles["slide__btn--left"]} onClick={slideMinusClickHandler}>
        <AiOutlineArrowLeft className={Styles["slide__icon"]} />
      </button>
      <img src={images[slideCount].url} className={Styles["slide__img"]} alt="" />
      <button className={Styles["slide__btn--right"]} onClick={slidePlusClickHandler}>
        <AiOutlineArrowRight className={Styles["slide__icon"]} />
      </button>
    </div>
  )
}

export default Slide;

