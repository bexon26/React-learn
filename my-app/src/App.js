// import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "Javascript", body: "Язык программирования" },
    { id: "2", title: "Javascript 2", body: "Язык программирования" },
    { id: "3", title: "Javascript 3", body: "Язык программирования" },
    { id: "4", title: "Javascript 4", body: "Язык программирования" },
  ]);
  return (
    <div className="App">
      <form action="">
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание" />

        
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
