import profile from './assets/firstpic.jpg';
import React, { useState, useEffect, useMemo } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import './Home.css'; // Import the CSS file for Home component styling

function Home() {
    const roles = useMemo(() => [
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
        "Fullstack Developer"
    ], []);

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        if (letterIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setDisplayedRole(prev => prev + currentRole[letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, 100); // Typing speed
        
            return () => clearTimeout(timeout);
        } else {
            // Wait before switching roles
            setTimeout(() => {
                setDisplayedRole("");
                setLetterIndex(0);
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 1000);
        }
    }, [letterIndex, currentRoleIndex, roles]);

    const [homeRef, isHomeVisible] = useScrollAnimation();

    return (
        <section id="home" ref={homeRef} className={`fade-in ${isHomeVisible ? "visible" : ""}`}>
            <div className="container">
                <img src={profile} alt="RajaShekar Kare" className="profile-image"/>
                <div className="content">
                    <h2>Hi, I'm <span className="name">RajaShekar</span></h2>
                    <p className="role">{displayedRole}</p>
                    <p>Your one-stop destination to explore my work and skills!
                       If you want to unlock your web development skills and 
                       explore them to lead the world in an unique way.Let's work 
                       together to enhance our skills and put your ideas to colour 
                       the pages of the universe.</p>

                    {/* 🔹 Download Resume Button */}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="RajaShekar_Resume.pdf">
                        <button className="download-btn">Download Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
