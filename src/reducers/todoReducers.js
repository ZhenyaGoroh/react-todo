import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_IMPORTANCE,
  SAVE_TODO,
} from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = JSON.parse(localStorage.getItem("todo"))

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.text,
          importance: false,
        },
      ];
    case DELETE_TODO:
      return [...state].filter((item) => item.id !== action.id);
    case TOGGLE_IMPORTANCE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, importance: !todo.importance } : todo
      );
    case SAVE_TODO:
      return state.map((item) =>
        item.id === action.id ? { ...item, text: action.text } : item
      );

    default:
      return state;
  }
};

export default todoReducers;
