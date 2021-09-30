import React from "react";
import ecommercebackend from '../img/e-commerce-backend.png';
import authflow from '../img/Auth-flow-screenshot.png';
import tmcAccount from '../img/tmc-account.png';
import kyt from '../img/kyt-website.png';
import wds from '../img/website-design-system.png'

export const listOfProjects = [
    {
        type: "Back-end",
        name: "E-commerce backend project",
        link: "https://github.com/christopher-1989/e-commerce-backend",
        thumbnail: ecommercebackend,
        thumbnailAlt: "E-commerce backend project",
        keySkills: "ERD, Postgres, Node, Express, TDD"
    },
    {
        type: "Full-stack",
        name: "Authentication flow with express backend and mongo database",
        link: "https://github.com/christopher-1989/authentication-flow-express-server-mongodb",
        thumbnail: authflow,
        thumbnailAlt: "Authentication flow app screenshot",
        keySkills: "React Native, Expo, Node, Express, MongoDB, Cookies"
    },
    {
        type: "Full-stack",
        name: "10 minute claims - Insurance app",
        link: null,
        thumbnail: tmcAccount,
        thumbnailAlt: "10 minute claims app screenshot",
        keySkills: "React Native, Expo, Node, Postgres, Cookies"
    },
    {
        type: "Front-end",
        name: "Know your trash recycling website",
        link: "https://github.com/christopher-1989/react-recycling-website",
        thumbnail: kyt,
        thumbnailAlt: "Know Your Trash website screenshot",
        keySkills: "React, TDD, Node, HTML, CSS"
    },
    {
        type: "Front-end",
        name: "Website design system",
        link: "https://github.com/christopher-1989/website-design-system",
        thumbnail: wds,
        thumbnailAlt: "Know Your Trash website screenshot",
        keySkills: "React, TDD, Node, HTML, CSS"
    },
]


export const ProjectCard = ({ props }) => {
    const handleNullLink = () => {
        alert("Video demostration or live app coming soon")
    }
    return (
        <div class="project" key={props.index}>
            <a class="link" onClick={props.link ? null : handleNullLink} href={props.link} target="_blank" rel="noopener noreferrer">
                <h3><strong>{props.name}</strong></h3>
                <div class="image-container">
                    <img src={props.thumbnail} alt={props.thumbnailAlt} class="card-pic" />
                </div>
                <h4>Core capabilities: {props.keySkills}</h4>
            </a>
        </div>
    )
}