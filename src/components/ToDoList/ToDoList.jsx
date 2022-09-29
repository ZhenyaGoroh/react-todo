import React from "react";
import { useEffect } from "react";
import TodoContainer from "../../containers/Todo";
import "./ToDoList.css"


function ToDoList(props) {
  useEffect(() => {
    // storing input name
    localStorage.setItem("todo", JSON.stringify(props.todos));
  }, [props.todos]);

  let todos = props.todos
    .sort((a, b) => b.importance - a.importance)
    .map((item) => (
      <TodoContainer
        id={item.id}
        importance={item.importance}
        key={item.id}
        text={item.text}
      />
    ));

  return <div className="todo-list">{todos}</div>;
}

export default ToDoList;
