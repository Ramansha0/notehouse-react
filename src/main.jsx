// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import App from './App.jsx';
import First from './component1/First.jsx';


function Layout() {
  return (
    <div>
    
      
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/notes" element={<App />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
