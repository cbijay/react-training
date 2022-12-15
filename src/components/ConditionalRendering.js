import React, { useState } from "react";

const ConditionalRendering = () => {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Guava", "Mango"]);

  return (
    <>
      {fruits.length > 0 ? (
        fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
      ) : (
        <p>There are no any fruits</p>
      )}
    </>
  );
};

export default ConditionalRendering;
