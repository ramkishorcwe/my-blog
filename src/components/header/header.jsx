
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../utils/logo';
import { Button } from '../index'
import { LoginOutlined, MoonFilled, SunFilled, UserOutlined } from '@ant-design/icons';
import authService from '../../appwrite/auth'
import { Link } from 'react-router';


const Header = ({ theme, updateTheme }) => {
  const [userLoginStatus, setUserLoginStatus] = useState();
  const navigate = useNavigate();
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    alignItems: 'center',
    zIndex: '1000',
    padding: '0px 20px',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '60px', // Ensure consistent height
    display: 'flex',
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

  const userLoginStatusCheck = async () => {
    try {
      const user = await authService.getUser()
      console.log(user)
      if (user) {
        setUserLoginStatus(true)
      } else {
        setUserLoginStatus(false)

      }

    } catch (error) {
      console.log(error)
    }
  }
  const logoutClick = async () => {
    try {
      const logoutStatus = await authService.logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // if (userAuth === false) {
    //   navigate('/login')
    // }
    userLoginStatusCheck()
  }, [])

  return (
    <header style={headerStyle}>
      <div style={headerSubContainer}>
        <Link to="/" style={logoStyle}>
          <Logo />
        </Link>

        <nav style={navStyle}>
          <Link
            to="/projects"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Projects
          </Link>
          <Link
            to="/articles"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Articles
          </Link>
          <Link
            to="/blog"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            Blogs
          </Link>
          <Link
            to="/about-us"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          >
            About
          </Link>
          {/* <Link
            to="/login"
            style={navLinkStyle}
            onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
            onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
          // onClick={()=>{authService.logout}}
          >
            {userLoginStatus ? <UserOutlined /> : <LoginOutlined />}
          </Link> */}
          <button onClick={() => { logoutClick() }}> {userLoginStatus ? <UserOutlined /> : <LoginOutlined />}</button>
          <Button {...{ onClick: updateTheme }}>
            {/* todo add icons in button from antd  */}
            {theme ? <MoonFilled /> : <SunFilled />}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
