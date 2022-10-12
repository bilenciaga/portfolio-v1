import React from 'react';
import { useState } from 'react';
import './Navbar.scss';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <img src='/images/logo.svg' alt="logo" />
      </div>
      <ul className="navbar__links">
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <li className="navbar__links-link" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      <div className="navbar__menu">
      <HiMenuAlt3 onClick={() => setToggle(true)} />
      {toggle && (
        <div className='navbar__menu-links'>
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {['home', 'about', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar