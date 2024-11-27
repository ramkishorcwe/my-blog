
import React from 'react';
import Logo from '../utils/logo';
import { Button } from '../index'

const Header = ({ theme, updateTheme }) => {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    alignItems: 'center',
    // position: 'fixed',
    // top: '0',
    zIndex: '1000',
    padding: '0px 20px',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '60px', // Ensure consistent height
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center'
  };

  const headerSubContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%'

  }
  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#61dafb',
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  };

  const navLinkHover = {
    color: '#61dafb',
  };

  return (
    <header style={headerStyle}>
      <div style={headerSubContainer}>
        <a href="/" style={logoStyle}>
          <Logo />
        </a>

        <nav style={navStyle}>
          <a
            href="#about"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            About
          </a>
          <a
            href="#projects"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Contact
          </a>
          <a
            href="#blog"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Blogs
          </a>
          <a
            href="#login"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Login
          </a>
          <Button {...{ onClick: updateTheme, className: { ...{ backgroundColor: "black", color: 'white' } } }}>
            {/* todo add icons in button from antd  */}
            {theme ? 'Dark' : 'Light'}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
