import { Link } from 'react-router-dom';
import '../../App.css';
import '../../utils/notehouse'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from 'react';
import { MdCancel } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { TfiSharethis } from "react-icons/tfi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shut, setShut] = useState(false);

  const sidebarRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleSidebar = () => {
    setShow(!show);
    setShut(!show);
  };

  const close = () => {
    setShow(false);
    setShut(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="loader10" id="loader10"></div>
      <div className="navbar" id="navbar">
        <div className="logo">
          <img id="img1" className="img1" src="https://raw.githubusercontent.com/Ramansha0/notehouse-react/refs/heads/main/src/assets/logo.png" alt="logo" />
        </div>

        <div id="back" className="back">
          <input id="search" className="search" placeholder="Search" />
          <FaSearch />
          <div className="anything"></div>
        </div>

        <ul id="nav-list" className="nav-list" style={{ border: 'none', boxShadow: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/" state={{ scrollTo: "contact-page" }} className="c-btn">Contact Us</Link></li>
          <li><a className="perso" id="personal1" onClick={()=>{window.location.href ="https://ramansha0.github.io/Portfolio/"}}>Personal Info</a></li>
          <li><Link to="/" state={{ scrollTo: "about-section" }} className="about1">About Us</Link></li>
        </ul>

        <div id="burger" className="more-options-btn" onClick={toggleSidebar} ref={burgerRef}>
          {shut ? (
            <div className="cancel"><MdCancel /></div>
          ) : (
            <div className="burg"><GiHamburgerMenu /></div>
          )}
        </div>

        <div id="dinchak" className={`box10 ${show ? "open" : ""}`} ref={sidebarRef}>
          <ul>
<li><Link to="/" style={{ textDecoration: "none", color: "white" }}>            <div className="cliked"><FaHome/> Home</div></Link></li>
            <li><Link to="/" state={{ scrollTo: "contact-page" }} style={{ textDecoration: "none", color: "white" }} className="c-btn"><div className="cliked"> <IoCallSharp/> Contact Us</div></Link></li>
            <li><a   onClick={() => { window.location.href = "https://ramansha0.github.io/Portfolio/"; }} className="perso" id="personal1" > <FaUserAlt/> Personal Info</a></li>
            <li><Link to="/" state={{ scrollTo: "about-section" }} style={{ textDecoration: "none", color: "white" }} className="about1"><div className="cliked"><TfiSharethis /> About Us</div></Link></li>
          </ul>
        <li>
  <Link
    to="/physics"
    onClick={close}
    state={{ scrollto: "nextpage1", animateBox: true }}
    style={{ textDecoration: "none", color: "white" }}
  >
    <div className="cliked">📝 Model Questions</div>
  </Link>
</li>

          <li><a id="bt0" onClick={() => { close(); document.getElementById("container-page")?.scrollIntoView({ behavior: "smooth" }) }} style={{ textDecoration: "none", color: "white" }}>            <div className="cliked">📂 Notes</div></a></li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
