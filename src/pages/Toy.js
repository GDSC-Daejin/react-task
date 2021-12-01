import React from "react";

import { Route, Routes } from "react-router-dom";
import Introduce from "./Introduce";
import Home from "./Home";
import JoinUs from "./JoinUs";
import Navigation from "../components/navigation/Navigation";

const Pages = () => (
  <Routes>
    <Route path={"/p1"} element={<project1/>} />
    <Route path={"/p2"} element={<project2/>} />
    <Route path={"/p3"} element={<project3/>} />
    <Route path={"/p4"} element={<project4/>} />
  </Routes>
);

export default Toys;
