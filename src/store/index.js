import { configureStore } from '@reduxjs/toolkit';
import mapModalReduser from './mapModalSlice';
const store = configureStore({
  reducer: {
    mapModalState: mapModalReduser,
  }
})

export default store