const todoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      {
        const newTodo = {
          id: Math.ceil(Math.random() * 100),
          text: action.payload,
          isCompleted: false,
        };
        return { ...state, todoList: [...state.todoList, newTodo] };
      }
    
    default:
      return state;
  }
};
export default todoListReducer;
