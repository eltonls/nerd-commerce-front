import Styles from "./Header.module.css";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Hamburguer from "./Hamburguer";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState();

  const isOpenHandler = () => {
    if(isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <header className={Styles["header"]}>
      <Logo /> 
      <SearchBar isOpenState={isOpen} />
      <Nav isOpenState={isOpen} />
      <Hamburguer isOpenController={isOpenHandler} />
    </header>
  )
}

export default Header;
