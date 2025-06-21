import React, { useState} from "react";
import '../../utils/subject.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Books = (props) => {
  const [showPdf, setShowPdf] = useState(true);

   const [showElem, setShowElem] = useState(false);
  const shuter =()=>{
    setShowPdf(!showPdf);
  }
      
     const location =useLocation();


  useEffect(() => {
    const scroll = location.state?.dissapear;
    if (scroll ) {

            setShowElem(true);
    }
  }, [location]);
  return (
    <div  style={{ display: showElem ? 'block' : 'none' }} id="books" className="books">
     <div className="container1">
        <h1>{props.title}</h1>
        <p className="description">{props.description}</p>

      <div className="viewer-btn">
        <button onClick={shuter}>
          <i className="fas fa-book-open"></i> View Book
        </button>
      </div>


        <iframe className={`bookpdf ${showPdf && "open"}`}
          id="book-pdf"
          src="Class-11-Chemistry-Book.pdf"
          title="Class 11 Chemistry Book"
        ></iframe>
  
    </div></div>
  );
};

export default Books;
