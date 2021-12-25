import "./App.css";
import TodoListProvider from "./components/Context/TodoListProvider";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoListProvider>
      <TodoApp />
    </TodoListProvider>
  );
}

export default App;
