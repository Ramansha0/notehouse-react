import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

const Nep = () => {
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
       <button className='topbtn'onClick={()=> document.getElementById("books")?.scrollIntoView({behavior :"smooth"})} style={{ display: showElement ? 'block' : 'none' }}>View Books !</button>
      <div className="subject">
        <img className="glass" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVvVyMV-SmJJENZvscnkro9onxXdCIARfxg&s" alt="Nepali" />
        <p id='topic' className="topic">नेपाली</p>
      </div>

      <div id='page' className="page">
        <div className="three">
          <div className="boxes1" onClick={() => { change(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB कक्षा - ११ 
अनिवार्य नेपाली नोट्स</p>
            <p>यहाँ तपाईंले कक्षा ११ का सम्पूर्ण नेपाली नोट्स पाउन सक्नुहुन्छ।</p>
            <p>ब्याच - २०८१</p>
          </div>
          <div className="boxes1" onClick={() => { change1(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB कक्षा - ११  नेपाली  पाठ्यपुस्तकहरू</p>
            <p>यहाँ तपाईंले नेपाली विषयको सम्पूर्ण पाठ्यपुस्तक हेर्न सक्नुहुन्छ।</p>
            <p>ब्याच - २०८१</p>
          </div>
          <div className="boxes1" onClick={() => { change2(); document.getElementById("nextpage1")?.scrollIntoView({ behavior: "smooth" }) }}>
            <p>NEB कक्षा - ११ नेपाली सेट 
पुस्तकहरू</p>
            <p>यहाँ तपाईंले अभ्यासका लागि सेट प्रश्नपत्रहरू पाउन सक्नुहुन्छ।</p>
            <p>ब्याच - २०८१</p>
          </div>
        </div>

        <div className="Chapters">
          <div className="Name">
            <p style={{ fontSize: '22px', fontWeight: '600' }}>नेपाली अध्यायहरू</p>
          </div>
          <div className="sides">
            <div className="side1">
              <div className="chap1" id="one">निबन्ध</div>
              <div className="chap1" id="two">कविता</div>
              <div className="chap1">कथा</div>
              <div className="chap1">नाटक</div>
              <div className="chap1">अनुवाद</div>
              <div className="chap1">समीक्षा</div>
              <div className="chap1">भाषा विज्ञान</div>
              <div className="chap1">उपन्यास</div>
            </div>
            <div className="side2">
              <div className="chap1">लेख</div>
              <div className="chap1">रचना लेखन</div>
              <div className="chap1">पत्र लेखन</div>
              <div className="chap1">श्रव्य सामग्री</div>
              <div className="chap1">संचार कला</div>
              <div className="chap1">व्याकरण</div>
              <div className="chap1">पठन तथा लेखन</div>
              <div className="chap1">अन्य</div>
            </div>
          </div>
        </div>
      </div>

      <h1>कक्षा ११ नेपाली पाठ्यक्रम</h1>
      <h2>सारांश</h2>
      <p style={{ paddingLeft: '30px', marginRight: '10px' }}>
        कक्षा ११ को नेपाली विषयमा निबन्ध, कविता, कथा, नाटक, अनुवाद, व्याकरण र भाषा विज्ञान समेटिएको हुन्छ। साहित्य र भाषा विकासका लागि यो अत्यन्त महत्वपूर्ण छ।
      </p>

      <ul style={{ height: 'fit-content', background: 'linear-gradient(20deg, #71b6ff 60%, white 40%)' }}>
        <li><strong>निबन्ध</strong> – विविध सामाजिक, सांस्कृतिक विषयहरूमा आधारित लेखहरू।</li>
        <li><strong>कविता</strong> – प्रसिद्ध कविहरूका काव्य र विश्लेषण।</li>
        <li><strong>कथा</strong> – छोटा कथाहरू र सन्देश।</li>
        <li><strong>नाटक</strong> – नाट्य साहित्य र संवाद अभ्यास।</li>
        <li><strong>अनुवाद</strong> – अंग्रेजी र नेपाली बिच अनुवाद अभ्यास।</li>
        <li><strong>भाषा विज्ञान</strong> – भाषाको विकास, संरचना र प्रकार।</li>
        <li><strong>रचना लेखन</strong> – निबन्ध, पत्र, प्रतिवेदन लेखन अभ्यास।</li>
        <div id='con' className={`con ${showup && "open"}`}>
          <li><strong>श्रव्य सामग्री</strong> – श्रवण र समिक्षा अभ्यास।</li>
          <li><strong>संचार कला</strong> – प्रभावकारी संवाद र प्रस्तुतीकरण कला।</li>
          <li><strong>व्याकरण</strong> – वर्ण, शब्द, वाक्य संरचना।</li>
          <li><strong>पठन तथा लेखन</strong> – पाठ्य पुस्तकबाट पठन तथा लेखन अभ्यास।</li>
        </div>
        <div className="dropdown" id="dropdown" onClick={viewport}><IoIosArrowDropdown /></div>
      </ul>

      <div id='nextpage1' className="nextpage1" style={{ height: '600px' }}>
        <h1 className='hlo' style={{ marginLeft: '-400px' }}>PDF Viewer</h1>
        <div className="btnandtitle">
          <p>तपाईंको नोट्स तल हेर्न सक्नुहुन्छ:</p>
          <button className="click" onClick={() => document.getElementById("page")?.scrollIntoView({ behavior: "smooth" })}>फिर्ता जानुहोस्</button>
        </div>

        <div className="ques" id='ques'>
          <iframe className="area" src={pdf} title="Nepali Notes"></iframe>
          <div className="divider"></div>
          <div className="three1">
            <div className="boxes2 box-style1" onClick={()=>{change3(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB कक्षा - ११</p>
              <p className="box-subtitle">नेपाली प्रश्नपत्र</p>
              <p className="box-desc">यहाँ अघिल्ला परीक्षाका प्रमुख प्रश्नहरू समेटिएका छन्।</p>
              <p className="box-batch">ब्याच - २०८१</p>
            </div>
            <div className="boxes2 box-style2" onClick={()=>{change4(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB कक्षा - ११</p>
              <p className="box-subtitle">NEB हालको सूचना</p>
              <p className="box-desc">नेपाली विषयसँग सम्बन्धित ताजा सूचना तथा अपडेटहरू।</p>
              <p className="box-batch">ब्याच - २०८१</p>
            </div>
            <div className="boxes2 box-style3" onClick={()=>{change5(); document.getElementById("nextpage1")?.scrollIntoView({behavior:"smooth"})}}>
              <p className="box-title">NEB कक्षा - ११</p>
              <p className="box-subtitle">अभ्यास प्रश्न</p>
              <p className="box-desc">अघिल्ला वर्षका र नमुना प्रश्नपत्रहरू अभ्यासका लागि।</p>
              <p className="box-batch">ब्याच - २०८१</p>
            </div>
          </div>
        </div>
        <p className='bow' style={{ fontSize: '18px', fontWeight: '500', marginLeft: '40px' }}>
          PDF हेर्ने तरिका तपाईंको सुविधाअनुसार समायोजन गर्नुहोस्।
        </p>
      </div>
    </div>
  );
};

export default Nep;
