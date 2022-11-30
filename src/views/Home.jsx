import Header from "../components/header/Header";
import Slide from "../components/slide/Slide";
import ProductsList from "../components/productCard/ProductsList";

const Home = () => {
  return (
    <section className="section-home">
      <Header /> 
      <Slide />
      <ProductsList />
    </section>
  )
}

export default Home;
