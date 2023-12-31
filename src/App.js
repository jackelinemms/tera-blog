import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import PostForm from "./components/pages/PostForm"; 

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css"

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<UserBlog />} /> 
      <Route path="/users/:userId/post" element={<PostForm />} /> 
      <Route path="*" element={<div><h1>Not Found</h1></div>} />
    </Routes>
  </BrowserRouter>);
}
//os dois pontos : definem rotas variáveis 
//path * é pra pegar rotas que não existem, ou seja o erro 404

export default App;
