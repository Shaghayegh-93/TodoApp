import { useTodoList, useTodoListAction } from "./Context/TodoListProvider";

const TodoList = () => {
  const { todoList, filter } = useTodoList();

  const dispatch = useTodoListAction();
  const getVisibleTodos = () => {
    switch (filter) {
      case "uncompleted": {
        return todoList.filter((todo) => !todo.isCompleted);
      }
      case "completed": {
        return todoList.filter((todo) => todo.isCompleted);
      }
      default:
        return todoList;
    }
  };
  const isAllTodosSelected = todoList.every((todo) => todo.isCompleted);
  const onToggleAllTodos = (e) => {
    dispatch({ type: "TOGGLE_ALL", payload: e.target.checked });
  };
  const visibleTodos = getVisibleTodos();
  const noTodosClass = visibleTodos.length === 0 ? "hidden" : "";

  return (
    <section className={`main ${noTodosClass}`}>
      <input
        id="toggleAll"
        className="toggleAll"
        type="checkbox"
        checked={isAllTodosSelected}
        onChange={onToggleAllTodos}
      />
      <label htmlFor="toggleAll">mark all as completed</label>
      <ul className="todoList">
        {visibleTodos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
