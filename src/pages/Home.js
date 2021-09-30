import React from 'react'
import { listOfProjects, ProjectCard } from '../components/Projects'
import { listOfSkills, SkillIcon } from '../components/Skills'
import headshot from '../img/headshot.png'
import './Home.css'
import { Timer } from '../components/Timer'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
// import '../services/navLogic'

function Home() {
    
    return (
        <div>
            <Navbar />
            <main className="main-container">
                <section className="about-me">
                    <h1 className="name">Christopher McDonald</h1>
                    <p id="quote"><em>
                        "You don't know what you don't know"<br />- unknown
                    </em></p>
                    <div className="circular-portrait">
                        <img src={headshot} className="headshot" alt="headshot" />
                    </div>
                    <h2 className="section-heading" id="about-me">About Me</h2>
                    <p className="first-para">
                        I started my programming journey while studying my Masters of Education in early 2018. 
                        I was researching advanced pedagogical methods and one segment of study included big data and machine learning. 
                        I found these concepts interesting so when I completed my Masters degree I started learning how to code. 
                        Initially I learnt Python until late 2018 when my understanding culminated in projects that developed skills such as scraping websites, visualising data, and using machine learning algorithms.
                        Next I learnt Javascript. I was interested in learning Javascript as it is popular in both front-end and back-end architectures. 
                        Along the javascript journey I have developed skills using HTML, CSS, CLI as well as best practices in CI/CD, TDD, authentication, authorisation and accessibility.
                        
                    </p>
                    <p className="second-para" >
                        Since late 2020 I have mostly been working on various personal projects developing high end technologies and competencies including React, Node, Express, React Native, Expo, Postgres, MongoDB and Docker to name a few.
                    </p>
                </section>
                <section className="skills" id="skills">
                    <h2 className="section-heading">Skills</h2>
                    <div className="skill-set" >
                        {listOfSkills.map((icon, index) => <SkillIcon props={icon} key={index}/>)}
                    </div>
                    <Timer text="Time learning Javascript" date="January 20, 2019" />
                    <Timer text="Time since starting Python" date="September 15, 2018" />
                </section>
                <section className="projects" id="projects">
                    <div className="project-segment"> 
                        <h2>Full-stack projects</h2>
                        {listOfProjects.map((project, index) => project.type === "Full-stack" && <ProjectCard props={project} key={index}/>)}
                    </div>
                    <div className="project-segment"> 
                        <h2>Back-end projects</h2>
                        {listOfProjects.map((project, index) => project.type === "Back-end" && <ProjectCard props={project} key={index}/>)}
                    </div>
                    <div className="project-segment"> 
                        <h2>Front-end projects</h2>
                        {listOfProjects.map((project, index) => project.type === "Front-end" && <ProjectCard props={project} key={index}/>)}
                    </div>

                        
                </section>
                <footer>
                    <Link className="footer-button" to="/contact"><strong>Contact</strong></Link>
                    <h4>Im a responsive website. View me at different window sizes :)</h4>
                </footer>
            </main>  
        </div>
    )
}


export default Home
