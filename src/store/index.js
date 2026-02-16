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
      const existingItemIndex = state.shopCart.findIndex(
        (item) => item.id === newItem.id,
      );
      const updatedCartQuantity = state.totalQuantity + 1;
      if (existingItemIndex >= 0) {
        const updatedItems = state.shopCart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        return {
          shopCart: updatedItems,
          totalQuantity: updatedCartQuantity,
        };
      } else
        return {
          shopCart: [...state.shopCart, { ...newItem, quantity: 1 }],
          totalQuantity: updatedCartQuantity,
        };
    },
    showCart: (state) => {
      state.showCart = !true;
    },
  },
});

export const CartActions = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer,
});
