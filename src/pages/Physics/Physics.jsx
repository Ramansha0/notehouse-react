import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Phy from './Phy.jsx';
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
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
    <Secondl/>
    <Books/>
    <Footer/>

    </div>
  )
}

export default Physics;
