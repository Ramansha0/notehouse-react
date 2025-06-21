import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Eng from './Eng.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Books from '../../components/Body1/Books.jsx';
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
    <Books
  title="📘 Class 11 English Full Book"
  description="Read the complete NEB English book online. Click the button below to start viewing."

/>
    <Footer/>

    </div>
  )
}

export default Computer;
