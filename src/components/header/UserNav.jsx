import Styles from "./UserNav.module.css";
import CartBtn from "./CartButton";
import {CiUser} from "react-icons/ci";

const UserNav = (props) => {

  return (
    <div className={Styles["user-nav"]}>
      <ul className={Styles["user-nav__menu"]}>
        <li className={Styles["user-nav__item"]}>
          <CartBtn /> 
        </li> 
        <li className={Styles["user-nav__item"]}>
          <CiUser /> 
        </li> 
      </ul> 
    </div>
  )
}

export default UserNav;
