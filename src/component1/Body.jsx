// src/component1/First.jsx
import React from 'react';
import './First.css'; // optional: for styles if needed
import { Link } from 'react-router-dom';
const Body = () => {
  return (
    <>
      <div className="all">
        <div className="lang">
          Good choice for the quality assignments and notes.
          <span className="lang1">Warmly welcome</span>
        </div>
        <img
          className="name1"
          src="https://i.pinimg.com/474x/34/ba/d9/34bad99147d6de21c84516dd093853dd.jpg"
          alt="Banner"
        />
      </div>

      <div className="lang" id="lan">
        Good choice for the quality assignments and notes.
        <span className="lang1">Warmly welcome</span>
      </div>

      <div className="contents">
        <button id="bt0" className="btn">Notes</button>
      </div>

      <div className="line"></div>

      <section className="features">
        <div id="container-page" className="container">
          <div className="cover">
            <p className="head10">Class XI - Notes</p>
          </div>

          <div className="sat">
            <div className="toge">
              {/* Math */}
              <div className="course1">
                <h3 className="ba1">Math</h3>
                <img
                  className="a1"
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/251/195/small/learning-mathematics-of-education-and-knowledge-background-cartoon-illustration-science-technology-engineering-formula-or-basic-math-vector.jpg"
                  alt="Math"
                />
                <a id="classy1" className="btn btn-secondary">Notes</a>
              </div>

              {/* Physics */}
              <div className="course1">
             <h3 className="ba1">Physics</h3>
                <img
                  className="a1"
                  src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170312672/74784719-physics-subject-icon.jpg"
                  alt="Physics"
                />
            <Link to="/notes">  <a style={{position:"absolute"}} id="classy2" className="btn btn-secondary">Notes</a></Link>
              </div>

              {/* Chemistry */}
              <div id="redict" className="course1">
                <h3 className="ba1">Chemistry</h3>
                <img
                  className="a1"
                  src="https://i.pinimg.com/474x/48/a7/a4/48a7a46ab184be143fab29fa53ecfed2.jpg"
                  alt="Chemistry"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <a id="classy3" className="btn btn-secondary">Notes</a>
              </div>
            </div>

            <div className="toge1">
              {/* Nepali */}
              <div className="course1">
                <h3 className="ba1">Nepali</h3>
                <img
                  className="a1"
                  src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png"
                  alt="Nepali"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <a id="classy4" className="btn btn-secondary">Notes</a>
              </div>

              {/* English */}
              <div className="course1">
                <h3 className="ba1">English</h3>
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: 'rgb(136, 28, 28)',
                    border: '5px solid black',
                    marginTop: '0px'
                  }}
                >
                  A
                </h1>
                <a id="classy5" className="btn btn-secondary">Notes</a>
              </div>

              {/* Computer */}
              <div className="course1">
                <h3 className="ba1">Computer</h3>
                <img
                  className="a1"
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                  alt="Computer"
                />
                <a id="classy6" className="btn btn-secondary">Notes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="line"></div>

      <section className="features">
        <div id="container-page" className="container">
          <div className="cover">
            <p className="head10">Class XI - Notes</p>
          </div>

          <div className="sat">
            <div className="toge">
              {/* Math */}
              <div className="course1">
                <h3 className="ba1">Math</h3>
                <img
                  className="a1"
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/251/195/small/learning-mathematics-of-education-and-knowledge-background-cartoon-illustration-science-technology-engineering-formula-or-basic-math-vector.jpg"
                  alt="Math"
                />
                <a id="classy1" className="btn btn-secondary">Notes</a>
              </div>

              {/* Physics */}
              <div className="course1">
                <h3 className="ba1">Physics</h3>
                <img
                  className="a1"
                  src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170312672/74784719-physics-subject-icon.jpg"
                  alt="Physics"
                />
                <a id="classy2" className="btn btn-secondary">Notes</a>
              </div>

              {/* Chemistry */}
              <div id="redict" className="course1">
                <h3 className="ba1">Chemistry</h3>
                <img
                  className="a1"
                  src="https://i.pinimg.com/474x/48/a7/a4/48a7a46ab184be143fab29fa53ecfed2.jpg"
                  alt="Chemistry"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <a id="classy3" className="btn btn-secondary">Notes</a>
              </div>
            </div>

            <div className="toge1">
              {/* Nepali */}
              <div className="course1">
                <h3 className="ba1">Nepali</h3>
                <img
                  className="a1"
                  src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png"
                  alt="Nepali"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <a id="classy4" className="btn btn-secondary">Notes</a>
              </div>

              {/* English */}
              <div className="course1">
                <h3 className="ba1">English</h3>
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: 'rgb(136, 28, 28)',
                    border: '5px solid black',
                    marginTop: '0px'
                  }}
                >
                  A
                </h1>
                <a id="classy5" className="btn btn-secondary">Notes</a>
              </div>

              {/* Computer */}
              <div className="course1">
                <h3 className="ba1">Computer</h3>
                <img
                  className="a1"
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                  alt="Computer"
                />
                <a id="classy6" className="btn btn-secondary">Notes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
