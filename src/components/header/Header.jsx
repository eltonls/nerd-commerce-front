import React, { useState } from "react";
import { Typography, Box, AppBar, Drawer, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Cart from "../cart/Cart";
import Nav from "./Nav";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
  }

  const handleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar 
          sx={{ 
            display: {sm: "flex", md: "none"}, 
            justifyContent: "space-between" 
          }} 
        >            
          <IconButton 
            onClick={handleNavOpen}
            size="medium"
            edge="start"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer 
            anchor="left"
            onClose={handleNavOpen}
            open={isNavOpen}
            ModalProps={{
              keepMounted: true, // Better performance for mobile
            }}
            sx={{
              display: { sm: "block", md: "none"},
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240},
            }}
          >
            <Nav />
          </Drawer>
          <Typography 
            variant="h6"
          >
            Nerd Commerce
          </Typography>  
          <IconButton 
            onClick={handleCartOpen}
            size="medium"
            edge="end"
            color="inherit"
          >
            <ShoppingBasketIcon />
          </IconButton>
          <Drawer 
            anchor="right"
            onClose={handleCartOpen}
            open={isCartOpen}
          >
            <Cart />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box> 
  )
}

export default Header;
