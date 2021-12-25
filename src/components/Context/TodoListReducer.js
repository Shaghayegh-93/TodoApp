const todoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Math.ceil(Math.random() * 100),
        text: action.payload,
        isCompleted: false,
      };
      return { ...state, todoList: [...state.todoList, newTodo] };
    }
    case "TOGGLE_ALL": {
      const filterTodos = state.todoList.map((todo) => ({
        ...todo,
        isCompleted: action.payload,
      }));
      return { ...state, todoList: filterTodos };
    }
    case "CHANGE_FILTER": {
      return { ...state, filter: action.payload };
    }
    case "EDIT_TODO": {
      const updatedTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      return { ...state, todoList: updatedTodoList };
    }
    case "TOGGLE_TODO": {
      const updatedTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return { ...state, todoList: updatedTodoList };
    }
    case "REMOVE_TODO": {
      const updatedTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todoList: updatedTodoList };
    }
    case "SAVE_TO_LOCAL_STORAGE": {
      return { ...state, todoList: action.payload };
    }
    case "CLEAR_COMPLETED_TODOS": {
      const updatedTodoList = state.todoList.filter(
        (todo) => !todo.isCompleted
      );
      return { ...state, todoList: updatedTodoList };
    }

    default:
      return state;
  }
};
export default todoListReducer;
