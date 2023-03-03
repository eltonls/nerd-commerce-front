import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom"

const navItems = ["Produtos", "Sobre Nós"]

const Nav = () => {
  return (
    <Box sx={{ textAlign: "center"}}> 
      <Typography variant="h6" sx={{ my: 2}}>
        Nerd Commerce
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center"}}>
            <ListItemText>
              <Link component={RouterLink} to="/produtos">Produtos</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center"}}>
            <ListItemText>
              <Link component={RouterLink} to="/sobre">Sobre</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box> 
  )
}

export default Nav;
