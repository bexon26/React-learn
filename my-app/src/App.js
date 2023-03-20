// import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {id:'1', title:"Javascript", body:'Язык программирования'},
    {id:'2', title:"Javascript 2", body:'Язык программирования'},
    {id:'3', title:"Javascript 3", body:'Язык программирования'},
    {id:'4', title:"Javascript 4", body:'Язык программирования'}
  ]);
  return (
    <div className="App">
      {posts.map((post)=>
        <PostItem post={post} />

      )}
      
    </div>
  );
}

export default App;
