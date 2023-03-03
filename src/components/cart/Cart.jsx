import CartList from "./CartList"
import { Box, Typography } from "@mui/material"

const DUMMY_LIST = [
  {
    key: 1,
    price: 59.99, 
    name: "Blusão Tom e Jerry"
  },
  {
    key: 2,
    price: 120.50,
    name: "Action Figure Beastars"
  },
  {
    key: 3,
    price: 80.99,
    name: "Bermuda Naruto"
  }
]

const Cart = () => {
  return (
    <Box sx={{ py: 2}}> 
      <Typography
        variant="h4"
        align="center"
        sx={{ textTransform: "uppercase" }}
      >
        Cart
      </Typography>
      <CartList items={DUMMY_LIST} /> 
    </Box>
  )
}

export default Cart;
