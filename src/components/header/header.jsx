// //
// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router';
// import Logo from '../utils/logo';
// // import { Button } from '../index'
// import { LoginOutlined, MoonFilled, SunFilled, UserOutlined } from '@ant-design/icons';
// import authService from '../../appwrite/auth'
// import { Link } from 'react-router';
// import { message } from 'antd';
// import { useSelector } from 'react-redux';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import ThemeContext  from '../../context/theme';

// export default function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const userStatus = useSelector((store) => store.authState.status)
//   const [userLoginStatus, setUserLoginStatus] = useState(userStatus);
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
//   const navigate = useNavigate()
//   const open = Boolean(anchorEl);
//   const loginUserId = useSelector((store) => store.authState)
//   if (!loginUserId?.userData?.$id) {
//     navigate('/login')
//   }
//   const{theme, toggleTheme} = useContext(ThemeContext);

//   useEffect(() => {
//     setUserLoginStatus(userStatus)
//     const on = () => setIsOnline(true);
//     const off = () => setIsOnline(false);
//     window.addEventListener("online", on);
//     window.addEventListener("offline", off);

//     return () => {
//       window.removeEventListener("online", on);
//       window.removeEventListener("offline", off);
//     };

//   }, [userStatus])
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     navigate("/profile");
//     setAnchorEl(null);
//   };

