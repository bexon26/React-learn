// import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
