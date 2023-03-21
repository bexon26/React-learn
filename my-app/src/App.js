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
  const [post, setPost] = useState({title:'', body:''})
  
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id:Date.now(),
      title:post.title,
      body:post.body,
    };
    setPosts([...posts, newPost])
    
    // setPosts({id:posts.length+1, ...newPost});
    console.log(newPost);
  };
  return (
    <div className="App">
      <form action="">
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title:e.target.value})}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body:e.target.value})}
          type="text"
          placeholder="Описание"
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
