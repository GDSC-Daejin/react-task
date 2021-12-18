import "./App.css";
import React from "react";
import Navigation from "./components/common/Navigation";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
