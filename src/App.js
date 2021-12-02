import "./App.css";
import React from "react";
import Navigation from "./components/common/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Footer from "./components/Footer/Footer";

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
