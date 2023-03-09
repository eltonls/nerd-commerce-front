import React from "react";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { selectCartProducts } from "../../features/CartSlice";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const products = useSelector(selectCartProducts);

  if (products.length === 0)
    return (
      <Typography variant="h5" sx={{ padding: 4 }}>
        Oops! Seu carrinho tá vazio!
      </Typography>
    );

  return (
    <List>
      {products.map((item) => (
        <ListItem key={item.id}>
          <CartItem
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            brand={item.brand}
            price={item.price}
            unit={item.unit}
            desription={item.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CartList;
