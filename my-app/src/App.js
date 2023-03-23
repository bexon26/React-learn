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
import Select from "./components/UI/select/MySelect";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "ewr", body: "gggg" },
    { id: "2", title: "re 2", body: "ssss" },
    { id: "3", title: "ggg", body: "aaaa" },
    { id: "4", title: "hhh", body: "rrrr" },
  ]);
  const [options, setOptions] = useState([
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    // setPosts([...posts, newPost]);
  };

  const sortPost = (sort) => {
    console.log(sort)
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange = {sortPost}
          defaultValue="Сортировать по:"
          options={options}
        />
      </div>
      {posts.length ? (
        <PostList posts={posts} title="Список постов 1" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов не найдено</h1>
      )}
    </div>
  );
}

export default App;
