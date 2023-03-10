import React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { addProduct } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
import { IconButton, CardContent, CardMedia, Typography } from "@mui/material";
import AddCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = (props) => {
  const { id, price, name, description, brand, imageUrl } = props;

  const dispatch = useDispatch();

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardMedia sx={{ height: 280 }} image={imageUrl} title="Thi" />
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p">{description}</Typography>
        <Typography component="p" color="text.secondary">
          {brand}
        </Typography>
        <IconButton
          edge="end"
          aria-label="add item to cart"
          onClick={() => dispatch(addProduct(props))}
        >
          <AddCartIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default ProductCard;
