import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Book from '../../components/Book/Book.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { initNotehouseScripts } from '../../utils/notehouse';
const Computerbook = () => {
  
useEffect(() => {
    initNotehouseScripts();
  }, []);



  return (
    <div>
      <Navbar/>
  <Book
  title="Class 11 Computer"
  description="This is the official computer Set Book for Class 11 NEB Curriculum. It covers theoretical and practical concepts for students preparing for higher-level science studies."
  pdfName="https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
/>

      <Footer/>
    </div>
  )
}

export default Computerbook;
