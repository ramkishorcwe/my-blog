//
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../utils/logo';
// import { Button } from '../index'
import { LoginOutlined, MoonFilled, SunFilled, UserOutlined } from '@ant-design/icons';
import authService from '../../appwrite/auth'
import { Link } from 'react-router';
import { message } from 'antd';
import { useSelector } from 'react-redux';
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
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const loginUserId = useSelector((store) => store.authState)
  if (!loginUserId?.userData?.$id) {
    navigate('/login')
  }

  useEffect(() => {
    setUserLoginStatus(userStatus)
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);

    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };

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
          <span style={{ background: isOnline ? 'green' : 'red', width: 2, height: 2 }} className={isOnline ? 'online' : 'offline'} />
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
