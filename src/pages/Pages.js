import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Introduce from './Introduce';

const Pages = () => (
  <Routes>
    <Route path="/introduce" element={<Introduce />} />
  </Routes>
);

export default Pages;
