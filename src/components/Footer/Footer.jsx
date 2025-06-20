import React from 'react';

import '../../utils/subject.css';
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="contu">
    <footer>
      <div className='firsto'
        style={{
          backgroundColor: '#71b6ff',
          padding: '15px 20px',
          textAlign: 'center',
          fontSize: '18px',
          color: 'black',
          marginBottom: '20px',
        
        }}
      >
        We are dedicated to providing high-quality educational resources to empower learners worldwide.
        Our mission is to make education accessible, engaging, and innovative for students of all levels.
      </div>
<div className="lastpage">
  <div className="para">
    <p className="para-text">
      We offer top-quality educational resources, assignment help, and academic support for students.  
      Our expert team ensures well-researched, plagiarism-free, and timely delivered assignments  
      to help learners achieve their academic goal with confidence.
    </p>

    <h3 className="para-heading">Pending Tasks & Updates</h3>

    <p className="para-text">
      We constantly update our platform to provide better services. Upcoming features include  
      interactive study materials, live tutoring, and enhanced plagiarism-checking tools.  
      Stay tuned for more improvements!
    </p>
  </div>

  <div className="form">
    <h1 className="form-title">Send Your Feedback</h1>

    <form action="#" method="post">
      <textarea
        name="comment"
        placeholder="Write your comment..."
        rows="4"
        className="form-textarea"
      ></textarea>
      <br />
      <button type="submit" className="form-button">Submit</button>
    </form>
  </div>
</div>

   <div className="scroll-up-btn" id="scrollUpBtn"><FaArrowUp/></div>

      <div className='lasto'
        style={{
          backgroundColor: '#0b3d91',
          color: '#fff',
          padding: '2px 2px 30px 10px',
          textAlign: 'center',
          fontSize: '16px',
          height:'50px'
          
        }}
      >
        <p>
          We are dedicated to providing quality education and resources to help students achieve their goals.
        </p>
        <p className='la'>&copy; 2025 NotesHouse. All rights reserved.</p>
      </div>
    </footer></div>
  );
};

export default Footer;
