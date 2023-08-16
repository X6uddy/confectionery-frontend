import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'basket',
  initialState: JSON.parse(localStorage.getItem('basket')) || [],
  reducers: {
    addToBasket: (state, action) => {
      const { productId, quantity} = action.payload;
      const existingItem = state.find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ productId, quantity});
      }
      localStorage.setItem('basket', JSON.stringify(state));
    },
    removeFromBasket: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity -= quantity;
        localStorage.setItem('basket', JSON.stringify(state));

        if (existingItem.quantity <= 0) {
          localStorage.setItem('basket', JSON.stringify(state.filter(item => item.productId !== productId)));
          return state.filter(item => item.productId !== productId);
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = cartSlice.actions;
export default cartSlice.reducer;