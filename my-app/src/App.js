// import { useState } from "react";
import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import "../src/styles/App.css";
import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "Javascript", body: "Язык программирования" },
    { id: "2", title: "Javascript 2", body: "Язык программирования" },
    { id: "3", title: "Javascript 3", body: "Язык программирования" },
    { id: "4", title: "Javascript 4", body: "Язык программирования" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
    // setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length?<PostList posts={posts} title="Список постов 1" remove={removePost} />:<h1 style={{textAlign: 'center'}}>Постов не найдено</h1>}
      
    </div>
  );
}

export default App;
