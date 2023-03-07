import React from "react";
import { List, ListItem, IconButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartList = (props) => {
  return (
    <List>
      {props.items.map((item) => (
        <ListItem
          alignItems="flex-start"
          key={item.key}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar alt={item.alt} src="../../assets/react.svg" />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={<React.Fragment>{item.price}</React.Fragment>}></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CartList;
