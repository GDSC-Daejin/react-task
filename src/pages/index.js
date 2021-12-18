import React from "react";

import { Route, Routes } from "react-router-dom";
import Introduce from "./Introduce";
import Home from "./Home";
import JoinUs from "./Joinus";
import CodeOfConduct from "./codeofconduct";

const Pages = () => (
  <Routes>
    <Route path={""} element={<Home />} />
    <Route path={"/"} element={<Home />} />
    <Route path={"/Joinus/*"} element={<JoinUs />} />
    <Route path={"/introduce/*"} element={<Introduce />} />
    <Route path={"/CodeOfConduct/*"} element={<CodeOfConduct />} />
  </Routes>
);

export default Pages;
