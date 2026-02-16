import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  shopCart: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.shopCart.find(
        (item) => item.id === newItem.id,
      );

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.shopCart.push({ ...newItem, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const itemInc = action.payload;
      const item = state.shopCart.find((item) => item.id === itemInc.id);

      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },
    decreaseQty: (state, action) => {
      const itemInc = action.payload;
      const item = state.shopCart.find((item) => item.id === itemInc.id);

      if (item) {
        if (item.quantity === 0) {
          return;
        }
        item.quantity--;
        state.totalQuantity--;
      }
    },
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const CartActions = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer,
});
