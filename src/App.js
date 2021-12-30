import "./App.css";
import TodoListProvider from "./components/Context/TodoListProvider";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoListProvider>
      <div className="TodoHeader">
        <h1>Todo List</h1>
      </div>
      <TodoApp />
    </TodoListProvider>
  );
}

export default App;
