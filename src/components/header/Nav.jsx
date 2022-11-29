import Styles from "./Nav.module.css";
import Dropdown from "./Dropdown";
import UserNav from "./UserNav";
import Hamburguer from "./Hamburguer";

const Nav = (props) => {
  return (
    <nav className={props.isOpenState ? Styles["nav-active"] : Styles["nav-inactive"]}> 
      <ul className={Styles["nav__menu"]}>
        <li className={Styles["nav__item"]}>
          <a href="#" className={Styles["nav__link"]}>Home</a>
        </li>
        <li className={Styles["nav__item"]}>
          <a href="#" className={Styles["nav__link"]}>Produtos</a>
          <Dropdown />
        </li>
        <li className={Styles["nav__item"]}>
          <a href="#" className={Styles["nav__link"]}>Promos</a>
        </li>
        <li className={Styles["nav__item"]}>
          <a href="#" className={Styles["nav__link"]}>Contato</a>
        </li>
      </ul> 

      <UserNav />
    </nav>
  ) 
}

export default Nav;
