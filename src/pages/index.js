import React from "react";
import { Route, Routes } from "react-router-dom";
import Introduce from "./Introduce";
import Home from "./Home";
import JoinUs from "./Joinus";
import CodeOfConduct from "./codeofconduct";
import QnA from "./q&a";
import QnADetail from "./q&a(detail)";

const Pages = () => (
  <Routes>
    <Route path={""} element={<Home />} />
    <Route path={"/"} element={<Home />} />
    <Route path={"/Joinus/*"} element={<JoinUs />} />
    <Route path={"/introduce/*"} element={<Introduce />} />
    <Route path={"/CodeOfConduct/*"} element={<CodeOfConduct />} />
    <Route path={"/qna/*"} element={<QnA />} />
    <Route path={"/qna/:id"} element={<QnADetail />} />
  </Routes>
);

export default Pages;
