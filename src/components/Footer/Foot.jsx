import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import '../../App.css'
import Swal from 'sweetalert2';
import { FaArrowUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const Foot = () => {
 const location = useLocation();
useEffect(() => {
  const scrollTarget = location.state?.scrollTo;

  if (scrollTarget) {
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Clear scroll state so it doesn't persist
    window.history.replaceState({}, document.title);
  }
}, [location]);


const go = ()=>{
            Swal.fire({
          title: "Thank you!",
          text: "Your feedback has been submitted successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK"
        });
}





    return (
        <div>
            <div id="about-section" className="about-section">
                <header style={{backgroundColor:'#2563EB',}}>
                    <h1 style={{color:'white '}} >About Us</h1>
                </header>
                <section className="hero">
                    <h2>We’re passionate about education.</h2>
                    <p>Bringing quality study resources and tools to students everywhere.</p>
                </section>

                <section className="card">
                    <h3>🎯 Our Mission</h3>
                    <p>
                        To provide accessible, easy-to-understand academic content for students of all levels. Whether it’s science, math, or literature, we simplify learning.
                    </p>
                </section>

                <section className="card">
                    <h3>👥 Who We Are</h3>
                    <p>
                        A group of passionate educators, developers, and students working together to make learning easier for everyone.
                    </p>
                    <h3 style={{ marginTop: '1rem' }}>🌟 Our Vision</h3>
                    <p>To become a go-to platform for student learning and creativity.</p>
                </section>

                <section className="cta">
                    <h3>Ready to explore?</h3>
                    <p>Start your learning journey now.</p>
                    <a href="/resources.html">Browse Resources</a>
                </section>
            </div>

            <div className="line3"></div>

            <div id="contact-page" className="contact-panel">
                <div className="photo1">
                    <p className="down">Contact Us</p>
                    <div className="para10">
                        We are always here to assist you with any questions or concerns you may have. Whether you are a student seeking guidance,
                        a parent looking for more information, or just curious about our programs, feel free to reach out to us. Our team is dedicated
                        to providing prompt responses and helpful support to ensure your experience with us is as smooth as possible. Please use the
                        contact form below or reach us through the provided phone number and email address.
                    </div>

                    <div className="bross">
                        <div><FaPhoneAlt style={{marginRight :'7px',color:'#1ba5fa'}} /><p className='contact-items'>+977 9862573214</p></div>
                        <div><FaTelegramPlane  style={{marginRight :'7px',color:'#1ba5fa'}}/><p className='contact-items'>Raman Shah</p></div>
                        <div><FaFacebookF style={{marginRight :'7px',color:'#1ba5fa'}}/><p className='contact-items'>Notes House</p></div>
                        <div><IoMdMail style={{marginRight :'7px',color:'#1ba5fa'}}/><p className='contact-items'>ramanshah440@gmail.com</p></div>
                    </div>
                </div>

                <div className="contact">
                    <div className="send">
                        <p>Get In Touch</p>
                    </div>
                <form  action="https://formsubmit.co/ramanshah440@gmail.com" method="POST">
                    <div className="email1">
                      <FaUser style={{color:'#1ba5fa'}}/>
                        <input id="email1" type="email" name="Email" placeholder="Your Email" required />
                    </div>
                    <div className="email2">
                        <FaUser style={{color:'#1ba5fa'}}/>
                        <input id="nameuser" type="text" name="Name" placeholder="Full Name" required />
                    </div>
                    <div className="email">
                        <textarea name="Message" id="message1" placeholder="Comment"></textarea>
                    </div>
                    <div className="sub" id="submitBtn">
                        <button className="sb" type='submit' onClick={go}>Submit</button>
                    </div></form>
                </div>
            </div>

            <div className="footer1">
                <div className="first-l">
                    <p className="letter">We provide top-notch educational content, resources, and tools to help students and educators achieve their learning goals.</p>
                </div>
                <div className="dense">
                    <div className="para20">
                        <div id="cont2" className="cont" style={{ width: '200px', textDecoration: 'none' }}>
                            <p style={{ fontSize: '30px', fontWeight: '700', textDecoration: 'underline', marginTop: '40px' }}>About Us</p>
                            <p>Our mission is to empower students with the best educational resources. We believe in making learning accessible to everyone.</p>
                        </div>

                        <div className="cont">
                            <p className="please" style={{ fontWeight: '700', fontSize: '30px', marginTop: '40px' }}>Quick links</p>
                                    <a className='h-btn' onClick={() => document.getElementById("navbar")?.scrollIntoView({ behavior: "smooth" })}>- Home</a>
  <a className='c-btn' onClick={() => document.getElementById("contact-page")?.scrollIntoView({ behavior: "smooth" })}>- Contact Us</a>
  <a className='perso' id='personal1' onClick={() => window.location.href = "https://ramansha0.github.io/Portfolio/"}>- Personal Info</a>
  <a className='about1' onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })}>- About Us</a>

                        </div>
                        <div className="cont">
                            <p className="please" style={{ fontWeight: '700', fontSize: '30px', marginTop: '40px' }}>Contact Info</p>
                            <p>- Address: Hetauda, Bagmati, Nepal, School Road</p>
                            <p>- Phone: +977 9862573214</p>
                            <p>- E-mail: ramanshah440@gmail.com</p>
                            <p>- Social media: Facebook, Instagram, Telegram</p>
                        </div>
                        <div className="cont">
                            <p className="please" style={{ fontWeight: '700', fontSize: '30px', marginTop: '40px' }}>Follow Us</p>
                            <p>- Facebook</p>
                            <p>- Twitter</p>
                            <p>- Instagram</p>
                            <p>- Telegram</p>
                            <p>- YouTube</p>
                        </div>
                    </div>

                    <div className="i0">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <div className="cin">
                            <a className='h-btn' onClick={() => document.getElementById("navbar")?.scrollIntoView({ behavior: "smooth" })}>Home</a>
  <a className='c-btn' onClick={() => document.getElementById("contact-page")?.scrollIntoView({ behavior: "smooth" })}>Contact Us</a>
  <a className='perso' id='personal1' onClick={() => window.location.href = "https://ramansha0.github.io/Portfolio/"}>Personal Info</a>
  <a className='about1' onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })}>About Us</a>

                        </div>
                    </div>
                </div>
                <div className="scroll-up-btn" id="scrollUpBtn"><FaArrowUp/></div>
                <footer style={{height:'0px'}} >
                    <div id='footer-content' className="footer-content">
                        <p>We are dedicated to providing quality education and resources to help students achieve their goals.</p>
                        <p>&copy; 2024 NotesHouse. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Foot
