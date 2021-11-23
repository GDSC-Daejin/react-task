import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pages from '../pages/Pages';

const Main = () => (
  <>
    <Routes>
      <Route path="" element={<Pages />} />
    </Routes>
  </>
);

export default Main;
