import React from "react";
import '../NavBar/NavBar.css';
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll';
import Services from "../Servisec/Servisec";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";


const NavBar = () => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Misha</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='NavBar' smooth={true} >
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} >
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                        <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">Contact Us</button>
            </div>
        </div>
    );
}

export default NavBar;