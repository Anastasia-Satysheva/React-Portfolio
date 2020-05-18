import React, { Fragment } from 'react';

import './About.css';
import profilePic from '../../assets/images/profilePic.jpg'

const about = () => {
    return(
		<Fragment>
			<h1>About Me</h1>
			<hr className="hr__content" />
			<img id="profile-pic" src={profilePic} alt="Anastasia Satysheva" />
			<p>Computers and technology have been a passion of mine for as long as I can remember. It started with a simple computer games when I was young. As of recent coding has come ahead in terms of something that I'm most comfortable doing. The same reward I used to get when I was younger and beat a game is now occurring when I solve a problem, fix a bug, work on a new project. I find true joy in programming, and even when it gets frustrating, the reward at the end of it is always worth it.

				When I’m not coding, you will find me in the gym or exploring different parts of our planet. I have visited 20 countries so far! Also I speak 3 languages: English, Russian and French. And right now I’m focused on learning more technical languages!
				
				Welcome to my page about pursuing a career(life) in web-developing! I hope you enjoy it. Always a pleasure!</p>
		</Fragment>
    );
}

export default about;