import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
      <a className='navbar-brand' href='/'>
        Blue Owl
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          {/* <Link className='nav-item nav-link' to='/todos'>
            Todos
          </Link> */}
          <Link className='nav-item nav-link' to='/quotes'>
            Quotes
          </Link>
          <Link className='nav-item nav-link' to='/quotes/history'>
            History
          </Link>
          <Link className='nav-item nav-link' to='/robot'>
            Robot
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
