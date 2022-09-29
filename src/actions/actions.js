import {
  ADD_TODO,
  TOGGLE_IMPORTANCE,
  DELETE_TODO,
  SAVE_TODO,
} from "./actionTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleImportance = (id, importance) => {
  return {
    type: TOGGLE_IMPORTANCE,
    id,
  };
};

export const saveTodo = (id, text) => {
  return {
    type: SAVE_TODO,
    id,
    text,
  };
};
