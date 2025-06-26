import React, { useState } from 'react';
import '../../App.css';
import '../../utils/subject.css';
import '../../utils/Book.css';

const Book = ({ title, description, pdfName }) => {
  const [shown, setShown] = useState(false);

  const handleShowPDF = () => {
    setShown(true);

  };

  return (
    <div>
      <main>
        <header>
          <h2>{title} Set Book Viewer</h2>
        </header>

        <h3>About this Book</h3>
        <p>{description}</p>

        <p>
          Use the button below to view or study the full {title} book online.
        </p>

        <button onClick={handleShowPDF}>📖 Open {title} Book By CDC</button>

        {shown && (
          <div className="pdf-container" id="pdfViewer">
            <iframe src={pdfName} title={`${title} Book`} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Book;
