import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { input, handleInput, handleAdd } = useContext(TodoContext);

  return (
    <div>
      <input onChange={(e) => handleInput(e.target.value)} value={input} />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default AddTodo;
