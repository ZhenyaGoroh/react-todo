import React, { useState} from "react";
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo"))||[]);
  
  // 
  return (
    <div>
      <Header />
      <AddToDo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
