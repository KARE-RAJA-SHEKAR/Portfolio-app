import React from 'react';
import './About.css'; // Import About section styles
import { useScrollAnimation } from "../hooks/useScrollAnimation";


function About() {
    const name = "Rajashekar";
    const [sectionRef, isVisible] = useScrollAnimation();
    return (
        <section id="about" ref={sectionRef} className={`push-up ${isVisible ? "visible" : ""}`}>
            <h2>About Me</h2>
            <p>
                Hello! I'm {name}, a web developer driven by
                a passion for creating seamless and impactful digital experiences
                . With a strong foundation in both front-end and back-end development,
                I specialize in transforming ideas into interactive, high-performance
                websites and applications.As someone who thrives on innovation,
                I blend creativity with functionality,
                crafting intuitive designs that are both visually engaging and
                technically robust. My goal is to build digital products
                that delight users while solving real-world challenges
            </p>
        </section>
    );
}

export default About;
