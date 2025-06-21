import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Comp from './Comp.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Footer from '../../components/Footer/Footer.jsx'
import Books from '../../components/Body1/Books.jsx';
const Computer = () => {

useEffect(() => {
    initNotehouseScripts();
  }, []);





  return (
    <div>
      <Navbar />
       <Comp />
    <Secondl/>
    <Books
  title="📘 Class 11 Computer Full Book"
  description="Read the complete NEB Computer book online. Click the button below to start viewing."

/>
    <Footer/>

    </div>
  )
}

export default Computer;
