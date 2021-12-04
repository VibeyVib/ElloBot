import React from "react";
import { Link } from "react-router-dom";
import '../src/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <h className="headernav">ElloBot</h>
            <ul>
                <li><Link className="start" to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                <li><Link className="start" to="/ElloBot" style={{ textDecoration: 'none' }}>ElloBot</Link></li>
                <li><Link className="start" to="/Team" style={{textDecoration: 'none'}}>Team</Link></li>
                <li><Link className="start" to="/Tech" style={{ textDecoration: 'none' }}>Tech</Link></li>
                <li><Link className="start" to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                <li><Link className="start" to="/Bot" style={{ textDecoration: 'none' }}>Bot</Link></li>
            </ul>
        </nav>
    );
}

export default Navvy;