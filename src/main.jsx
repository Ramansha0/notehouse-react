// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import Physics from './pages/Physics/Physics.jsx';
import Chemistry from './pages/Chemistry/Chemistry.jsx';
import Math from './pages/Math/Math.jsx';
import Computer from'./pages/Computer/Computer.jsx'
import Nepali from './pages/Nepali/Nepali.jsx'
import English from './pages/English/English.jsx'
function Layout() {
  return (
    <div>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/physics" element={<Physics />} />
  <Route path="/chemistry" element={<Chemistry />} />
  <Route path="/math" element={<Math />} />
  <Route path="/computer" element={<Computer />} />
  <Route path="/nepali" element={<Nepali />} />
  <Route path="/english" element={<English />} />
  
  {/* 404 should be last */}
  <Route path="*" element={<h1>404 - Page Not Found</h1>} />
</Routes>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Layout />
    </HashRouter>
  </React.StrictMode>
);
