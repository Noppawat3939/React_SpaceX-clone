import React from 'react';
import './Header.css';
import {BsChevronDown} from 'react-icons/bs';

function Header() {
  return (
    <div className='header-container'>
        <div className="wrapper">
          <div className="section-inner">
              <h4>recent launch</h4>
              <h1>starlink mission</h1>
                <a href="#" className="btn">
                  <span>re-watch</span>
                  <div className="hover"></div>
                </a>
          </div>
            <div className="arrow-down">
              <BsChevronDown className='arrow-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header;