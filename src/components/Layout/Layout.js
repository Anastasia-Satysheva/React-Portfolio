import React from 'react';

import './Layout.css';
import Header from '../Header/Header';
import Connect from '../Connect/Connect';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <div className="page-wrap standard-text">
        <Header/>
        
        <section className="middle-bar">
          <div className="middle-wrap">
            <div className="middle-bar-content-box middle-bar-content-box__main">
              {props.children}
            </div>

            <Connect />
            
          </div>
        </section>

        <Footer/>
    </div>
);

export default layout