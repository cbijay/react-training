import React, { useState } from "react";
import Fruits from "./Fruits";

const Form = () => {
  const [input, setInput] = useState("");
  const [fruits, setFruits] = useState([]);

  const handleFruit = (event) => {
    const value = event.target.value;

    setInput(value);
  };

  const addFruit = () => {
    setFruits([...fruits, input]);
    setInput("");
  };

  return (
    <>
      <input onChange={(event) => handleFruit(event)} value={input} />
      <button onClick={() => addFruit()}>Add</button>

      <Fruits items={fruits} />
    </>
  );
};

export default Form;
