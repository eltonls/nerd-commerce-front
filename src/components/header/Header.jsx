import React, { useState } from "react";
import { Typography, Box, AppBar, Drawer, Toolbar, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Cart from "../cart/Cart";
import Nav from "./Nav";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const handleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between"
          }}
        >
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link component={RouterLink} to="/" sx={{ color: "white" }}>
                    Produtos
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Link component={RouterLink} to="/about" sx={{ color: "white" }}>
                    Sobre
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <IconButton
            onClick={handleNavOpen}
            size="medium"
            edge="start"
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            onClose={handleNavOpen}
            open={isNavOpen}
            ModalProps={{
              keepMounted: true // Better performance for mobile
            }}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 }
            }}
          >
            <Nav />
          </Drawer>
          <Typography variant="h6">Nerd Commerce</Typography>
          <IconButton onClick={handleCartOpen} size="medium" edge="end" color="inherit">
            <ShoppingBasketIcon />
          </IconButton>
          <Drawer
            anchor="right"
            onClose={handleCartOpen}
            open={isCartOpen}
            sx={{ maxWidth: "80vw" }}
          >
            <Cart />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
