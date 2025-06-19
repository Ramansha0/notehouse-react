import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Eng from './Eng.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Footer from '../../components/Footer/Footer.jsx'
const Computer = () => {

useEffect(() => {
    initNotehouseScripts();
  }, []);





  return (
    <div>
      <Navbar />
       <Eng/>
    <Secondl/>
    <Footer/>

    </div>
  )
}

export default Computer;
