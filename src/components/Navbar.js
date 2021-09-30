import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-home-container" >
                <Link className="home-button" to="/">Portfolio</Link>
            </div>
            <div className="menu-icon" >
                <a className='nav-menu-button' id='nav-menu-button'>
                    <i className='fas fa-bars' id="bars"></i>
                </a>
            </div>
            <div className="nav-menu" id="nav-menu">
                {/* <NavButton className="nav-button" id="button-one" target={"/#about-me"} /> */}
                <div className="nav-item">
                    <a className="nav-button" id="button-one" href={`${process.env.PUBLIC_URL}/#about-me`}>About Me</a>
                </div>
                <div className="nav-item">
                    <a className="nav-button" id="button-two" href={`${process.env.PUBLIC_URL}/#skills`} >Skills</a>
                </div>
                <div className="nav-item" >
                    <a className="nav-button" id="button-three" href={`${process.env.PUBLIC_URL}/#projects`} >Projects</a>
                </div>
                <div className="nav-item">
                    <Link className="nav-button" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}