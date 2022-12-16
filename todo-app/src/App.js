import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
