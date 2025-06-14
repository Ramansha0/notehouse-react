// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Link  } from 'react-router-dom';
import App from './App.jsx';
import Physics from './Physics.jsx';


function Layout() {
  return (
    <div>
    
      
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/physics" element={<Physics />} />
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
