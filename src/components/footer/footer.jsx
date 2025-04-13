// import React from 'react'

// const Footer = () => {
//   const footerStyle = {
//     backgroundColor: '#282c34',
//     color: 'white',
//     textAlign: 'center',
//     padding: '20px 10px',
//     // position: 'relative',
//     position: 'fixed',
//     zIndex: '1000',
//     bottom: '0',
//     width: '97%',
//     fontSize: '14px',
//   };

//   const linkStyle = {
//     color: '#61dafb',
//     textDecoration: 'none',
//     margin: '0 10px',
//   };

//   const socialIcons = {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '10px 0',
//   };

//   const iconStyle = {
//     margin: '0 10px',
//     fontSize: '18px',
//   };
//   return (
//     <footer style={footerStyle}>
//       <div>
//         <p>&copy; 2024 Ram Kishor. All Rights Reserved.</p>
//       </div>
//       <div style={socialIcons}>
//         <a style={iconStyle} href="https://github.com" target="_blank" rel="noopener noreferrer">
//           GitHub
//         </a>
//         <a style={iconStyle} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           LinkedIn
//         </a>
//         <a style={iconStyle} href="mailto:example@example.com">
//           Email
//         </a>
//       </div>
//       <div>
//         <a href="/privacy" style={linkStyle}>Privacy Policy</a> |
//         <a href="/terms" style={linkStyle}>Terms of Service</a>
//       </div>
//     </footer>
//   )
// }

// export default Footer
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function Footer() {
  const [color, setColor] = React.useState('neutral');
  return (
      <Sheet
          variant="solid"
          color={color}
          invertedColors
          sx={[
            {
              flexGrow: 1,
              p: 2,
              borderRadius: { xs: 0, sm: 'sm' },
            },
            color !== 'neutral' && {
              bgcolor: `${color}.800`,
            },
          ]}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
              variant="soft"
              size="sm"
              onClick={() => {
                const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

                const nextColorIndex = colors.indexOf(color) + 1;
                setColor(colors[nextColorIndex] ?? colors[0]);
              }}
          >
            <ColorLensRoundedIcon fontSize="small" />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton variant="plain">
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton variant="plain">
            <GitHubIcon />
          </IconButton>
          <Input
              variant="soft"
              placeholder="Type in your email"
              type="email"
              name="email"
              endDecorator={
                <IconButton variant="soft" aria-label="subscribe">
                  <SendIcon />
                </IconButton>
              }
              sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'flex-start' },
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
        >
          <Card
              variant="soft"
              size="sm"
              sx={{
                flexDirection: { xs: 'row', md: 'column' },
                minWidth: { xs: '100%', md: 'auto' },
                gap: 1,
              }}
          >
            <AspectRatio
                ratio="21/9"
                minHeight={80}
                sx={{ flexBasis: { xs: 200, md: 'initial' } }}
            >
              <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
            </AspectRatio>
            <CardContent>
              <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
              <Typography level="body-xs">Blog post</Typography>
            </CardContent>
          </Card>
          <List
              size="sm"
              orientation="horizontal"
              wrap
              sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
          >
            <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
              <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
              <List>
                <ListItem>
                  <ListItemButton>Services</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Blog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>About</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
            <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
              <ListSubheader sx={{ fontWeight: 'xl' }}>About Me</ListSubheader>
              <List>
                <ListItem>
                  <ListItemButton>My Projects</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>My Spaces</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>My Experiences</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </Sheet>
  );
}


