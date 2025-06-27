import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Book from '../../components/Book/Book.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
const Englishbook = () => {
  
useEffect(() => {
    initNotehouseScripts();
  }, []);



  return (
    <div>
      <Navbar/>
  <Book
  title="Class 11 English"
  description="This is the official English Set Book for Class 11 NEB Curriculum. It covers theoretical and practical concepts for students preparing for higher-level science studies."
  pdfName="https://moecdc.gov.np/storage/gallery/1673318499.pdf"
/>

      <Footer/>
    </div>
  )
}

export default Englishbook;
