import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Todo, Login } from "../src/pages";


import "./App.scss";

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
