import { act } from "@testing-library/react";
import { useTodoList, useTodoListAction } from "./Context/TodoListProvider";

const Footer = () => {
  const { todoList, filter } = useTodoList();
  const dispatch = useTodoListAction();
  const noTodosClass = todoList.length === 0 ? "hidden" : "";
  const activeCount = todoList.filter((todo) => !todo.isCompleted).length;
  const itemsLeftText = `item${activeCount !== 1 ? "s" : ""} left`;
  const getSelectedClass = (filterName) => {
    return filter === filterName ? "selected" : "";
  };
  const changeFilter = (e, filterName) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_FILTER", payload: filterName });
  };

  return (
    <footer className={`footer ${noTodosClass}`}>
      <span className="todoCount">
        <strong> {activeCount} </strong>
        &nbsp;
        {itemsLeftText}
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={getSelectedClass("all")}
            onClick={(e) => changeFilter(e, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("active")}
            onClick={(e) => changeFilter(e, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("completed")}
            onClick={(e) => changeFilter(e, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
