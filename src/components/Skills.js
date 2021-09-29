import React from "react";

export const listOfSkills = [
    {
        iconClass: "fab fa-github",
        name: "GitHub",
    },
    {
        iconClass: "fab fa-js",
        name: "JavaScript",
    },
    {
        iconClass: "fab fa-node",
        name: "Node.js",
    },
    {
        iconClass: "fab fa-react",
        name: "React.js",
    },
    {
        iconClass: "fas fa-terminal",
        name: "CLI",
    },
    {
        iconClass: "fab fa-angular",
        name: "Angular.js",
    },
    {
        iconClass: "fab fa-vuejs",
        name: "Vue.js",
    },
    {
        iconClass: "fab fa-python",
        name: "Python",
    },
]


export const SkillIcon = ({ props }) => {
    return (
        <div class="skill-container">
            <i class={props.iconClass} alt={props.name}></i>
            <h3>{props.name}</h3>
        </div>
    )
}