import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import FormData from './Component/FormData';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormData />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;