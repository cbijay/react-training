import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h3>Task List</h3>

      {todos.length > 0 ? (
        todos.map((todo, index) => <div key={index}>{todo}</div>)
      ) : (
        <p>0 task left to complete</p>
      )}
    </div>
  );
};

export default TodoList;
