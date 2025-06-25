import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Comp = () => {
  const [showup, setShowup] = useState(false);
  const [pdf, setPdf] = useState(true);


  const navigate = useNavigate();

  const handleGoToThirdPage = () => {
    navigate('/computer-book'); // replace with your actual route
  };







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
       <button className='topbtn'onClick={()=> document.getElementById("books")?.scrollIntoView({behavior :"smooth"})} style={{ display: showElement ? 'block' : 'none' }}>View Books !</button>
      <div className="subject">
        <img className="glass" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1UsthSmB9pgA9nA9TOBHuGEi5SBcciJpQ&s" alt="Computer" />
        <p id='topic' className="topic">Computer </p>
      </div>

      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS-XI All Computer Notes</p>
            <p>Here you can find almost every revised note of computer science.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { handleGoToThirdPage();change1(); }}>
            <p>NEB CLASS-XI Computer Set Book</p>
            <p>Here you can find all chapters from the official set book.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() =>{ handleGoToThirdPage();change1(); }}>
            <p>NEB CLASS  - XI Computers  Books</p>
            <p>Here you can access the full NEB computer science book.</p>
            <p>Batch - 2081</p>
          </div>
        </div>

        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>Computer Chapters</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">Introduction to Computers</div>
              <div className="chap1" id="two">Computer Systems</div>
              <div className="chap1">Input and Output Devices</div>
              <div className="chap1">Memory and Storage</div>
              <div className="chap1">Operating Systems</div>
              <div className="chap1">Software and Applications</div>
              <div className="chap1">Number System</div>
              <div className="chap1">Boolean Algebra</div>
            </div>
            <div className="side2">
              <div className="chap1">Computer Architecture</div>
              <div className="chap1">Networking</div>
              <div className="chap1">Internet and Web</div>
              <div className="chap1">Multimedia</div>
              <div className="chap1">Database Management</div>
              <div className="chap1">Programming Logic</div>
              <div className="chap1">C Programming</div>
              <div className="chap1">Cyber Security</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Class 11 Computer Science Syllabus</h1>
      <h2>Overview</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        Computer Science in Class 11 introduces students to basic concepts in hardware, software, logic, networking, databases, programming, and security essential for further IT education.
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>
        <li><strong>Introduction to Computers</strong> – Definition, characteristics, evolution.</li>
        <li><strong>Computer Systems</strong> – Components, architecture, and system units.</li>
        <li><strong>Number System</strong> – Binary, decimal, conversions, complements.</li>
        <li><strong>Boolean Algebra</strong> – Logic gates and simplification techniques.</li>
        <li><strong>Networking</strong> – Network types, topology, protocols.</li>
        <li><strong>Multimedia</strong> – Elements, tools, and applications.</li>
        <div id='con' className={`con ${showup && "open"}`}>
          <li><strong>Database Management</strong> – DBMS concepts, tables, records.</li>
          <li><strong>Programming</strong> – Algorithm, flowchart, pseudocode basics.</li>
          <li><strong>C Programming</strong> – Syntax, variables, loops, functions.</li>
          <li><strong>Cyber Security</strong> – Threats, malware, digital safety.</li>
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
          <iframe className="area" src={pdf} title="Computer Notes"></iframe>
          <div className="divider"></div>
          <div className="three1">
            <div className="boxes2 box-style1" onClick={()=>{change3(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}} >
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Computer Question Papers</p>
              <p className="box-desc">Includes frequently asked questions from terminal exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style2"onClick={()=>{change4(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Current News NEB</p>
              <p className="box-desc">Latest updates related to NEB Computer syllabus and exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style3"onClick={()=>{change5(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Practice Questions</p>
              <p className="box-desc">Practice computer questions from past exams and model sets.</p>
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

export default Comp;
