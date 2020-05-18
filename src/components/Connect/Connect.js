import React from 'react'

import './Connect.css';
import github from '../../assets/images/gitPic.png';
import linkedIn from '../../assets/images/linkedinPic.png';
import resume from '../../assets/images/resume.jpg';
import Resume from '../../assets/Resume.pdf';

const connect = () => (
    <div className="middle-bar-content-box middle-bar-content-box__connect">
        <h2>Connect with Me</h2>
        <hr className="hr__contact" />
        <a href="https://github.com/Anastasia-Satysheva" target="_blank" rel="noopener noreferrer">
        <img className="img__contact-link" src={github} alt="github" />
        </a>
        <div className="contact-link-spacer"></div>
        <a href="https://www.linkedin.com/in/anastasia-satysheva/" target="_blank" rel="noopener noreferrer">
        <img className="img__contact-link" src={linkedIn} alt="linked in" />
        </a>
        <div className="contact-link-spacer"></div>
        <a href={Resume}>
        <img className="img__contact-link" src={resume} alt="resume" />
        </a>
    </div>
);

export default connect;