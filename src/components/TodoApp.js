import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="todoApp">
      <h1>todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
