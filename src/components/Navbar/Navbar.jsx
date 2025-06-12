import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="img1" src="logo.png" alt="Logo" />
      </div>
      <div className="back">
        <input id='search' className="search" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className="nav-list" style={{ border: 'none', boxShadow: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#" id="c-btn">Contact Us</a></li>
        <li><a href="#" id="personal1">Personal Info</a></li>
        <div id="loader1" className="load"></div>
        <li><a href="#" className="about1">About Us</a></li>
        <li className="more-options">
          <button className="more-options-btn">Contents</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
