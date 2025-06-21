import React, { useEffect } from 'react';

import Secondl from '../../components/Body1/Secondl.jsx'
import Mat from './Mat.jsx'
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
       <Mat />
    <Secondl/>
    <Books
  title="📘 Class 11 Math Full Book"
  description="Read the complete NEB Math book online. Click the button below to start viewing."

/>
    <Footer/>

    </div>
  )
}

export default Chemistry;
