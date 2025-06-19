import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Chem = () => {
  const [showup, setShowup] = useState(false);
  const [pdf, setPdf] = useState(true);

  const viewport = () => {
    setShowup(!showup);
  }

  const change = () => {
    setPdf("https://www.africau.edu/images/default/sample.pdf");
  }
  const change1 = () => {
    setPdf("https://www.orimi.com/pdf-test.pdf");
  }
  const change2 = () => {
    setPdf("https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf");
  }

  const location = useLocation();
  useEffect(() => {
    const scrollTarget = location.state?.scrollto;
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div>
      <div className="subject">
        <img className="glass" src="https://thumbs.dreamstime.com/b/colorful-chemistry-lab-flasks-test-tubes-experiments-science-research-education-liquids-analy-illustration-various-filled-358839813.jpg" alt="Chemistry" />
        <p id='topic' className="topic">Chemistry</p>
      </div>

      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Chemistry Notes</p>
            <p>Here you can find almost every revised notes of chemistry.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change1(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Chem Set Books</p>
            <p>Here you can find almost every revised notes of chemistry.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change2(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Chemistry Books</p>
            <p>Here you can find almost every revised notes of chemistry.</p>
            <p>Batch - 2081</p>
          </div>
        </div>

        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>Chemistry Chapters</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">Fundamental Chemistry</div>
              <div className="chap1" id="two">Stoichiometry</div>
              <div className="chap1">Atomic Structure</div>
              <div className="chap1">Periodic Table</div>
              <div className="chap1">Chemical Bonding</div>
              <div className="chap1">Oxidation</div>
              <div className="chap1">Equilibrium</div>
              <div className="chap1">States of Matter</div>
            </div>
            <div className="side2">
              <div className="chap1">Non-Metals</div>
              <div className="chap1">Metallurgy</div>
              <div className="chap1">Alkali/Alkaline Earth Metals</div>
              <div className="chap1">Intro to Organic Chemistry</div>
              <div className="chap1">Nomenclature</div>
              <div className="chap1">Hydrocarbons</div>
              <div className="chap1">Aromatic Hydrocarbons</div>
              <div className="chap1">Applied Chemistry</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Class 11 Chemistry Syllabus</h1>
      <h2>Overview</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        Chemistry in Class 11 is divided into Physical, Organic, and Inorganic Chemistry. It covers basic to advanced topics essential for further study.
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>
        <li><strong>Some Basic Concepts of Chemistry</strong> – Mole concept, atomic and molecular masses.</li>
        <li><strong>Structure of Atom</strong> – Atomic models, quantum numbers, orbitals.</li>
        <li><strong>Classification of Elements and Periodicity</strong> – Periodic table and trends.</li>
        <li><strong>Chemical Bonding</strong> – Bonds, VSEPR theory, hybridization.</li>
        <li><strong>States of Matter</strong> – Gases and liquids, intermolecular forces.</li>
        <li><strong>Thermodynamics</strong> – Laws, enthalpy, entropy.</li>
        <li><strong>Equilibrium</strong> – Chemical and ionic equilibrium.</li>
        <div id='con' className={`con ${showup && "open"}`}>
          <li><strong>Redox Reactions</strong> – Oxidation, reduction, balancing equations.</li>
          <li><strong>Hydrogen</strong> – Properties and uses.</li>
          <li><strong>s-Block Elements</strong> – Alkali and alkaline earth metals.</li>
          <li><strong>p-Block Elements</strong> – Group 13 and 14 chemistry.</li>
          <li><strong>Basic Organic Chemistry</strong> – Principles and techniques.</li>
          <li><strong>Hydrocarbons</strong> – Alkanes, alkenes, alkynes.</li>
          <li><strong>Environmental Chemistry</strong> – Pollution, acid rain, ozone layer.</li>
        </div>
        <div className="dropdown" id="dropdown" onClick={viewport}><IoIosArrowDropdown /></div>
      </ul>

      <div id='nextpage1' className="nextpage1" style={{ height: '600px' }}>
        <h1 className='hlo' style={{ marginLeft: '-400px' }}>PDF Viewer</h1>
        <div className="btnandtitle">
          <p>You Can see your notes below:</p>
          <button className="click" onClick={() => document.getElementById("page")?.scrollIntoView({ behavior: "smooth" })}>Click Here!</button>
        </div>

        <div className="ques" id='ques'>
          <iframe className="area" src={pdf} title="Chemistry Notes"></iframe>
          <div className="divider"></div>
          <div className="three1">
            <div className="boxes2 box-style1">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Chemistry Question Papers</p>
              <p className="box-desc">Here you can find most repeated questions in the exam. First Terminal, Second Terminal...</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style2">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Current News NEB</p>
              <p className="box-desc">Latest updates related to NEB Chemistry syllabus and exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style3">
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Practice Questions</p>
              <p className="box-desc">Practice questions for Chemistry from past exams and model sets.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
          </div>
        </div>
        <p className='bow' style={{ fontSize: '18px', fontWeight: '500', marginLeft: '40px' }}>
          Maintain the view of PDF according to your comfort.
        </p>
      </div>
    </div>
  );
};

export default Chem;
