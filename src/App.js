// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./features/dataSlice";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
