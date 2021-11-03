import React from "react";
import { Link } from "react-router-dom";
import '../src/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <h className="headernav">PC</h>
            <ul>
                <li className="start"><Link to="#" style={{ textDecoration: 'none' }}>Get Started</Link></li>
                <li><Link to="/Help" style={{ textDecoration: 'none' }}>Help</Link></li>
                <li><Link to="/Guide" style={{ textDecoration: 'none' }}>Guide</Link></li>
                <li><Link to="/Build" style={{ textDecoration: 'none' }}>Build</Link></li>
                <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navvy;