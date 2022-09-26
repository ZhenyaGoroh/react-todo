import React, { useState,useEffect } from "react";

function ToDoList({ todo, setTodo }) {
    
useEffect(() => {
  // storing input name
  localStorage.setItem("todo", JSON.stringify(todo));
}, [todo]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");


  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }
  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null)
  }
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <button onClick={() => saveTodo(item.id)}>Save</button>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => statusTodo(item.id)}>Закрыть</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
