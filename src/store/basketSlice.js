import { createSlice } from "@reduxjs/toolkit";

const backendApi = process.env.REACT_APP_API_URL;


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
    totalQuantity: totalQuantity,
    basketModal: false,
    orderSuccessModal:false,
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
                    price: newItem.price * newItem.box_weight,
                    photoPath: newItem.photoPath,
                    productID: newItem.productID,
                    priceForOne: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price * newItem.box_weight, //price will increase depend on item quantity
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.quantity) * Number(existingItem.price);
            }

            state.totalQuantity = state.basketItems.reduce(
                (total, item) => total + Number(item.quantity),
                0
              );

            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.price) *  Number(item.quantity),
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
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
           }

            state.totalAmount = state.basketItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
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
                (total, item) => total + Number(item.price) * Number(item.quantity),
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
                (total, item) => total + Number(item.price) * Number(item.quantity),
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
        sendOrderByEmail(state,action){
            const buyersName = action.payload.buyersName;
            const buyersNumber = action.payload.buyersNumber;
            const buyersComment = action.payload.buyersComment;

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ buyersName,buyersComment,buyersNumber, order: state.basketItems, orderPrice: state.totalAmount})
            };
            fetch(`${backendApi}/mail/sendOrder`, requestOptions)
            .catch(err => console.log(err));

            state.basketItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            
            setItemFunc(
                state.basketItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );

        },
        openBasketModal(state,action) {
            state.basketModal = true
        },
        closeBasketModal(state,action){
            state.basketModal = false
        },
        openSuccessModal(state,action) {
            state.orderSuccessModal = true
        },
        closeSuccessModal(state,action){
            state.orderSuccessModal = false
        }
    },
});
export const {
    addItem,
    removeItem,
    deleteItem,
    setInputState,
    sendOrderByEmail,
    openBasketModal,
    closeBasketModal,
    openSuccessModal,
    closeSuccessModal,
    } = basketSlice.actions;
export default basketSlice.reducer;