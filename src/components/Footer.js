import { useTodoList, useTodoListAction } from "./Context/TodoListProvider";

const Footer = ({ isAllTodosSelected, onToggleAllTodos }) => {
  const { todoList, filter } = useTodoList();
  const dispatch = useTodoListAction();
  const noTodosClass = todoList.length === 0 ? "hidden" : "";
  const showClearCompleted =
    onToggleAllTodos && isAllTodosSelected ? "clearCompleted" : "hidden";
  const activeCount = todoList.filter((todo) => !todo.isCompleted).length;
  const itemsLeftText = `Item${activeCount >= 2 ? "s" : ""} left`;
  const getSelectedClass = (filterName) => {
    return filter === filterName ? "selected" : "";
  };
  const changeFilter = (e, filterName) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_FILTER", payload: filterName });
  };
  const clearCopletedTodos = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODOS" });
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
        <div
          onClick={clearCopletedTodos}
          className={`clearCompleted ${showClearCompleted}`}
        >
          clear completed
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
