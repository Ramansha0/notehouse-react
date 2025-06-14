import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundColor: '#71b6ff',
          padding: '15px 20px',
          textAlign: 'center',
          fontSize: '18px',
          color: 'black',
          marginBottom: '20px'
        }}
      >
        We are dedicated to providing high-quality educational resources to empower learners worldwide.
        Our mission is to make education accessible, engaging, and innovative for students of all levels.
      </div>

      <div className="lastpage" style={{ display: 'flex', height: '380px', background: '#797d80' }}>
  <div className="para" style={{ width: '500px' }}>
    <p
      style={{
        color: 'white',
        textAlign: 'center',
        paddingTop: '27px',
        paddingLeft: '30px',
        width: '500px',
        fontSize:'18px'
      }}
    >
      We offer top-quality educational resources, assignment help, and academic support for students.  
      Our expert team ensures well-researched, plagiarism-free, and timely delivered assignments  
      to help learners achieve their academic goal with confidence.
    </p>

    <h3 style={{ color: 'white', width: '450px', marginLeft: '60px',paddingTop: '17px',fontSize:'22px' }}>Pending Tasks & Updates</h3>

    <p
      style={{
   color: 'white',
        textAlign: 'center',
        paddingTop: '5px',
        paddingLeft: '30px',
        width: '500px',
        fontSize:'18px'
      }}
    >
      We constantly update our platform to provide better services. Upcoming features include  
      interactive study materials, live tutoring, and enhanced plagiarism-checking tools.  
      Stay tuned for more improvements!
    </p>
  </div>

  <div className="form" style={{ marginLeft: '150px', width: '100%', marginRight: '40px' }}>
    <h1 style={{ color: 'aliceblue', marginLeft: '50px' ,fontSize:'32px'}}>Send Your Feedback</h1>

    <form action="#" method="post">
      <textarea
        name="comment"
        placeholder="Write your comment..."
        rows="4"
        style={{ width: '90%', marginRight: '20px',backgroundColor:'white',height:'60px' }}
      ></textarea>
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: '#f8b400',
          marginTop: '5px',
          color: '#222',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  </div>
</div>


      <div
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
        <p>&copy; 2024 NotesHouse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
