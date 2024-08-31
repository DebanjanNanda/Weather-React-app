import React from 'react';
import '../styles/About.css'; // Create a corresponding CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm <strong>DEBANJAN NANDA</strong>, a passionate developer with expertise in web development, machine learning, 
        and data science. I enjoy building applications that solve real-world problems and enhance user experiences.
      </p>
      <p>
        In my free time, I love exploring new technologies, contributing to open-source projects, 
        and learning about the latest trends in the tech industry.
      </p>
      <p>
        Feel free to connect with me on <a href="https://www.linkedin.com/in/debanjan-nanda/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
        or check out my work on <a href="https://github.com/DebanjanNanda" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </div>
  );
};

export default About;
