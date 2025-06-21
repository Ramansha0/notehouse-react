import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Secondl from '../../components/Body1/Secondl.jsx';
import Phy from './Phy.jsx';
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css';
import Footer from '../../components/Footer/Footer.jsx';
import Books from '../../components/Body1/Books.jsx';

const Physics = () => {


  useEffect(() => {
    initNotehouseScripts();
  }, []);

  return (
    <div>
      <Navbar />
      <Phy />
      <Secondl />
      <Books
        title="📘 Class 11 Physics Full Book"
        description="Read the complete NEB Physics book online. Click the button below to start viewing."
      />
      <Footer />
    </div>
  );
};

export default Physics;
