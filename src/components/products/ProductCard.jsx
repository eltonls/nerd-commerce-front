import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import CardActions from "@mui/material/CardActions";
import AddCircleIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircleRounded";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addProduct } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
import { IconButton, CardContent, CardMedia, Typography, Container } from "@mui/material";
import AlertNewProduct from "../alerts/AlertNewProduct";
import "./productCard.css";

const ProductCard = (props) => {
  const [addTrayIsOpen, setAddTrayIsOpen] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [units, setUnits] = useState(0);
  const { price, name, imageUrl } = props;

  const dispatch = useDispatch();

  const showSuccessAlert = () => {
    setIsAlertShown(true);

    setTimeout(() => {
      setIsAlertShown(false);
    }, 2000);
  };

  const openTrayHandler = () => {
    setAddTrayIsOpen(true);
  };

  const addProductHandler = () => {
    showSuccessAlert();
    dispatch(addProduct({ ...props, units: units }));
  };

  const addUnitsHandler = () => {
    setUnits((prevValue) => prevValue + 1);
  };

  const removeUnitsHandler = () => {
    setUnits((prevValue) => {
      return prevValue != 0 ? prevValue - 1 : 0;
    });
  };

  const trayComponent = () => (
    <CardActions
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="card-actions"
    >
      <Container
        sx={{ display: "flex", justifyContent: "justify-between", marginBottom: 2 }}
        disableGutters
      >
        <IconButton color="default" size="large" onClick={addUnitsHandler}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          sx={{ textAlign: "center" }}
          value={units}
          disabled
        />
        <IconButton color="default" size="large" onClick={removeUnitsHandler}>
          <RemoveCircleIcon fontSize="large" />
        </IconButton>
      </Container>
      <Button
        color="primary"
        size="large"
        fullWidth={true}
        variant="contained"
        sx={{ fontWeight: 700 }}
        onClick={addProductHandler}
      >
        Adicionar
      </Button>
      {isAlertShown && ReactDOM.createPortal(<AlertNewProduct />, document.getElementById("alert"))}
    </CardActions>
  );

  return (
    <Card sx={{ width: "100%", height: "100%" }} onClick={openTrayHandler}>
      <CardMedia sx={{ height: 350 }} image={imageUrl} title="product img" />
      <CardContent className="card-content">
        <Typography>{name}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          R$ {price.toFixed(2)}
        </Typography>
        <Typography variant="subtitle2" component="h6" color="text.secondary">
          Em até 12x de R$ {(price / 12).toFixed(2)}
        </Typography>
        <Typography variant="subtitle2" component="h6" color="text.secondary">
          R$ {(price - (price * 10) / 100).toFixed(2)} à vista(10% de desconto)
        </Typography>
      </CardContent>
      {addTrayIsOpen ? trayComponent() : ""}
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default ProductCard;
