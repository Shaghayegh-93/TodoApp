import { useTodoList } from "./Context/TodoListProvider";

const TodoList = () => {
  const { todoList, filter } = useTodoList();
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
  const visibleTodos = getVisibleTodos();
  const noTodosClass = visibleTodos.length === 0 ? "hidden" : "";

  return (
    <section className={`main ${noTodosClass}`}>
      <ul className="todoList">
        {visibleTodos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
