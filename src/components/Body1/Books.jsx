import React, { useState } from "react";
import '../../utils/subject.css';

const Books = (props) => {
  const [showPdf, setShowPdf] = useState(true);

  const shuter =()=>{
    setShowPdf(!showPdf);
  }
  return (
    <div className="books">
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
