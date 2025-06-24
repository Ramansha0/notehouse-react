import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Eng = () => {
  const [showup, setShowup] = useState(false);
  const [pdf, setPdf] = useState(true);

  const navigate = useNavigate();

  const handleGoToThirdPage = () => {
    navigate('/english-book'); // replace with your actual route
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
    <div>  <div className="subject">
        <img className="glass" src="https://static.vecteezy.com/system/resources/thumbnails/017/300/766/small_2x/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg" alt="English" />
        <p id='topic' className="topic">English</p>
      </div>

      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB CLASS-XI All English Notes</p>
            <p>Here you can find almost every revised note of English subject.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { handleGoToThirdPage();change1(); }}>
            <p>NEB CLASS-XI English Set Book</p>
            <p>All prose, poetry, and grammar from the curriculum set book.</p>
            <p>Batch - 2081</p>
          </div>
          <div className="boxes1" onClick={() => { handleGoToThirdPage();change1(); }}>
            <p>NEB CLASS - XI English Full Book</p>
            <p>Access the complete English book for NEB Class 11.</p>
            <p>Batch - 2081</p>
          </div>
        </div>

        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>English Chapters</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">Grammar</div>
              <div className="chap1" id="two">Essay Writing</div>
              <div className="chap1">Comprehension</div>
              <div className="chap1">One Act Plays</div>
              <div className="chap1">Poetry Interpretation</div>
              <div className="chap1">Narrative Writing</div>
              <div className="chap1">Dialogue Writing</div>
              <div className="chap1">Letter/Application</div>
            </div>
            <div className="side2">
              <div className="chap1">Reading Passages</div>
              <div className="chap1">Poems (Interpretation)</div>
              <div className="chap1">Critical Thinking</div>
              <div className="chap1">Literary Appreciation</div>
              <div className="chap1">Summarizing</div>
              <div className="chap1">Vocabulary Building</div>
              <div className="chap1">Formal & Informal Writing</div>
              <div className="chap1">Creative Writing</div>
            </div>
          </div>
        </div>
      </div>

      <h1>Class 11 English Syllabus</h1>
      <h2>Overview</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        English in Class 11 helps develop comprehension, writing skills, grammar, and critical thinking. The syllabus includes prose, poetry, drama, essays, and various forms of writing.
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>
        <li><strong>Prose</strong> – Short stories, essays, and comprehension-based reading.</li>
        <li><strong>Poetry</strong> – Analysis, interpretation, and appreciation of poems.</li>
        <li><strong>Drama</strong> – One-act plays and character study.</li>
        <li><strong>Grammar</strong> – Tenses, voice, narration, prepositions, articles.</li>
        <li><strong>Essay Writing</strong> – Descriptive, narrative, and argumentative essays.</li>
        <li><strong>Letter and Application Writing</strong> – Formal and informal styles.</li>
        <div id='con' className={`con ${showup && "open"}`}>
          <li><strong>Dialogue Writing</strong> – Conversations and format.</li>
          <li><strong>Creative Writing</strong> – Personal expression, vocabulary use.</li>
          <li><strong>Summary & Comprehension</strong> – Reading skills development.</li>
          <li><strong>Translation (optional)</strong> – English to Nepali and vice versa.</li>
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
          <iframe className="area" src={pdf} title="English Notes"></iframe>
          <div className="divider"></div>
          <div className="three1">
            <div className="boxes2 box-style1" onClick={()=>{change3(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">English Question Papers</p>
              <p className="box-desc">Frequently asked questions from past terminal and annual exams.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style2"onClick={()=>{change4(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Current News NEB</p>
              <p className="box-desc">Latest updates related to NEB English syllabus and curriculum.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
            <div className="boxes2 box-style3" onClick={()=>{change5(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB CLASS - XI</p>
              <p className="box-subtitle">Practice Questions</p>
              <p className="box-desc">Practice exercises, model questions, and grammar drills.</p>
              <p className="box-batch">Batch - 2081</p>
            </div>
          </div>
        </div>
        <p className='bow' style={{ fontSize: '18px', fontWeight: '500', marginLeft: '40px' }}>
          Adjust the PDF view according to your comfort.
        </p>
      </div>
    </div>
  );
};

export default Eng;
