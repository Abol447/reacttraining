import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Addpost from "./Addpost";
import Posts from "./Posts";
import { createContext, useState } from "react";
import PostContext from "./Postcontex";
function App() {
  const [posts, setPosts] = useState([]);
  const addpost = function (post) {
    setPosts((pre) => [...pre, post]);
  };
  return (
    <PostContext.Provider value={{ posts: posts, addpost: addpost }}>
      <div className="font-mono">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="posts" element={<Posts />} />
            <Route path="addPost" element={<Addpost />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostContext.Provider>
  );
}

export default App;
