import { useState } from "react";
import { enterCode } from "../helpers/KeyCode";
import { useTodoListAction } from "./Context/TodoListProvider";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useTodoListAction();
  const changeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const addTodoHandler = (e) => {
    const isEnter = e.keyCode === enterCode;
    const newInputValue = inputValue.trim();
    const isInputValuePresent = newInputValue.length > 0;
    if (isEnter && isInputValuePresent) {
      dispatch({ type: "ADD_TODO", payload: newInputValue });
      setInputValue("");
    }
  };

  return (
    <div className="todoForm">
      <input
        onKeyDown={addTodoHandler}
        type="text"
        onChange={changeHandler}
        value={inputValue}
        className="new-todo"
        placeholder="What need to be done ?"
        autoFocus
      />
    </div>
  );
};

export default TodoForm;
