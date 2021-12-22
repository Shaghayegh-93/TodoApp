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

    default:
      return state;
  }
};
export default todoListReducer;
