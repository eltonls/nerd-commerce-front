import React, { useState } from "react";
import { Typography, Box, AppBar, Drawer, Toolbar, IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Cart from "../cart/Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
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
          <Typography 
            variant="h6"
          >
            Nerd Commerce
          </Typography>  
          <IconButton 
            onClick={handleCartOpen}
            size="medium"
            edge="end"
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
