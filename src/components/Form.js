import React, { useState } from "react";

const Form = () => {
  const [fruits, setFruits] = useState([]);
  const [input, setInput] = useState("");

  const changeInput = (value) => {
    setInput(value);
  };

  const addFruit = () => {
    setFruits([...fruits, input]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => changeInput(e.target.value)}
      />
      <button onClick={() => addFruit()}>Add</button>

      {fruits.length > 0 ? (
        fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
      ) : (
        <p>There are no any fruits</p>
      )}
    </>
  );
};

export default Form;
