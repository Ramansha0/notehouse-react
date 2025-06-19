import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Nep from './Nep.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Footer from '../../components/Footer/Footer.jsx'
const Nepali = () => {

useEffect(() => {
    initNotehouseScripts();
  }, []);





  return (
    <div>
      <Navbar />
       <Nep />
    <Secondl/>
    <Footer/>

    </div>
  )
}

export default Nepali;
