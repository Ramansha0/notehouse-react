import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Mat from './Mat.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Footer from '../../components/Footer/Footer.jsx'
const Chemistry = () => {

useEffect(() => {
    initNotehouseScripts();
  }, []);





  return (
    <div>
      <Navbar />
       <Mat />
    <Secondl/>

    <Footer/>

    </div>
  )
}

export default Chemistry;
