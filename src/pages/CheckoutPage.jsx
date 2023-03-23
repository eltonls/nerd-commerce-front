import React from "react";
import Header from "../components/header/Header";
import CartList from "../components/cart/CartList";
import ClientForm from "../components/clientForm/ClientForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const CheckoutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container disableGutters sx={{ paddingY: 2 }}>
        <Typography align="left" variant="h5" component="h2" color="text.secondary" gutterBottom>
          Checkout
        </Typography>
        <Divider />
      </Container>
      <CartList />
      <ClientForm />
    </React.Fragment>
  );
};

export default CheckoutPage;
