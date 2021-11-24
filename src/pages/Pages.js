import React from "react";

import { Route, Routes } from "react-router-dom";
import Introduce from "./Introduce";
import Home from "./Home";
import JoinUs from "./JoinUs/JoinUs";
import JoinUsTeam from "./JoinUsTeam/JoinUsTeam";

const Pages = () => (
  <Routes>
    <Route path={""} element={<Home />} />
    <Route path={"/"} element={<Home />} />
    <Route path={"/joinus/*"} element={<JoinUs />} />
    <Route path={"/joinus/:id/*"} element={<JoinUsTeam />} />
    <Route path="/introduce/*" element={<Introduce />} />
  </Routes>
);

export default Pages;
