import { connect } from "react-redux";
import ToDoList from "../components/ToDoList/ToDoList";


const mapStateToProps = (state) => {
  return{
    todos:state.todos,
  }
}

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
