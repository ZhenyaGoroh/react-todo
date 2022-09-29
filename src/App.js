import React from "react";
import { Provider } from "react-redux";
import "./App.css";
// import AddToDo from "./components/AddToDo/AddToDo";
import store from "./store";

import AddToDoContainer from "./containers/AddToDo";
import ToDoListContainer from "./containers/ToDoList";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <ToDoListContainer />
        <div className="app__add-todo">
          <AddToDoContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
