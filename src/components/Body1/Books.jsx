import React, { useState, useEffect } from "react";
import '../../utils/subject.css';
import { useLocation } from 'react-router-dom';

const Books = (props) => {
  const [showPdf, setShowPdf] = useState(true);
  const [showBooks, setShowBooks] = useState(false); // default: hidden

  const location = useLocation();

  useEffect(() => {
    const shouldShowBooks = location.state?.scrolldown;
    if (shouldShowBooks) {
      setShowBooks(true); // ✅ show when state is passed
    }
  }, [location]);

  const shuter = () => {
    setShowPdf(!showPdf);
  };

  return (
    showBooks && (
      <div className="books" id="books">
        <div className="container1">
          <h1>{props.title}</h1>
          <p className="description">{props.description}</p>

          <div className="viewer-btn">
            <button onClick={shuter}>
              <i className="fas fa-book-open"></i> View Book
            </button>
          </div>

          <iframe
            className={`bookpdf ${showPdf ? "open" : ""}`}
            id="book-pdf"
            src="Class-11-Chemistry-Book.pdf"
            title="Class 11 Chemistry Book"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default Books;
