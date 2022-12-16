import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (value) => {
    setInput(value);
  };

  const handleAdd = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <TodoContext.Provider value={{ input, todos, handleInput, handleAdd }}>
      {children}
    </TodoContext.Provider>
  );
};
