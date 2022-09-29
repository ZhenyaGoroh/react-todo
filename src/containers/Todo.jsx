import { connect } from "react-redux";
import { deleteTodo, toggleImportance, saveTodo } from "../actions/actions";
import ToDo from "../components/ToDo/ToDo";
let mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    saveTodo: (id, value) => {
      dispatch(saveTodo(id, value));
    },
    toggleImportance: (id) => {
      dispatch(toggleImportance(id));
    },
  };
};

const TodoContainer = connect(null,mapDispatchToProps)(ToDo);

export default TodoContainer;
