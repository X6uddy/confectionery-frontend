import { createSlice } from "@reduxjs/toolkit";


const mapModalSlice = createSlice({
    name: 'mapModal',
    initialState:{
        mapModalCondition: false,
    },
    reducers: {
        openModal(state, action){
            state.mapModalCondition = true;
        },
        closeModal(state,action){
            state.mapModalCondition = false;
        }
    }
});
export const {openModal, closeModal} = mapModalSlice.actions;
export default mapModalSlice.reducer;