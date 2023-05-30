import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPass from './pages/reset-pass/ResetPass';
import RequestPass from './pages/request-pass/RequestPass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/restore-password/*" element={<RequestPass />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;