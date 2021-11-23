import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";

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
