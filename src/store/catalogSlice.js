import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'catalogState/fetchProducts',
    async function(skip = 0,{rejectWithValue}) {

        try {
            const response = await fetch(`http://127.0.0.1:3004/products/catalog?skip=${skip}`);

            if(!response.ok ){
                throw new Error('Server is broken')
            }
            const data = response.json();

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)
export const fetchSumProducts = createAsyncThunk(
    'catalogState/fetchSumProducts',
    async function(_,{rejectWithValue}) {

        try {
            const responseSum = await fetch(`http://127.0.0.1:3004/products/sum`);
            if(!responseSum.ok ){
                throw new Error('Server is broken')
            }
            const sum = responseSum.json();

            return sum
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
    }
)




const CatalogSlice = createSlice({
    name: 'catalogState',
    initialState: {
        dataCatalog: [],
        isLoading: false,
        catalogError: null,
        skip: 0,
        sumOfProducts: null
    },
    reducers: {
        loadNextProducts(state, action) {
            state.skip += 15;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            action.payload.map((item) => state.dataCatalog.push(item));
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.catalogError = true;
        })
        .addCase(fetchSumProducts.fulfilled, (state, action) => {
            state.sumOfProducts = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchSumProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.catalogError = true;
        })
    }

})
export default CatalogSlice.reducer;
export const { loadNextProducts } = CatalogSlice.actions;