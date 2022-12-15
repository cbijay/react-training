import React, { useState } from "react";

const List = () => {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Guava", "Mango"]);

  return (
    <>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </>
  );
};

export default List;
