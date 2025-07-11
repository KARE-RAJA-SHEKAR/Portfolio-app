import React from 'react';
import './Projects.css'; // Import Projects section styles
import project1 from './assets/project.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png'
import { useScrollAnimation } from "../hooks/useScrollAnimation";



function Projects() {
    const [sectionRef, isVisible] = useScrollAnimation();

    return (
        <section id="projects" ref={sectionRef} className={`push-up ${isVisible ? "visible" : ""}`}>
            <h2>My Projects</h2>
            <div className="project-card">
                <img src={project1} alt="Project" />
                <h3>Password Evaluater</h3>
                <p>This could be a web application built using React.js, that shows how the password should be verified by evaluating the each of the characters it required and helps to find the easy way to have the password verification method.</p>
                <a href="https://github.com/KARE-RAJA-SHEKAR/projects" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
                <img src={project2} alt="Project 2" />
                <h3>E-commerce site</h3>
                <p>This is another project where I built a responsive e-commerce website using HTML, CSS, and JavaScript. It includes a shopping cart and checkout functionality.</p>
                <a href="https://github.com/KARE-RAJA-SHEKAR/codeway-codes" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
                <img src={project3} alt="Project 3" />
                <h3>Stocks Analyser</h3>
                <p>This project is a machine learning model that predicts stock prices using Python and TensorFlow. It demonstrates data analysis and prediction accuracy.</p>
                <a href="https://github.com/KARE-RAJA-SHEKAR/Stock_price_predictor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </section>
    );
}

export default Projects;
