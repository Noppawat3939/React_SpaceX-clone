import React from 'react';
import './Section.css';
import {BsChevronDown} from 'react-icons/bs';

function Section() {
  return (
    <div className='section-container'>
        <div className="starship-bg">
            <div className="wrapper">
                <div className="section-inner">
                    <h1>starship update</h1>
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
        <div className="mission-bg">
            <div className="wrapper">
                <div className="section-inner">
                    <h4>recent launch</h4>
                    <h1>nrol-87 mission</h1>
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
        <div className="landnasa-bg">
            <div className="wrapper">
                <div className="section-inner">
                    <h1>starship to land nasa astronauts on the moon</h1>
                    <a href="#" className="btn">
                        <span>learn more</span>
                        <div className="hover"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section;