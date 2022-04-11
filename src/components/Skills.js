import React from "react";

export const listOfSkills = [
    {
        iconClass: "fab fa-js-square",
        name: "JavaScript/Typescript",
    },
    {
        iconClass: "fab fa-github",
        name: "GitHub",
    },
    {
        iconClass: "fas fa-database",
        name: "Mongo/SQL",
    },
    {
        iconClass: "fab fa-node-js",
        name: "Node.js",
    },
    {
        iconClass: "fab fa-react",
        name: "React.js",
    },
    {
        iconClass: "fab fa-java",
        name: "Kotlin/Java",
    },
    {
        iconClass: "fab fa-python",
        name: "Python",
    },
]


export const SkillIcon = ({ props }) => {
    return (
        <div class="skill-container" key={props.index}>
            <i class={props.iconClass} alt={props.name}></i>
            <h3>{props.name}</h3>
        </div>
    )
}