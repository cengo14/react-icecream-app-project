import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cart.find(
        (i) =>
          i.id === payload.item.id && i.selectedType === payload.selectedType
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({
          ...payload.item,
          selectedType: payload.selectedType,
          quantity: 1,
        });
      }

    },
    deleteFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (i) =>
          i.id === payload.id && i.selectedType === payload.selectedType
      );
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1
      } else {
        state.cart.splice(index, 1)
      }
    },
    orderCart: (state) => {
      state.cart = []
    }
  },
});
export default cartSlice.reducer;
export const { addToCart, orderCart, deleteFromCart } = cartSlice.actions;
