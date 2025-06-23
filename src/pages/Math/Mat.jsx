import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Mat = () => {
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
 
   const change3 = () => {
    setPdf("https://www.mozilla.org/media/MPL/2.0/index.815ca599c9df.pdf"); // another sample PDF
  };
 const change4 = () => {
    setPdf("https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"); // another sample PDF
  };
 const change5 = () => {

    setPdf(" https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"); // another sample PDF
  };



  const location = useLocation();
  useEffect(() => {
    const scrollTarget = location.state?.scrollto;
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);


  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const scrolldown1 = location.state?.scrolldown;
    if (scrolldown1) {
      setShowElement(true);
    }
  }, [location]);

  return (
    <div>
         <div className="subject">
        <img className="glass" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1UsthSmB9pgA9nA9TOBHuGEi5SBcciJpQ&s" alt="Math" />
        <p id='topic' className="topic">Mathematics</p>
      </div>

      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Each Math Notes</p>
            <p>Here you can find almost every revised note of mathematics.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change1(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Maths Set Books</p>
            <p>Here you can find all chapters from the official set book.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { change2(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS - XI Mathematics Book</p>
            <p>Here you can access the full NEB mathematics book.</p>
            <p>Batch - 2081</p>
          </div>
        </div>

        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>Math Chapters</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">Set Theory</div>
              <div className="chap1" id="two">Relations and Functions</div>
              <div className="chap1">Linear Equations</div>
              <div className="chap1">Quadratic Equations</div>
              <div className="chap1">Trigonometry</div>
              <div className="chap1">Sequences and Series</div>
              <div className="chap1">Complex Numbers</div>
              <div className="chap1">Vectors</div>
            </div>
            <div className="side2">
              <div className="chap1">Matrices</div>
              <div className="chap1">Determinants</div>
              <div className="chap1">Limits</div>
              <div className="chap1">Derivatives</div>
              <div className="chap1">Integration</div>
              <div className="chap1">Statistics</div>
              <div className="chap1">Probability</div>
              <div className="chap1">Mensuration</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Class 11 Math Syllabus</h1>
      <h2>Overview</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        Mathematics in Class 11 covers foundational topics in algebra, calculus, geometry, and statistics that are essential for advanced studies.
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>
        <li><strong>Set Theory</strong> – Basic concepts, Venn diagrams.</li>
        <li><strong>Relations and Functions</strong> – Domain, range, types of functions.</li>
        <li><strong>Trigonometry</strong> – Identities, equations, and applications.</li>
        <li><strong>Algebra</strong> – Linear and quadratic equations.</li>
        <li><strong>Coordinate Geometry</strong> – Straight lines, circles, conic sections.</li>
        <li><strong>Calculus</strong> – Limits, derivatives, and basic integration.</li>
        <li><strong>Vectors and 3D Geometry</strong> – Vector operations and applications.</li>
        <div id='con' className={`con ${showup && "open"}`}>
          <li><strong>Matrices and Determinants</strong> – Matrix operations, solving systems.</li>
          <li><strong>Statistics</strong> – Mean, median, mode, standard deviation.</li>
          <li><strong>Probability</strong> – Theoretical and experimental probabilities.</li>
          <li><strong>Mensuration</strong> – Surface areas and volumes.</li>
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
          <iframe className="area" src={pdf} title="Math Notes"></iframe>
          <div className="divider"></div>
          <div className="three1">
            <div className="boxes2 box-style1" onClick={()=>{change3(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Math Question Papers</p>
              <p className="box-desc">Includes frequently asked questions from terminal exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style2" onClick={()=>{change4(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Current News NEB</p>
              <p className="box-desc">Latest updates related to NEB Mathematics syllabus and exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style3"onClick={()=>{change5(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Practice Questions</p>
              <p className="box-desc">Practice math questions from past exams and model sets.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
          </div>
        </div>
        <p className='bow' style={{ fontSize: '18px', fontWeight: '500', marginLeft: '40px' }}>
          Adjust the PDF view as per your comfort.
        </p>
      </div>
    </div>
  );
};

export default Mat;
