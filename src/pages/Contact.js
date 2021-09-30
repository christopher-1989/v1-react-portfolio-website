import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {

const handleClick = function () {
    alert("Please send any queries via LinkedIn.")
}
    return (
        <>
            <div>
                <nav class="navbar">
                    <div class="nav-home-container" >
                        <Link class="home-button" to="/">Portfolio Home</Link>
                    </div>
                </nav>
                <main class="main-container">
                    <section class="contact">
                        <h1 class="name">Contact</h1>
                        <div class="contact-list">
                            <a class="link" href="https://github.com/christopher-1989" target="_blank" rel="noopener noreferrer"><i class="fab fa-github cont"></i>GitHub </a>
                        </div>
                        <div class="contact-list">
                            <a class="link" href="https://www.linkedin.com/in/christopher-mcdonald-370265119/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin cont"></i>LinkedIn </a>
                        </div>
                        <div class="contact-list">
                            <div class="link" id="email" onClick={handleClick}><i class="fas fa-at email-cont"></i>Email </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Contact
