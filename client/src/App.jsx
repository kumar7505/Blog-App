import { useState } from "react";
import Header from "./components/header.jsx";
import Post from "./components/post.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import IndexPages from "./components/pages/indexpage.jsx";
import Loginpage from "./components/pages/loginpage.jsx";
import Registerpage from "./components/pages/registerpage.jsx";
import UserContextProvider from "./UserContext.jsx";
import CreatePost from "./components/pages/createpost.jsx";
import PostPage from "./components/pages/postpage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPages />} />
          <Route path="/login" element={<Loginpage />} /> 
          <Route path="/register" element={<Registerpage />} />
          <Route path="/create" element={<CreatePost />}/>
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
