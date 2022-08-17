import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navBarActiveStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
}

const navMenuActiveStyle = {
    width: '100%',
    float: 'none',
    top: '30vh',
    left: '0',
    height: '20vh',
    display: 'flex',
    flexDirection: "column"
}

const navBarInactiveStyle = {
    height: "4.75rem",
    display: "flex",
    flexDirection: "row"
}

const navMenuInactiveStyle = {
    width: '100%',
    float: 'none',
    top: '-100%',
    left: '-200%',
    height: '100%',
    display: 'grid',
    flexDirection: "none",
}


export const Navbar = () => {
    
    const [navActive, setNavActive] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const NavMenuComponent = () => {
        if (screenWidth < 901) {
            return (
            <>
                <div className="menu-icon" >
    {                // eslint-disable-next-line jsx-a11y/anchor-is-valid
    }                <a className='nav-menu-button' id='nav-menu-button' onClick={() => setNavActive(!navActive)}>
                        <i className={navActive ? 'fas fa-times' : 'fas fa-bars'} id="bars"></i>
                    </a>
                </div>
                <div className="nav-menu-mobile" id="nav-menu-mobile" style={navActive ? navMenuActiveStyle : navMenuInactiveStyle}>
                    <div className="nav-item-mobile">
                        <a className="nav-button-mobile" id="button-one" onClick={() => setNavActive(!navActive)} href={`${process.env.PUBLIC_URL}/#about-me`}>About Me</a>
                    </div>
                    <div className="nav-item-mobile">
                        <a className="nav-button-mobile" id="button-two" onClick={() => setNavActive(!navActive)} href={`${process.env.PUBLIC_URL}/#skills`} >Skills</a>
                    </div>
                    <div className="nav-item-mobile" >
                        <a className="nav-button-mobile" id="button-three" onClick={() => setNavActive(!navActive)} href={`${process.env.PUBLIC_URL}/#projects`} >Projects</a>
                    </div>
                    <div className="nav-item-mobile">
                        <Link className="nav-button-mobile" to="/contact">Contact</Link>
                    </div>
                </div>
                </>
            )
        } else {
            return (
            <div className="nav-menu" id="nav-menu">
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
            )
        }
    }

    return (
        <nav className="navbar" id="navbar" style={navActive ? navBarActiveStyle : navBarInactiveStyle}>
            <div className="nav-home-container">
                <Link className="home-button" to="/">Portfolio</Link>
            </div>
            {NavMenuComponent()}
        </nav>
    )
}