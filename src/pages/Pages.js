import React from "react";

import { Route, Routes } from "react-router-dom";
import Index from "./introduce";
import Home from "./Home";
import JoinUs from "./JoinUs";

const Pages = () => (
  <Routes>
    <Route path={""} element={<Home />} />
    <Route path={"/"} element={<Home />} />
    <Route path={"/joinus/*"} element={<JoinUs />} />
    <Route path="/introduce/*" element={<Index />} />
  </Routes>
);

export default Pages;
