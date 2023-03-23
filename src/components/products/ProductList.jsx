import React, { useEffect } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { fetchProducts } from "../../features/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ProductCard from "./ProductCard";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    console.log(state.products);
    return state.products.items;
  });
  const productFetchStatus = useSelector((state) => state.products.status);
  const productsError = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productFetchStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productFetchStatus, dispatch]);

  let content;

  if (productFetchStatus === "succeeded") {
    content = products.map((product) => (
      <ListItem key={product.id} sx={{ width: "100%", maxWidth: 400 }}>
        <ProductCard
          id={product.id}
          name={product.name}
          price={Number(product.price)}
          brand={product.brand}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      </ListItem>
    ));
  } else if (productFetchStatus === "loading") {
    content = <h5>Loading Products</h5>;
  } else if (productFetchStatus === "failed") {
    content = <h5>Oops! Something went wrong: {productsError}</h5>;
  }

  return (
    <React.Fragment>
      <Container disableGutters sx={{ paddingY: 2 }}>
        <Typography align="left" variant="h5" component="h2" color="text.secondary" gutterBottom>
          Produtos
        </Typography>
        <Divider />
      </Container>
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        {content}
      </List>
    </React.Fragment>
  );
}

export default ProductList;
