import { useState } from "react";
import Styles from "./Hamburguer.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Hamburguer = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const menuBtnClickHandler = () => {
    if(isOpen) {
      setIsOpen(false);
      props.isOpenController();
    } else {
      setIsOpen(true);
      props.isOpenController();
    } 
  }

  return (
    <button className={Styles["hamburguer"]} onClick={menuBtnClickHandler}>
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  )
}

export default Hamburguer;
