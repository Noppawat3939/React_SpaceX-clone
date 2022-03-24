import React from 'react';
import { footerlinks } from './data';
import './Footer.css'
import { useGlobalContext } from './Context';

function Footer() {
    const {year} = useGlobalContext();

  return (
    <div className='footer-container'>
        <ul className="footer-links footer-left">
            <li>
                <p>spacex &copy; <span>{year}</span></p>
            </li>
        </ul>
        <ul className="footer-links footer-right">
        {footerlinks.map((footerlink, index) => {
                const {url , text} = footerlink;
                return(
                    <li key={index}>
                        <a href={url}>{text}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Footer;