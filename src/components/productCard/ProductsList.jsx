import Styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className={Styles["product-list"]}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductsList;
