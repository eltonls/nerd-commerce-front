import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.items.find((element) => element.id === action.payload.id)) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            return [item, (item.unit += action.payload.units)];
          } else {
            return item;
          }
        });
      } else {
        state.items.push({ ...action.payload, unit: action.payload.units });
      }
    },
    removeProduct: (state, action) => {
      let newArr = state.items.filter((item) => item.id !== action.payload.id);
      if (newArr === undefined) state.items = [];
      else state.items = newArr;
    },
    removeOneUnit: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          return [item, item.unit--];
        } else {
          return item;
        }
      });
    },
    addOneUnit: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          return [item, item.unit++];
        } else {
          return item;
        }
      });
    }
  }
});

export const { addProduct, removeProduct, removeOneUnit, addOneUnit } = cartSlice.actions;
export const selectCartProducts = (state) => state.cart.items;

export default cartSlice.reducer;
