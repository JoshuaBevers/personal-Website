import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';
import '../index.css';

//images
import python from '../images/python-logo.jpg';
import node from '../images/node.png';
import postgres from '../images/postgres.png';
import react from '../images/react.png';
import redux from '../images/redux.jpeg';
import github from '../images/github.png';
import coding from '../images/coding.webp';
import chakram from '../images/chakram.webp';
import html from '../images/html.jpeg';
import jquery from '../images/Jquery.jpeg';

class home extends Component {
  componentDidMount() {
    document.title = 'Home';
  }

  render() {
    return (
      <div>
        <div className='homeHeader'>
          <p>
            Joshua Bevers - Developer
            <img src={logo} className='App-logo' alt='logo' />
          </p>
          <p className='smallHeader'>Please Don't Panic</p>
          <div>
            <Link to='/resume'>
              <button className='openingButton'>Resume</button>
            </Link>
            <Link to='/about'>
              <button className='openingButton'>About Me</button>
            </Link>
          </div>
        </div>
        <div className='middleHeader'>
          <div>
            Maybe the skills are the friends I've found along the way?
            <div>
              <img className='picList' src={python} alt='python'></img>
              <img className='picList' src={node} alt=''></img>
              <img className='picList' src={postgres} alt=''></img>
              <img className='picList' src={react} alt=''></img>
              <img className='picList' src={redux} alt=''></img>
              <img className='picList' src={github} alt=''></img>
              <img className='picList' src={html} alt=''></img>
              <img className='picList' src={jquery} alt=''></img>
            </div>
          </div>
        </div>
        <div className='homeHeader'>
          <div className='margin-bottom'>My projects.</div>
          <div>
            <img className='doublePic' src={coding} alt=''></img>
            <img className='doublePic' src={chakram} alt=''></img>
          </div>
          <div>
            <Link to='/in-progress'>
              <button className='openingButton'>In Progress</button>
            </Link>
            <Link to='/completed'>
              <button className='openingButton'>Complete</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
