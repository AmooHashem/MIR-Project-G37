import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ElasticSearch from '../pages/ElasticSearch';
import Iman from '../pages/Iman';
import HW3 from '../pages/HW3';
import HW4 from '../pages/HW4';
import HW5 from '../pages/HW5';


const Root = () => {
  return (
    <Routes>
      <Route path="/elastic-search" element={<ElasticSearch />} />
      <Route path="/hw3" element={<HW3 />} />
      <Route path="/hw4" element={<HW4 />} />
      <Route path="/hw5" element={<HW5 />} />
      <Route path="/" element={<Iman />} />
    </Routes>
  );
};
export default Root;
