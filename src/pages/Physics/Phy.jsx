import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";


const Phy = () => {
  const [showup, setShowup] = useState(false);
  const [pdf, setPdf] = useState(true);

  const viewport = () => {
    setShowup(!showup);
  }

  const change = () => {
    setPdf("https://www.africau.edu/images/default/sample.pdf"

    );
  }
  const change1 = () => {
    setPdf("https://www.orimi.com/pdf-test.pdf"); // another sample PDF
  };

  const change2 = () => {
    setPdf("https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"); // another sample PDF
  };


   const location = useLocation();

useEffect(() => {
  const scrollTarget = location.state?.scrollto;

  if (scrollTarget) {
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Clear scroll state so it doesn't persist
    window.history.replaceState({}, document.title);
  }
}, [location]);

  return (
    <div>
      <div className="subject">
        <img
          className="glass"
          src="https://cdn3.vectorstock.com/i/1000x1000/97/62/basic-physics-icon-related-to-education-two-vector-45329762.jpg" // Update the image path
          alt="Physics"
        />
        <p id='topic' className="topic">Physics</p>
      </div>
      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>
              NEB CLASS - XI All Physics Notes
            </p>
            <p > Here you can find almost every revised note of physics.
            </p>
            <p >Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change1(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>
              NEB CLASS - XI Physics Set Book
            </p>
            <p > Here you can find almost every revised note of physics.
            </p>
            <p >Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change2(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p style={{
              marginLeft:'-40px'
            }}>
              NEB CLASS - XI Physics  Book
            </p>
            <p > Here you can find almost every revised note of physics.
            </p>
            <p >Batch - 2081</p>
          </div>
        </div>
        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>Physics Chapters</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">Fundamental Physics</div>
              <div className="chap1" id="two">Kinematics</div>
              <div className="chap1">Dynamics</div>
              <div className="chap1">Work, Energy, Power</div>
              <div className="chap1"> Rotational Motion</div>
              <div className="chap1">Gravitation</div>
              <div className="chap1"> Bulk Matter</div>
              <div className="chap1">Thermodynamics</div>
            </div>
            <div className="side2">
              <div className="chap1">Oscillations</div>
              <div className="chap1">Waves</div>
              <div className="chap1">Electrostatics</div>
              <div className="chap1"> Electricity</div>
              <div className="chap1">Magnetic Effects of Current</div>
              <div className="chap1">Electromagnetic Induction</div>
              <div className="chap1">Optics</div>
              <div className="chap1">Modern Physics</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Class 11 Physics Syllabus</h1>
      <h2>Overview</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        Physics in Class 11 is divided into various branches covering fundamental concepts that form the basis for advanced studies.
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>

        <li><strong>Fundamental Physics</strong>: Introduction to the basic concepts and principles of physics that form the foundation for further studies.</li>
        <li><strong>Kinematics</strong>: Study of motion without considering the forces that cause it, focusing on concepts like displacement, velocity, and acceleration.</li>
        <li><strong>Dynamics</strong>: Examination of the forces and their effects on motion, including Newton's laws of motion.</li>
        <li><strong>Work, Energy, and Power</strong>: Exploration of the relationship between work, energy, and power, including the work-energy theorem.</li>
        <li><strong>System of Particles and Rotational Motion</strong>: Analysis of the motion of systems of particles and the dynamics of rotational motion.</li>
        <li><strong>Gravitation</strong>: Study of the universal law of gravitation and its implications for celestial bodies and objects on Earth.</li>
        <li><strong>Properties of Bulk Matter</strong>: Investigation of the physical properties of solids, liquids, and gases, including elasticity and fluid dynamics.</li>
        <li><strong>Thermodynamics</strong>: Exploration of the laws of thermodynamics, heat transfer, and the behavior of gases.</li>
        <li><strong>Oscillations</strong>: Study of periodic motion, including simple harmonic motion and the characteristics of oscillating systems.</li>
        <div id='con' className={`con ${showup && "open"}`}><li><strong>Waves</strong>: Examination of wave phenomena, including sound waves, their properties, and behavior.</li>
          <li><strong>Electrostatics</strong>: Introduction to electric charges, electric fields, and the forces between charged objects.</li>
          <li><strong>Current Electricity</strong>: Study of electric current, resistance, and the principles governing electrical circuits.</li>
          <li><strong>Magnetic Effects of Current</strong>: Exploration of the relationship between electricity and magnetism, including magnetic fields produced by currents.</li>
          <li><strong>Electromagnetic Induction</strong>: Study of how changing magnetic fields can induce electric currents in conductors.</li>
          <li><strong>Optics</strong>: Examination of the behavior of light, including reflection, refraction, and optical instruments.</li>
          <li><strong>Modern Physics</strong>: Introduction to concepts in modern physics, including quantum mechanics and relativity.</li>

        </div>
        <div className="dropdown" id="dropdown" onClick={viewport}>  <IoIosArrowDropdown /></div>
      </ul>

      <div id='nextpage1' className="nextpage1" style={{ height: '600px' }}>
        <h1 className='hlo' style={{ marginLeft: '-400px' }}>PDF Viewer</h1>
        <div className="btnandtitle">
          <p>You Can see your notes below:</p>
          <button className="click" onClick={()=>document.getElementById("page")?.scrollIntoView({ behavior: "smooth" })}>Click Here!</button>
        </div>
        <div className="ques" id='ques'>
          <iframe className="area" src={pdf} title="Physics Notes"></iframe>

          <div className="divider"></div>

          <div className="three1">
            <div className="boxes2 box-style1">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Physics Question Papers</p>
              <p className="box-desc">Here you can find most repeated questions in the exam. First Terminal, Second Terminal...</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style2">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Current News NEB</p>
              <p className="box-desc">Here you can find most repeated questions in the exam. First Terminal, Second Terminal...</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style3">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Practice Questions</p>
              <p className="box-desc">Here you can find most repeated questions in the exam. First Terminal, Second Terminal...</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
          </div>
        </div>

        <p className='bow' style={{ fontSize: '18px', fontWeight: '500', marginLeft: '40px' }}>Maintain the view of PDF according to your comfort.</p>



      </div></div>
  )
}

export default Phy
