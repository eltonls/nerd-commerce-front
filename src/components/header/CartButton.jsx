import Styles from "./CartButton.module.css";
import { CiShoppingCart } from "react-icons/ci"

const CartButton = () => {
  return (
    <div className={Styles["cart"]}>
      <button>
        <CiShoppingCart />
      </button>
    </div>
  )
}

export default CartButton;