//   const logoutBtnClick = async () => {
//     console.log("logout button called ")
//     try {
//       const resp = await authService.logout()
//       console.log(resp)
//       handleClose()
//       message.success("Logout Success");
//       navigate("/login");
//     } catch (e) {
//       message.error(e.message)
//     }
//   }
//   return (
//     <React.Fragment>
//       {/*<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: "black" }}>*/}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', color: "black", backgroundColor: '#636B74' }}>
//         <Typography component={Link} to="/" sx={{ minWidth: 100 }}>
//           <Logo />
//           <span style={{ background: isOnline ? 'green' : 'red', width: 2, height: 2 }} className={isOnline ? 'online' : 'offline'} />
//         </Typography>
//         <Box component="section" sx={{ pt: 2 }}>
//           <Typography component={Link} to="/" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Blogs</Typography>
//           <Typography component={Link} to="/create-blog" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Create Blog</Typography>
//           <Typography component={Link} to="/project" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Projects</Typography>
//           <Typography component={Link} to="/about-us" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>About</Typography>
//           {/*<Typography component={Link} to="/login" sx={{ minWidth: 100, p: 2, color: "black", textDecoration: 'none' }}>Login</Typography>*/}
//           <Tooltip title="Account settings">
//             <IconButton
//               onClick={handleClick}
//               size="small"
//               sx={{ ml: 2 }}
//               aria-controls={open ? 'account-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? 'true' : undefined}
//             >
//               <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         slotProps={{
//           paper: {
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&::before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         {userLoginStatus ? <MenuItem onClick={logoutBtnClick}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//             <Typography sx={{ marginLeft: 2 }}>
//               Logout
//             </Typography>
//           </ListItemIcon>
//         </MenuItem> : <MenuItem onClick={() => { navigate("/login") }}>
//           <ListItemIcon>
//             <LoginOutlined fontSize="small" /><Typography sx={{ marginLeft: 2 }}>
//               Login
//             </Typography>
//           </ListItemIcon>
//         </MenuItem>
//         }
//       </Menu>
//       <button onClick={toggleTheme} style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: theme === 'light' ? '#333' : '#fff', color: theme === 'light' ? '#fff' : '#333', border: 'none', borderRadius: '50%', zIndex:99 ,width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
//         {theme === 'light' ? '🌙' : '☀️'}
//       </button>

//     </React.Fragment>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link, NavLink } from "react-router";
import Logo from "../utils/logo";
import {
  LoginOutlined,
  MoonFilled,
  SunFilled,
  UserOutlined,
} from "@ant-design/icons";
import authService from "../../appwrite/auth";
import { message } from "antd";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ThemeContext from "../../context/theme";

const navLinks = [
  { label: "Blogs", to: "/" },
  { label: "Create Blog", to: "/create-blog" },
  { label: "Projects", to: "/project" },
  { label: "About", to: "/about-us" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const userStatus = useSelector((store) => store.authState.status);
  const [userLoginStatus, setUserLoginStatus] = useState(userStatus);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const loginUserId = useSelector((store) => store.authState);

  if (!loginUserId?.userData?.$id) {
    navigate("/login");
  }

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setUserLoginStatus(userStatus);

    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
      window.removeEventListener("scroll", onScroll);
    };
  }, [userStatus]);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileNav = () => {
    navigate("/profile");
    setAnchorEl(null);
  };

  const logoutBtnClick = async () => {
    try {
      await authService.logout();
      handleClose();
      message.success("Logout Success");
      navigate("/login");
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <React.Fragment>
      {/* ─────────── HEADER BAR ─────────── */}
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 6 },
          py: 1.5,
          backdropFilter: "blur(12px)",
          backgroundColor: scrolled
            ? "rgba(2, 6, 23, 0.85)"
            : "rgba(15, 23, 42, 0.65)",
          borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo + status dot */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
          }}
        >
          <Logo />
          <Tooltip title={isOnline ? "Online" : "Offline"}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: isOnline ? "#22c55e" : "#ef4444",
                boxShadow: isOnline
                  ? "0 0 8px rgba(34,197,94,0.8)"
                  : "0 0 8px rgba(239,68,68,0.8)",
                ml: 0.5,
              }}
            />
          </Tooltip>
        </Box>

        {/* Nav + account */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.to}
              component={NavLink}
              to={link.to}
              end={link.to === "/"}
              sx={{
                textDecoration: "none",
                color: "#cbd5e1",
                fontSize: 14,
                fontWeight: 500,
                px: { xs: 1, sm: 1.5 },
                py: 0.75,
                borderRadius: "8px",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                },
                "&.active": {
                  color: "#ffffff",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  border: "1px solid rgba(59, 130, 246, 0.4)",
                },
              }}
            >
              {link.label}
            </Box>
          ))}

          {/* Account menu trigger */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                ml: { xs: 0.5, sm: 1.5 },
                border: "1px solid rgba(71, 85, 105, 0.6)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(59, 130, 246, 0.7)",
                  boxShadow: "0 0 12px rgba(59, 130, 246, 0.3)",
                },
              }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#3b82f6",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {loginUserId?.userData?.name?.[0]?.toUpperCase() || "M"}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* ─────────── ACCOUNT MENU ─────────── */}
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
              overflow: "visible",
              mt: 1.5,
              minWidth: 220,
              backgroundColor: "rgba(15, 23, 42, 0.98)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(51, 65, 85, 0.8)",
              color: "#e2e8f0",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                bgcolor: "#3b82f6",
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "rgba(15, 23, 42, 0.98)",
                borderTop: "1px solid rgba(51, 65, 85, 0.8)",
                borderLeft: "1px solid rgba(51, 65, 85, 0.8)",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
              "& .MuiMenuItem-root": {
                fontSize: 14,
                color: "#cbd5e1",
                borderRadius: "8px",
                mx: 0.5,
                my: 0.25,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  color: "#ffffff",
                },
              },
              "& .MuiListItemIcon-root": {
                color: "#94a3b8",
                minWidth: 32,
              },
              "& .MuiDivider-root": {
                borderColor: "rgba(51, 65, 85, 0.6)",
                my: 1,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleProfileNav}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleProfileNav}>
          <Avatar /> My account
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleProfileNav}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleProfileNav}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {userLoginStatus ? (
          <MenuItem onClick={logoutBtnClick}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <LoginOutlined fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
      </Menu>

      {/* ─────────── FLOATING THEME TOGGLE ─────────── */}
      <Tooltip
        title={theme === "light" ? "Switch to dark" : "Switch to light"}
        placement="left"
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 99,
            width: 52,
            height: 52,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            backgroundColor:
              theme === "light"
                ? "rgba(15, 23, 42, 0.95)"
                : "rgba(241, 245, 249, 0.95)",
            color: theme === "light" ? "#f1f5f9" : "#0f172a",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1) rotate(15deg)";
            e.currentTarget.style.boxShadow =
              "0 15px 30px -5px rgba(59, 130, 246, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px -5px rgba(0, 0, 0, 0.5)";
          }}
        >
          {theme === "light" ? (
            <MoonFilled style={{ fontSize: 20 }} />
          ) : (
            <SunFilled style={{ fontSize: 20, color: "#f59e0b" }} />
          )}
        </button>
      </Tooltip>
    </React.Fragment>
  );
}
