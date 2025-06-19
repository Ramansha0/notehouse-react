import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Body from './components/Body1/Body.jsx';
import Foot from './components/Footer/Foot.jsx';
import { initNotehouseScripts } from './utils/notehouse'; // your JS logic

const App = () => {
  useEffect(() => {
    initNotehouseScripts();
  }, []);
 
  return (
    <div>
      <Navbar/>
      <Body/>
      <Foot/>
    </div>
  );
}
export default App;
