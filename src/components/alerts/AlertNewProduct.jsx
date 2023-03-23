import React from "react";
import Alert from "@mui/material/Alert";

const AlertNewProduct = () => {
  return (
    <Alert severity="success" sx={{ position: "fixed", bottom: 1, left: 1 }}>
      Produto adicionado ao carrinho
    </Alert>
  );
};

export default AlertNewProduct;
