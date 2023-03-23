import React from "react";
import CartList from "./CartList";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Cart = () => {
  return (
    <Box
      sx={{
        py: 2,
        px: 0,
        maxWidth: "80vw"
      }}
    >
      <Typography variant="h6" align="center" sx={{ textTransform: "uppercase" }}>
        Carrinho
      </Typography>
      <Divider />
      <CartList />
      <Divider />
      <Button
        color="primary"
        size="large"
        fullWidth={true}
        variant="contained"
        link="/checkout"
        sx={{ fontWeight: 700, bottom: 2 }}
      >
        <Link component={RouterLink} to="/checkout" color="inherit" underline="none">
          Finalizar Compra
        </Link>
      </Button>
    </Box>
  );
};

export default Cart;
