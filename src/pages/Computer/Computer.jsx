import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Comp from './Comp.jsx'
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
       <Comp />
    <Secondl/>

    <Footer/>

    </div>
  )
}

export default Computer;
