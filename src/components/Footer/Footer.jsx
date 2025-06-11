import React from 'react';
 // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p
        style={{
          fontSize: '17px',
          background: '#71b6ff',
          height: '50px',
          marginTop: '-10px',
          textAlign: 'center',
          paddingTop: '10px',
        }}
      >
        We are dedicated to providing high-quality educational resources to empower
        learners worldwide. Our mission is to make education accessible,
        engaging, and innovative for students of all levels.
      </p>
      <div
        className="lastpage"
        style={{ display: 'flex', height: '340px', background: '#797d80' }}
      >
        <div className="para" style={{ width: '500px' }}>
          <p
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: '20px',
              paddingLeft: '20px',
              width: '450px',
            }}
          >
            We offer top-quality educational resources, assignment help, and
            academic support for students. Our expert team ensures
            well-researched, plagiarism-free, and timely delivered assignments
            to help learners achieve their academic goal with confidence.
          </p>

          <h3 style={{ color: 'white', width: '450px', paddingTop: '20px' }}>
            Pending Tasks & Updates
          </h3>
          <p
            style={{
              color: 'white',
              textAlign: 'start',
              paddingTop: '20px',
              paddingLeft: '20px',
              marginTop: '-20px',
              width: '450px',
            }}
          >
            We constantly update our platform to provide better services.
            Upcoming features include interactive study materials, live tutoring,
            and enhanced plagiarism-checking tools. Stay tuned for more
            improvements!
          </p>
        </div>

        <div
          className="form"
          style={{ marginLeft: '150px', width: '100%', marginRight: '40px' }}
        >
          <h1 style={{ color: 'aliceblue', marginLeft: '50px' }}>
            Send Your Feedback
          </h1>

          <form id="name" name="name" action="#" method="post">
            <textarea
              name="comment"
              placeholder="Write your comment..."
              rows="4"
              style={{ width: '100%', marginRight: '20px' }}
            />
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: '#f8b400',
                marginTop: '5px',
                color: '#222',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footer-content" styele={{ padding: '20px', background: 'black', color: '#fff' }}>
        <p>
          We are dedicated to providing quality education and resources to help
          students achieve their goals.
        </p>
        <p>&copy; 2024 NotesHouse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
