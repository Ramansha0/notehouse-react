import React, { useState } from 'react';
import '../../App.css';
import '../../utils/subject.css';
import '../../utils/Book.css';

const Book = ({ title, description, pdfName }) => {
  const [showPDF, setShowPDF] = useState(false);
  const [shown, setShown] = useState(false);

  const handleShowPDF = () => {
    setShown(!shown);
    setShowPDF(true);
    setTimeout(() => {
      const viewer = document.getElementById('pdfViewer');
      if (viewer) {
        window.scrollTo({ top: viewer.offsetTop - 50, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div>
      <header>
        <h2>{title} Set Book Viewer</h2>
      </header>

      <main>
        <h3>About this Book</h3>
        <p>{description}</p>

        <p>
          Use the button below to view or study the full {title} book online.
        </p>

        <button onClick={handleShowPDF}>📖 Open {title} Book</button>

        <div className={`pdf-container${shown ? " open" : ""}`} id="pdfViewer">
          <iframe src={pdfName} title={`${title} Book`}></iframe>
        </div>
      </main>
    </div>
  );
};

export default Book;
