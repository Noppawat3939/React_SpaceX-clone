import React, {useState , useContext, useEffect} from 'react';
import './Navbar.css';
import { navLinks } from './data';
import Sidebar from './Sidebar';
import { useGlobalContext } from './Context';

function Navbar() {
    const {showSidebar, openSidebar, setShowSidebar} = useGlobalContext();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
   
        const controlNavbar = () => {
    
          if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
              setShow(false);

            } else if (window.scrollY === lastScrollY) {
                setShow(false);
            }
            else { 
              setShow(true);
            }
            setLastScrollY(window.scrollY); 
          }
        };
      
        useEffect(() => {
          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
              window.removeEventListener('scroll', controlNavbar);
            };
          }
        }, [lastScrollY]);
   

  return (
      <nav className={`scroll-down ${show && 'scroll-up'}`}>
          <div className='nav-bg'></div>
          <div className="nav-left">
          <div className="nav-logo">
              <a href="#">
                  <img src="https://download.logo.wine/logo/SpaceX/SpaceX-White-Logo.wine.png" alt="logo" className='logo'/>
              </a>
          </div>
          <div className="nav-menu">
              {navLinks.map((navlinks) => {
                  const {id,text,url} = navlinks
                  return (
                      <ul key={id}>
                          <li>
                            <a href={url}>{text}</a>
                          </li>
                      </ul>
                  )
              })}
          </div>
          </div>
          <div className="nav-right">
              <ul className="nav-menu">
                  <li>
                      <a href="#">shop</a>
                  </li>
              </ul>
              <Sidebar showSidebar={showSidebar} openSidebar={openSidebar}/>
              <button className={`${showSidebar ? 'bars-btn active' : 'bars-btn'}`} onClick={openSidebar}>
                  <div className="bar" id="bar1"></div>
                  <div className="bar" id="bar2"></div>
                  <div className="bar" id="bar3"></div>
              </button>
          </div>
      </nav>
  )
}

export default Navbar;