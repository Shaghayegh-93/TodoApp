import Footer from "./Footer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodoList, useTodoListAction } from "./Context/TodoListProvider";

const TodoApp = () => {
  const { todoList } = useTodoList();
  const dispatch = useTodoListAction();
  const isAllTodosSelected = todoList.every((todo) => todo.isCompleted);
  const onToggleAllTodos = (e) => {
    dispatch({ type: "TOGGLE_ALL", payload: e.target.checked });
  };
  return (
    <div className="todoApp">
      <TodoForm />
      <TodoList
        isAllTodosSelected={isAllTodosSelected}
        onToggleAllTodos={onToggleAllTodos}
      />
      <Footer
        isAllTodosSelected={isAllTodosSelected}
        onToggleAllTodos={onToggleAllTodos}
      />
    </div>
  );
};

export default TodoApp;
