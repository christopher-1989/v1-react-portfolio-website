import React from 'react';
import { listOfProjects, ProjectCard } from '../components/Projects';
import { listOfSkills, SkillIcon } from '../components/Skills';
import headshot from '../img/headshot.png';
import './Home.css';
import { Timer } from '../components/Timer';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import recipemeVideo from '../vid/share-recipe.mp4';

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
                    Develop and maintain features for both front end (React UI) and back end (Micro services and REST APIs) technologies.
                    Contribute towards meetings with stakeholders.
                    Participate in and facilitate regular team meetings.
                    Review client requests and discuss possible solutions that is supported by data.
                    Develop and document domain knowledge and business logic where required.
                    Monitor, investigate, evaluate active and new micro services.
                    Follow CI/CD best practices with team.
                    Develop solutions for various problems using a various Full-stack Technologies.
                    </p>
                    <p className="second-para" >
                    More about me:<br></br>
                    I started my programming journey while studying my Masters of Education in early 2018. At the time I was researching advanced pedagogical methods and one area of study included big data and machine learning. 
                    These concepts really appealed to me so when I completed my Masters degree I started learning how to code. 
                    Initially I learnt Python until late 2018 when my understanding culminated in projects that developed skills such as scraping websites, visualising data, and using machine learning algorithms. 
                    I then became interested in learning Javascript as it is popular in both front-end and back-end architectures. Along the javascript journey I have developed skills using HTML, CSS, CLI as well as best practices in CI/CD, TDD, authentication, authorisation and accessibility.
                    Certificates for courses I have completed can be found on my LinkedIn page.
                    </p>
                    <p className="second-para">
                    Since late 2020 I have spent most of my free time working on various personal projects developing fluency using high end technologies such as React, Node, Express, React Native, Expo, MySQL/Postgres, MongoDB, Amazon Web Services (AWS) and Docker to name a few.
                    <br></br>
                    Prior to my change in career, I was a Physics and Mathematics secondary school teacher for 7 years. A few last noteworthy points about me: I am new father, I am an avid snowboarder, I lived in Germany and speak German and I ride motorbikes.
                    </p>
                </section>
                <section className="skills" id="skills">
                    <h2 className="section-heading">Skills</h2>
                    <p className='first-para'><b>
                    Professional skills snapshot: AWS, Git, Jira, CLI, 0Auth/SSO, Typescript/JavaScript, React, React Native, Expo, Kotlin, Java, Python, MongoDB, MySQL/Postgres, Insomnia/Postman, RabbitMQ, Kafka, Elastic/Kibana, Docker, Google Play store, Apple store, VSC, IntelliJ.
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
                        <p style={{margin: "2rem"}}><em>All projects shown below were done in free time at my leisure and does not display paid work</em></p>
                        <video title="Recipeme-iOS" width={300} height={600} controls >
                            <source src={recipemeVideo} type="video/mp4"/>
                        </video>
                        <h3>Recipeme video demo of live iOS app hitting AWS API Gateway, Lambda, DynamoDB Endpoint</h3>
                            
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
                    <h4>Im a responsive, mobile-first website. View me at different window sizes :)</h4>
                </footer>
            </main>  
        </div>
    )
}


export default Home
