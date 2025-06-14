import { Link } from 'react-router-dom';
import '../../App.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  
  return (
    
    <div className="navbar">
         <div className='loader10' id="loader10"></div>
      <div className="logo">
        <img className="img1" src="src\assets\logo.png" alt="Logo" />
      </div>
      <div className="back">
        <input id='search' className="search" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className="nav-list" style={{ border: 'none', boxShadow: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#" className="c-btn" id="c-btn">Contact Us</a></li>
        <li><a href="#" id="personal1" className="personal1" >Personal Info</a></li>
        <div id="loader1" className="load"></div>
        <li><a href="#" className="about1">About Us</a></li>
        <li className="more-options">
         <div className="more-options-btn" ><GiHamburgerMenu /></div> 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
