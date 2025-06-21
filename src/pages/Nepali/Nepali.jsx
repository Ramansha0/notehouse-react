import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Nep from './Nep.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Books from '../../components/Body1/Books.jsx'; 
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
    <Books
  title="📘 Class 11 Nepali Full Book"
  description="Read the complete NEB Nepali book online. Click the button below to start viewing."

/>
    <Footer/>

    </div>
  )
}

export default Nepali;
