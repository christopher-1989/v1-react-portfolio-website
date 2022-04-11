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
                    <h2 className="title">Full-stack developer/Software Engineer</h2>
                    <div className="circular-portrait">
                        <img src={headshot} className="headshot" alt="headshot" />
                    </div>
                    <p id="quote"><em>
                        "You don't know what you don't know"<br />- unknown
                    </em></p>
                    <h2 className="section-heading" id="about-me">About Me</h2>
                    <p className="first-para">

                    Me at a glance:<br></br>
                    I am a driven, hard working, creative and personable individual currently employed as a permanent full-time Software Engineer at Insignia Financial.
                    </p>
                    <p className='first-para'>
                    What my current daily life looks like:<br></br>
                    Develop and maintain features for both front end (React UI) and back end (Micro services and REST Apis) technologies.
                    Participate in meetings with stakeholders.
                    Participate in daily team meetings.
                    Review client requests and discuss possible solutions supported by data.
                    Develop domain knowledge of business logic where required.
                    Monitor, investigate, evaluate active and new micro services.
                    Follow CI/CD best practices.
                    Develop software solutions using a various Full-stack Technologies.
                    </p>
                    <p className="second-para" >
                    More about me:<br></br>
                    I started my programming journey while studying my Masters of Education in early 2018. I was researching advanced pedagogical methods and one segment of study included big data and machine learning. I found these concepts interesting so when I completed my Masters degree I started learning how to code. Initially I learnt Python until late 2018 when my understanding culminated in projects that developed skills such as scraping websites, visualising data, and using machine learning algorithms. 
                    Next I learnt Javascript. I was interested in learning Javascript as it is popular in both front-end and back-end architectures. Along the javascript journey I have developed skills using HTML, CSS, CLI as well as best practices in CI/CD, TDD, authentication, authorisation and accessibility. 
                    </p>
                    <p className="second-para">
                    Since late 2020 I have mostly been working on various personal projects developing high end technologies and competencies including React, Node, Express, React Native, Expo, Postgres, MongoDB and Docker to name a few. The public projects can be found on my GitHub pages and private projects on my portfolio website. 
                    <br></br>
                    Prior to this position I was a Physics and Mathematics secondary school teacher for 7 years.
                    </p>
                </section>
                <section className="skills" id="skills">
                    <h2 className="section-heading">Skills</h2>
                    <p className='first-para'><b>
                    Technologies that are typically used include but are not limited to Git, Jira, Typescript, React, Kotlin/Java, MongoDB, MySQL, Insomnia, RabbitMQ, Kafka, Kibana. I also have extensive experience using React Native and Expo.
                    </b></p>
                    <div className="skill-set" >
                        {listOfSkills.map((icon, index) => <SkillIcon props={icon} key={index}/>)}
                    </div>
                    <Timer text="Time learning Typescript" date="January 20, 2019" />
                    <Timer text="Time learning Kotlin" date="January 15, 2022" />
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
