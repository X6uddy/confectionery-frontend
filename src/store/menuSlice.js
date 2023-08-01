import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: 'menu',
    initialState:{
        menuCondition: false,
    },
    reducers: {
        openMenu(state, action){
            state.menuCondition = true;
        },
        closeMenu(state,action){
            state.menuCondition = false;
        }
    }
})
export const {openMenu, closeMenu} = MenuSlice.actions;
export default MenuSlice.reducer;