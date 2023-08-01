import { configureStore } from '@reduxjs/toolkit';
import mapModalReduser from './mapModalSlice';
import menuReduser from './menuSlice'
const store = configureStore({
  reducer: {
    mapModalState: mapModalReduser,
    menuState: menuReduser,
  }
})

export default store