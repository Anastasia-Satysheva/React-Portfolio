import React, { Component, Fragment, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import About from './containers/About/About';
import Layout from './components/Layout/Layout';
import Modal from './components/Modal/Modal';
import Spinner from './components/Spinner/Spinner';
import {Web} from './components/Web'

const Portfolio = React.lazy(() => (
  import('./containers/Portfolio/Portfolio')
));

const Contact = React.lazy(() => (
  import('./containers/Contact/Contact')
));

class App extends Component{
  state = {
		isModalOpen: false,
		buttonId:0
	}

	modalOpen = (id) => {
		this.setState({
		  isModalOpen: true,
			buttonId: id
		});
	}

	modalClose = () => {
		this.setState({
			isModalOpen: false
		});
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path='/' exact component={About} />
            <Route path="/portfolio" render={() => (
              <Suspense fallback={<Spinner />}>
                <Portfolio modalOpen={this.modalOpen} />
              </Suspense>
            )} />
            <Route path="/contact" render={() => (
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            )} />
            <Redirect to='/' />
          </Switch>
        </Layout>

        <Modal show={this.state.isModalOpen} modalClosed={this.modalClose}>
          <h2 id="h_45">{Web[this.state.buttonId].name}</h2>
          <hr />
          <p>{Web[this.state.buttonId].description}</p>
          <hr />
          <a className='modal-btn1' href={Web[this.state.buttonId].github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
          <a  className='modal-btn2' href={Web[this.state.buttonId].website} target="_blank" rel="noopener noreferrer"><button>Website</button></a>
        </Modal>
        
      </Fragment>
    );
  }
}

export default App;
