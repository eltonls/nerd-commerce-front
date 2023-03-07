import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ProductCard from "./ProductCard";

function ProductList(props) {
  const { products } = props;

  return (
    <List
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { sm: "column", md: "row" },
        alignItems: "center"
      }}>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ProductCard
            name={product.name}
            brand={product.brand}
            description={product.description}
          />
        </ListItem>
      ))}
    </List>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
