//
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../utils/logo';
// import { Button } from '../index'
import { LoginOutlined, MoonFilled, SunFilled, UserOutlined } from '@ant-design/icons';
import authService from '../../appwrite/auth'
import { Link } from 'react-router';
import { message } from 'antd'
  ;
import { useSelector } from 'react-redux';
//
//
// const Header = () => {
//   const [userLoginStatus, setUserLoginStatus] = useState();
//   const [theme, setTheme] = useState(true); //todo system se
//   const loginUser = useSelector((state) => state.authState.userData)
//   const navigate = useNavigate();
//
//   const headerStyle = {
//     backgroundColor: '#282c34',
//     color: 'white',
//     alignItems: 'center',
//     zIndex: '1000',
//     padding: '0px 20px',
//     maxWidth: '100vw',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     height: '60px', // Ensure consistent height
//     display: 'flex',
//   };
//
//   const headerSubContainer = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '95%'
//
//   }
//   const logoStyle = {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     color: '#61dafb',
//   };
//
//   const navStyle = {
//     display: 'flex',
//     alignItems: "center",
//     gap: '20px',
//   };
//
//   const navLinkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'color 0.3s',
//   };
//
//   const navLinkHover = {
//     color: '#61dafb',
//   };
//
//   function updateTheme() {
//     console.log("Hello")
//     setTheme(!theme)
//   }
//
//   const userLoginStatusCheck = async () => {
//     try {
//       const user = await authService.getUser()
//       console.log(user)
//       if (user) {
//         setUserLoginStatus(true)
//       } else {
//         setUserLoginStatus(false)
//
//       }
//
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const logoutClick = async () => {
//     if (loginUser && loginUser?.status) {
//       try {
//         const logoutStatus = await authService.logout()
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     navigate('/login')
//   }
//
//   useEffect(() => {
//     // if (userAuth === false) {
//     //   navigate('/login')
//     // }
//     userLoginStatusCheck()
//   }, [])
//
//   return (
//     <header style={headerStyle}>
//       <div style={headerSubContainer}>
//         <Link to="/" style={logoStyle}>
//           <Logo />
//         </Link>
//
//         <nav style={navStyle}>
//           <Link
//             to="/"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
//             onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
//           >
//             Blogs
//           </Link>
//           <Link
//             to="/projects"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
//             onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
//           >
//             Projects
//           </Link>
//           <Link
//             to="/create-blog"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
//             onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
//           >
//             Create Blog
//           </Link>
//           <Link
//             to="/about-us"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
//             onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
//           >
//             About
//           </Link>
//           {/* <Link
//             to="/login"
//             style={navLinkStyle}
//             onMouseOver={(e) => (e.target.style.color = navLinkHover.color)}
//             onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
//           // onClick={()=>{authService.logout}}
//           >
//             {userLoginStatus ? <UserOutlined /> : <LoginOutlined />}
//           </Link> */}
//           <button style={{ backgroundColor: "unset", color: 'white', border: 'unset', fontSize: 'large' }} onClick={() => { logoutClick() }}> {!userLoginStatus ? <UserOutlined /> : <LoginOutlined />}</button>
//           <Button {...{ onClick: updateTheme }}>
//             {/* todo add icons in button from antd  */}
//             {theme ? <MoonFilled /> : <SunFilled />}
//           </Button>
//         </nav>
//       </div>
//     </header>
//   );
// };
//
// export default Header;

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userStatus = useSelector((store) => store.authState.status)
  const [userLoginStatus, setUserLoginStatus] = useState(userStatus);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const loginUserId = useSelector((store) => store.authState)
  if (!loginUserId?.userData?.$id) {
    navigate('/login')
  }

  useEffect(() => {
    setUserLoginStatus(userStatus)
  }, [userStatus])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutBtnClick = async () => {
    console.log("logout button called ")
    try {
      const resp = await authService.logout()
      console.log(resp)
      handleClose()
      message.success("Logout Success");
      navigate("/login");
    } catch (e) {
      message.error(e.message)
    }
  }
  return (
    <React.Fragment>
      {/*<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: "black" }}>*/}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', color: "black", backgroundColor: '#636B74' }}>
        <Typography component={Link} to="/" sx={{ minWidth: 100 }}>
          <Logo />
        </Typography>
        <Box component="section" sx={{ pt: 2 }}>
          <Typography component={Link} to="/" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Blogs</Typography>
          <Typography component={Link} to="/create-blog" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Create Blog</Typography>
          <Typography component={Link} to="/project" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Projects</Typography>
          <Typography component={Link} to="/about-us" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>About</Typography>
          {/*<Typography component={Link} to="/login" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Login</Typography>*/}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        {userLoginStatus ? <MenuItem onClick={logoutBtnClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
            <Typography sx={{ marginLeft: 2 }}>
              Logout
            </Typography>
          </ListItemIcon>
        </MenuItem> : <MenuItem onClick={() => { navigate("/login") }}>
          <ListItemIcon>
            <LoginOutlined fontSize="small" /><Typography sx={{ marginLeft: 2 }}>
              Login
            </Typography>
          </ListItemIcon>
        </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
}
