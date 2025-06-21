import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Chem from './Chem.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
import Navbar from '../../components/Navbar/Navbar.jsx';
import '../../utils/subject.css'
import Footer from '../../components/Footer/Footer.jsx'
import Books from '../../components/Body1/Books.jsx';
const Chemistry = () => {

useEffect(() => {
    initNotehouseScripts();
  }, []);





  return (
    <div>
      <Navbar />
       <Chem/>
    <Secondl/>
    <Books
  title="📘 Class 11 Chemistry Full Book"
  description="Read the complete NEB Chemistry book online. Click the button below to start viewing."

/>
    <Footer/>

    </div>
  )
}

export default Chemistry;
