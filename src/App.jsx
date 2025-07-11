import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/game">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App