import { useEffect, useState } from "react";
import { useTodoList, useTodoListAction } from "./Context/TodoListProvider";
import Todo from "./Todo";

const TodoList = ({ isAllTodosSelected, onToggleAllTodos }) => {
  const { todoList, filter } = useTodoList();
  const [editingId, setEditingId] = useState(null);
  const dispatch = useTodoListAction();
  const getVisibleTodos = () => {
    switch (filter) {
      case "active": {
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
  useEffect(() => {
    const saveTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (saveTodoList)
      dispatch({ type: "SAVE_TO_LOCAL_STORAGE", payload: saveTodoList });
  }, []);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
          return (
            <Todo
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              setEditingId={setEditingId}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
