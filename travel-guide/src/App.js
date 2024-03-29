import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Destination from "./views/Destination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route
            path="/destination"
            element={<Destination></Destination>}
          ></Route>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
