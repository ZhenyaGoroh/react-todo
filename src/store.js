import cartReducer from "./reducers/cartReducer";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";

const store = createStore(cartReducer);

export default store;
