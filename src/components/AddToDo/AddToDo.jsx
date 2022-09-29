import React from "react";
import { useState } from "react";
import "./AddToDo.css"
import {IoAddCircleOutline} from 'react-icons/io5'

function AddToDo(props) {
  const [value, setValue] = useState("");
  return (
    <div className="add-todo__container">
      <input
      className="add-todo__input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Task"
        value={value}
      />
      <button className="add" disabled={value<1?true:false} onClick={()=>(props.addTodo(value,setValue("")))}><IoAddCircleOutline/></button>
    </div>
  );
  
}

export default AddToDo;
