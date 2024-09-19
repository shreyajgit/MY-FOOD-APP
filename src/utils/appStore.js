// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({

  // this is one reducer for the whole app but it can contain small multiple reducers 
  reducer: {
    // therefore this is REDUCERS
    cart: cartReducer,
  },
});

export default appStore;