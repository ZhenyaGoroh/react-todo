import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdDelete, MdDone } from "react-icons/md";
import "./ToDo.css";
function Todo(props) {
  const [edit, setEdit] = useState("");
  const [value, setValue] = useState(props.text);
  return (
    <div className="todo__container">
      {edit === props.id ? (
        <div className="todo-edit-field">
          <input
            className="todo-edit__input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => props.saveTodo(props.id, value, setEdit(""))}
          >
            <div>
              <MdDone className="done" />
            </div>
          </button>
        </div>
      ) : (
        <div className="todo__inner">
          <div className="todo__text">
            {props.importance === true ? (
              <div>
                <AiFillStar
                  className="fill__star"
                  onClick={() => props.toggleImportance(props.id)}
                />
              </div>
            ) : (
              <div>
                <BsDot
                  className="dot"
                  onClick={() => props.toggleImportance(props.id)}
                />
              </div>
            )}
            <div onClick={() => setEdit(props.id)}>{props.text}</div>
          </div>
          <div className="todo__btns">
            <button
              className="btn delete-btn"
              onClick={() => props.deleteTodo(props.id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
