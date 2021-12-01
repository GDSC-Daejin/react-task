import React from "react";

import { Route, Routes } from "react-router-dom";
import Index from "./Introduce/index";
import Home from "./Home";
import JoinUs from "./JoinUs/index";
import JoinUsTeam from "./JoinUsTeam/index";

const Pages = () => (
  <Routes>
    <Route path={""} element={<Home />} />
    <Route path={"/"} element={<Home />} />
    <Route path={"/joinus/*"} element={<JoinUs />} />
    <Route path={"/joinus/:id/*"} element={<JoinUsTeam />} />
    <Route path="/introduce/*" element={<Index />} />
  </Routes>
);

export default Pages;