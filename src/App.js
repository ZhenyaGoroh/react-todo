import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";

function App(props) {

  return (
    <Provider store = {store}>
      <div>
        <Cart/>
      </div>
    </Provider>
  )
}

export default App;
