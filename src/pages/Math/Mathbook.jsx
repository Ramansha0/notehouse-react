import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Book from '../../components/Book/Book.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
const Mathbook = () => {
  
useEffect(() => {
    initNotehouseScripts();
  }, []);
  return (
    <div>
      <Navbar/>
  <Book
  title="Class 11 Math"
  description="This is the official math Set Book for Class 11 NEB Curriculum. It covers theoretical and practical concepts for students preparing for higher-level science studies."
  pdfName="https://lib.moecdc.gov.np/elibrary/pages/download.php?ext=pdf&ref=1009"
/>

      <Footer/>
    </div>
  )
}

export default Mathbook;
