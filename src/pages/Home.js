import React from 'react'
import { listOfProjects, ProjectCard } from '../components/Projects'
import { listOfSkills, SkillIcon } from '../components/Skills'
import headshot from '../img/headshot.jpg'
import './Home.css'



function Home() {

    
    return (
        <>
            <div>
                <nav class="navbar" id="navbar">
                    <div class="nav-home-container" >
                        <a class="home-button" href="/">Portfolio</a>
                    </div>
                    <div class="menu-icon" >
                        <a class='nav-menu-button' id='nav-menu-button'>
                            <i class='fas fa-bars' id="bars"></i>
                        </a>
                    </div>
                    <div class="nav-menu" id="nav-menu">
                        <div class="nav-item">
                            <a class="nav-button" id="button-one" href="#about-me">About Me</a>
                        </div>
                        <div class="nav-item">
                            <a class="nav-button" id="button-two" href="#skills">Skills</a>
                        </div>
                        <div class="nav-item" >
                            <a class="nav-button" id="button-three" href="#projects">Projects</a>
                        </div>
                        <div class="nav-item">
                            <a class="nav-button" href="/contact">Contact</a>
                        </div>
                    </div>
                </nav>
                <main class="main-container">
                    <section class="about-me">
                        <h1 class="name">Christopher McDonald</h1>
                        <p id="quote"><em>
                            "You don't know what you don't know"<br />- unknown
                        </em></p>
                        <div class="circular-portrait">
                            <img src={headshot} class="headshot" alt="headshot" />
                        </div>
                        <h2 class="section-heading" id="about-me">About Me</h2>
                        <p class="first-para">
                            I started my programming journey while studying my Masters of Education in early 2018. 
                            I was researching advanced pedagogical methods and one segment of study included big data and machine learning. 
                            I found these concepts interesting so when I completed my Masters degree I started learning how to code. 
                            Initially I learnt Python until late 2018 when my understanding culminated in projects that developed skills such as scraping websites, visualising data, and using machine learning algorithms.
                            Next I learnt Javascript. I was interested in learning Javascript as it is popular in both front-end and back-end architectures. 
                            Along the javascript journey I have developed skills using HTML, CSS, CLI as well as best practices in CI/CD, TDD, authentication, authorisation and accessibility.
                            
                        </p>
                        <p class="second-para" >
                            Since late 2020 I have mostly been working on various personal projects developing high end technologies and competencies including React, Node, Express, React Native, Expo, Postgres, MongoDB and Docker to name a few.
                        </p>
                    </section>
                    <section class="skills" id="skills">
                        <h2 class="section-heading">Skills</h2>
                        <div class="skill-set" >
                            {listOfSkills.map(icon => <SkillIcon props={icon} />)}
                        </div>
                    </section>
                    <section class="projects" id="projects">
                        <div class="project-segment"> 
                            <h2>Full-stack projects</h2>
                            {listOfProjects.map(project => project.type === "Full-stack" && <ProjectCard props={project} />)}
                        </div>
                        <div class="project-segment"> 
                            <h2>Back-end projects</h2>
                            {listOfProjects.map(project => project.type === "Back-end" && <ProjectCard props={project} />)}
                        </div>
                        <div class="project-segment"> 
                            <h2>Front-end projects</h2>
                            {listOfProjects.map(project => project.type === "Front-end" && <ProjectCard props={project} />)}
                        </div>

                            
                    </section>
                    <footer>
                        <a class="footer-button" href="contact.html"><strong>Contact</strong></a>
                    </footer>
                </main>  
                </div>
        </>
    )
}


export default Home
