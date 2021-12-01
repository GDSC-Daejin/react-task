import "./App.css";
import React from "react";
import Navigation from "./components/common/Navigation";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
    </>
  );
}

export default App;
