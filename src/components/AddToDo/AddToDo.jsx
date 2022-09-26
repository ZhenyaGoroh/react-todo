import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function AddToDo({ todo, setTodo }) {
  const [value, setValue] = useState("");
  function addTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
}

// setTodo(JSON.parse(localStorage.getItem("todo")))
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddToDo;
