import { enterCode, escCode } from "../helpers/KeyCode";
import { useState } from "react";
import { useTodoListAction } from "./Context/TodoListProvider";

const Todo = ({ todo, isEditing, setEditingId }) => {
  const dispatch = useTodoListAction();
  const editingClass = isEditing ? "editing" : "";
  const completedClass = todo.isCompleted ? "completed" : "";
  const [editText, setEditText] = useState(todo.text);
  const changeEditText = (e) => {
    e.preventDefault();
    setEditText(e.target.value);
  };
  const keyDownEditText = (e) => {
    if (e.keyCode === enterCode) {
      dispatch({
        type: "EDIT_TODO",
        payload: {
          id: todo.id,
          text: e.target.value,
        },
      });
      setEditingId(null);
    }
    if (e.keyCode === escCode) {
      setEditText(todo.text);
      setEditingId(null);
    }
  };
  const toggleTodo = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };
  const removeTodo = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  };

  return (
    <li className={`${editingClass}${completedClass}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          value={todo.isCompleted}
          onChange={toggleTodo}
        />
        <label onDoubleClick={() => setEditingId(todo.id)}>{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
      {isEditing && (
        <input
          className="edit"
          value={editText}
          onChange={changeEditText}
          onKeyDown={keyDownEditText}
          autoFocus
        />
      )}
    </li>
  );
};

export default Todo;
