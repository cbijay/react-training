import React from "react";

const Fruits = ({ items }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p>There are no any fruits</p>
      )}
    </ul>
  );
};

export default Fruits;
