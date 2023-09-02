import { configureStore } from '@reduxjs/toolkit';
import mapModalReduser from './mapModalSlice';
import menuReduser from './menuSlice';
import { productsApiSlice } from './productsApiSlice';
import { vacanciesApiSlice } from './vacanciesApiSlice';
import CatalogSlice from './catalogSlice';
import basketSlice from './basketSlice';


const store = configureStore({
  reducer: {
    mapModalState: mapModalReduser,
    menuState: menuReduser,
    productsApi: productsApiSlice.reducer,
    vacanciesApi: vacanciesApiSlice.reducer,
    catalogStates: CatalogSlice,
    basketStates: basketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware, vacanciesApiSlice.middleware) 
})

export default store