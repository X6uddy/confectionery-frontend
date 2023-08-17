import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("basketItems") !== null
    ? JSON.parse(localStorage.getItem("basketItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const totalQuantity =
    localStorage.getItem("totalQuantity") !== null
      ? JSON.parse(localStorage.getItem("totalQuantity"))
      : 0;
const setItemFunc = (item, totalAmount, totalQuantity) => {
        localStorage.setItem("basketItems", JSON.stringify(item));
        localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
        localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
    basketItems: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity
}

const basketSlice = createSlice({
    name: 'basketStates',
    initialState,
    reducers: {
        addItem(state,action) {
            const newItem = action.payload;
            const id = newItem.productID;
            const existingItem = state.basketItems.find((item) => item.productID === id);
            if(!existingItem) {
                state.basketItems.push({
                    title: newItem.title,
                    price: newItem.price,
                    photoPath: newItem.photoPath,
                    productID: newItem.productID,
                    priceForOne: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price, //price will increase depend on item quantity
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.quantity) * Number(newItem.price);
            }

            state.totalQuantity = state.basketItems.reduce(
                (total, item) => total + Number(item.quantity),
                0
              );

            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.priceForOne) *  Number(item.quantity),
                0
            );

            setItemFunc(
                state.basketItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
              );

        },
        removeItem(state,action) {

            const productID = action.payload;
            const existingItem = state.basketItems.find((item) => item.productID === productID);

           if(existingItem){
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.priceForOne);
           }

            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.priceForOne) * Number(item.quantity),
                0
            );

            state.totalQuantity = state.basketItems.reduce(
                (total, item) => total + Number(item.quantity),
                0
            );

            setItemFunc(
                state.basketItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
        deleteItem(state, action) {

            const productID = action.payload;
            const existingItem = state.basketItems.find((item) => item.productID === productID);

            if(existingItem){
                state.basketItems = state.basketItems.filter((item) => item.productID !== productID);
            }
            
            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.priceForOne) * Number(item.quantity),
                0
            );

            state.totalQuantity = state.basketItems.reduce(
                (total, item) => total + Number(item.quantity),
                0
            );

            setItemFunc(
                state.basketItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
        setInputState(state,action) {
            const quantityInput = action.payload.quantitySum;
            const productID = action.payload.id;
            const existingItem = state.basketItems.find((item) => item.productID === productID);
            
            if(existingItem){
                existingItem.quantity = Number(quantityInput);
                existingItem.totalPrice = Number(quantityInput) * Number(existingItem.price);
            }


            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.priceForOne) * Number(item.quantity),
                0
            );

            state.totalQuantity = state.basketItems.reduce(
                (total, item) => total + Number(item.quantity),
                0
            );
            

            setItemFunc(
                state.basketItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        }
    },
});
export const {addItem, removeItem, deleteItem, setInputState} = basketSlice.actions;
export default basketSlice.reducer;