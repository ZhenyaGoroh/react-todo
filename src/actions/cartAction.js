import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};
