import React from 'react'

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '20px 10px',
    // position: 'relative',
    // position: 'fixed',
    // top: '0',
    zIndex: '1000',
    // bottom: '0',
    width: '100%',
    fontSize: '14px',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const socialIcons = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '18px',
  };
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2024 Ram Kishor. All Rights Reserved.</p>
      </div>
      <div style={socialIcons}>
        <a style={iconStyle} href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a style={iconStyle} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a style={iconStyle} href="mailto:example@example.com">
          Email
        </a>
      </div>
      <div>
        <a href="/privacy" style={linkStyle}>Privacy Policy</a> |
        <a href="/terms" style={linkStyle}>Terms of Service</a>
      </div>
    </footer>
  )
}

export default Footer

