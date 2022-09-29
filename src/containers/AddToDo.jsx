import { connect} from "react-redux";
import { addTodo } from "../actions/actions";
import AddToDo from "../components/AddToDo/AddToDo";


let mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      dispatch(addTodo(value));
    },
  };
};

const AddToDoContainer = connect(mapStateToProps,mapDispatchToProps)(AddToDo);

export default AddToDoContainer
