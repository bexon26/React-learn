import React, { useState } from "react";

const Counter = function () {
  const [likes, setLikes] = useState(5);
  let increment = () => {
    setLikes(likes + 1);
  };
  let decrement = () => {
    setLikes(likes - 1);
  };
  return (
    <div>
      <h1>{likes}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
