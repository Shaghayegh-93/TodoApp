import { createContext, useContext, useReducer } from "react";
import todoListReducer from "./TodoListReducer";
const TodoListContext = createContext();
const TodoListContextDispatcher = createContext();
const initialState = {
  todoList: [],
  filter: "all",
};

const TodoListProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoListReducer, initialState);
  return (
    <TodoListContext.Provider value={todoList}>
      <TodoListContextDispatcher.Provider value={dispatch}>
        {children}
      </TodoListContextDispatcher.Provider>
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
export const useTodoList = () => useContext(TodoListContext);
export const useTodoListAction = () => useContext(TodoListContextDispatcher);
