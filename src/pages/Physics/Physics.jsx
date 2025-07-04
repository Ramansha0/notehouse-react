import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Secondl from '../../components/Body1/Secondl.jsx';
import Phy from './Phy.jsx';
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css';
import Footer from '../../components/Footer/Footer.jsx';


const Physics = () => {


  useEffect(() => {
    initNotehouseScripts();
  }, []);

  return (
    <div>
      <Navbar />
      <Phy />
      <Secondl />
    
      <Footer />
    </div>
  );
};

export default Physics;
