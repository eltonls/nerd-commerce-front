import { ListItem } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import RemoveCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircleRounded";
import { useDispatch } from "react-redux";
import { removeProduct, removeOneUnit, addProduct } from "../../features/CartSlice";
import React from "react";
import PropTypes from "prop-types";

const CartItem = (props) => {
  const { id, price, name, description, brand, imageUrl, unit } = props;
  const dispatch = useDispatch();

  const removeOneUnitHandler = () => {
    if (unit > 1) {
      dispatch(removeOneUnit(props));
    } else {
      dispatch(removeProduct(props));
    }
  };

  return (
    <ListItem>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography color="text-secondary">{price}</Typography>
          <Typography color="text-secondary">Quantidade: {unit}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            edge="center"
            aria-label="delete"
            onClick={() => dispatch(removeProduct(props))}
          >
            <RemoveCartIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="add more units"
            onClick={() => dispatch(addProduct(props))}
          >
            <AddCircleIcon />
          </IconButton>
          <IconButton
            edge="start"
            aria-label="subtract a unit"
            onClick={removeOneUnitHandler}
          >
            <RemoveCircleIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ListItem>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  unit: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
};

export default CartItem;
