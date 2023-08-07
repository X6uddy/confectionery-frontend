import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'catalogState/fetchProducts',
    async function(skip = 0) {
        const response = await fetch(`http://127.0.0.1:3004/products/catalog?skip=${skip}`);
        const data = response.json()
        
        
        return data
    }
)



const CatalogSlice = createSlice({
    name: 'catalogState',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        skip: 0,
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
            action.payload.map((item) => state.data.push(item))
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state,action) => state.error = true)
    }

})
export default CatalogSlice.reducer;
export const { loadNextProducts } = CatalogSlice.actions;