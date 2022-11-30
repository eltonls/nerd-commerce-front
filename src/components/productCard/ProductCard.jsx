import Styles from "./ProductCard.module.css";
import { FaCartPlus } from "react-icons/fa"

const ProductCard = () => {
  return (
    <div className={Styles["product-card"]}>
      <div className={Styles["product-card__img-box"]}>
        <img src="https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className={Styles["product-card__img"]} alt="" />
      </div>

      <div className={Styles["product-card__body"]}>
        <h3 className={Styles["product-card__price"]}>25,50 R$</h3>
        <div className={Styles["product-card__buttons"]}>
          <button className="btn btn--main">Comprar</button>
          <button className="btn btn--cart">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
