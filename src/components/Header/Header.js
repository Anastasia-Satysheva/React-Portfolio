import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {
    return(
		<section className="top-bar">
			<div className="top-wrap">
				<div className="top-bar-name">
					<h1 className="h1__top-bar">Anastasia Satysheva</h1>
				</div>
				<nav className="top-bar-navigation">
					<div className="nav-link-wrap">
						<NavLink className="nav-link" to='/'>About</NavLink>
					</div>
					<div className="nav-link-spacer">|
					</div>
					<div className="nav-link-wrap">
					<NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
					</div>
					<div className="nav-link-spacer">|
					</div>
					<div className="nav-link-wrap">
					<NavLink className="nav-link" to='/contact'>Contact</NavLink>
					</div>
				</nav>
			</div>
		</section>
    );
}
export default Header;