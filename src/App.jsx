import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Secondlast from './components/Footer/Secondl.jsx';
import Phy from './components/Phy.jsx';
const App = () => {

  return (
  <div>
    <Navbar />  
  <Phy />
    <Secondlast />
  <Footer />
    
</div>
  );
};

export default App;

