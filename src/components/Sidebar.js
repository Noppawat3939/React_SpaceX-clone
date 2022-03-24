import React from 'react';
import { navSidebar } from './data';

function Sidebar( {showSidebar} ) {
  return (
    <div className={`${showSidebar ? 'sidebar-container show': 'sidebar-container'}`}>
        <ul className="sidebar-links">
            {navSidebar.map((sidebar, index) => {
                const {id,text,url} = sidebar;
                return (
                    <li key={id} className={`primary ${index < 6 && 'secondary'}`}>
                        <a href={url}>{text}</a>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Sidebar;