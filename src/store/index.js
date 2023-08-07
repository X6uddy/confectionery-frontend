import { configureStore } from '@reduxjs/toolkit';
import mapModalReduser from './mapModalSlice';
import menuReduser from './menuSlice';
import { productsApiSlice } from './productsApiSlice';
import CatalogSlice from './catalogSlice';


const store = configureStore({
  reducer: {
    mapModalState: mapModalReduser,
    menuState: menuReduser,
    productsApi: productsApiSlice.reducer,
    catalogStates: CatalogSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware) 
})

export default store