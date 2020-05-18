import React, { Fragment } from 'react';

import './Portfolio.css';
import hike from '../../assets/images/hike.png';
import updatePage from '../../assets/images/updatePage.png';
import password from '../../assets/images/password.png';
import planner from '../../assets/images/planner.png';
import noteTaker from '../../assets/images/NoteTaker.png';
import weather from '../../assets/images/Weather.png';

const portfolio = (props) => {
	return(
		<Fragment>
			<h1>Porfolio</h1>
			<hr className="hr__content" />
			<div className="portfolio-item portfolio-item__left" onClick={() => props.modalOpen(0)}>
				<img className="portfolio-pic portfolio-link" src={hike} alt="hike" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Hikes-n-Hops</h2>
				</div>
			</div>
			<div className="portfolio-item portfolio-item__right" onClick={() => props.modalOpen(1)}>
				<img className="portfolio-pic portfolio-link" src={updatePage} alt="business" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Business App</h2>
				</div>
			</div>
			<div className="portfolio-item portfolio-item__left" onClick={() => props.modalOpen(2)}>
				<img className="portfolio-pic portfolio-link" src={password} alt="band" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Password Gen</h2>
				</div>
			</div>
			<div className="portfolio-item portfolio-item__right" onClick={() => props.modalOpen(3)}>
				<img className="portfolio-pic portfolio-link" src={planner} alt="artwork" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Daily planner</h2>
				</div>
			</div>
			<div className="portfolio-item portfolio-item__left" onClick={() => props.modalOpen(4)}>
				<img className="portfolio-pic portfolio-link" src={noteTaker} alt="band" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Note Taker</h2>
				</div>
			</div>
				
			<div className="portfolio-item portfolio-item__right" onClick={() => props.modalOpen(5)}>
				<img className="portfolio-pic portfolio-link" src={weather} alt="band" />
				<div className="portfolio-title">
					<h2 className="h2__portfolio-title">Weather App</h2>
				</div>
			</div>
		</Fragment>
    );
}

export default portfolio;