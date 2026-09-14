// export default Footer
// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Divider from '@mui/joy/Divider';
// import Input from '@mui/joy/Input';
// import List from '@mui/joy/List';
// import ListSubheader from '@mui/joy/ListSubheader';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import SendIcon from '@mui/icons-material/Send';
// import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

// export default function Footer() {
//   const [color, setColor] = React.useState('neutral');
//   return (
//       <Sheet
//           variant="solid"
//           color={color}
//           invertedColors
//           sx={[
//             {
//               flexGrow: 1,
//               p: 2,
//               borderRadius: { xs: 0, sm: 'sm' },
//             },
//             color !== 'neutral' && {
//               bgcolor: `${color}.800`,
//             },
//           ]}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <IconButton
//               variant="soft"
//               size="sm"
//               onClick={() => {
//                 const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

//                 const nextColorIndex = colors.indexOf(color) + 1;
//                 setColor(colors[nextColorIndex] ?? colors[0]);
//               }}
//           >
//             <ColorLensRoundedIcon fontSize="small" />
//           </IconButton>
//           <Divider orientation="vertical" />
//           <IconButton variant="plain">
//             <FacebookRoundedIcon />
//           </IconButton>
//           <IconButton variant="plain">
//             <GitHubIcon />
//           </IconButton>
//           <Input
//               variant="soft"
//               placeholder="Type in your email"
//               type="email"
//               name="email"
//               endDecorator={
//                 <IconButton variant="soft" aria-label="subscribe">
//                   <SendIcon />
//                 </IconButton>
//               }
//               sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
//           />
//         </Box>
//         <Divider sx={{ my: 2 }} />
//         <Box
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', md: 'row' },
//               alignItems: { md: 'flex-start' },
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//               gap: 2,
//             }}
//         >
//           <Card
//               variant="soft"
//               size="sm"
//               sx={{
//                 flexDirection: { xs: 'row', md: 'column' },
//                 minWidth: { xs: '100%', md: 'auto' },
//                 gap: 1,
//               }}
//           >
//             <AspectRatio
//                 ratio="21/9"
//                 minHeight={80}
//                 sx={{ flexBasis: { xs: 200, md: 'initial' } }}
//             >
//               <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
//             </AspectRatio>
//             <CardContent>
//               <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
//               <Typography level="body-xs">Blog post</Typography>
//             </CardContent>
//           </Card>
//           <List
//               size="sm"
//               orientation="horizontal"
//               wrap
//               sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
//           >
//             <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
//               <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
//               <List>
//                 <ListItem>
//                   <ListItemButton>Services</ListItemButton>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemButton>Blog</ListItemButton>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemButton>About</ListItemButton>
//                 </ListItem>
//               </List>
//             </ListItem>
//             <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
//               <ListSubheader sx={{ fontWeight: 'xl' }}>About Me</ListSubheader>
//               <List>
//                 <ListItem>
//                   <ListItemButton>My Projects</ListItemButton>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemButton>My Spaces</ListItemButton>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemButton>My Experiences</ListItemButton>
//                 </ListItem>
//               </List>
//             </ListItem>
//           </List>
//         </Box>
//       </Sheet>
//   );
// }

// import * as React from "react";
// import Box from "@mui/joy/Box";
// import IconButton from "@mui/joy/IconButton";
// import Divider from "@mui/joy/Divider";
// import Typography from "@mui/joy/Typography";
// import Sheet from "@mui/joy/Sheet";
// import Link from "@mui/joy/Link";
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
// import ListItemButton from "@mui/joy/ListItemButton";
// import ListSubheader from "@mui/joy/ListSubheader";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneIcon from "@mui/icons-material/Phone";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// const socialLinks = [
//   {
//     label: "GitHub",
//     href: "https://github.com/ramkishorcwe",
//     icon: <GitHubIcon fontSize="small" />,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/ram-kishor-47734a206",
//     icon: <LinkedInIcon fontSize="small" />,
//   },
//   {
//     label: "Email",
//     href: "mailto:iamrkishoryadav@gmail.com",
//     icon: <MailOutlineIcon fontSize="small" />,
//   },
//   {
//     label: "Phone",
//     href: "tel:+918868988610",
//     icon: <PhoneIcon fontSize="small" />,
//   },
// ];

// const sitemapLinks = [
//   { label: "Home", to: "/" },
//   { label: "Blogs", to: "/" },
//   { label: "Create Blog", to: "/create-blog" },
//   { label: "Projects", to: "/project" },
//   { label: "About", to: "/about-us" },
// ];

// const aboutLinks = [
//   { label: "My Projects", to: "/project" },
//   { label: "My Skills", to: "/about-us" },
//   { label: "My Experience", to: "/about-us" },
//   { label: "Resume", to: "/about-us" },
// ];

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Sheet
//       variant="solid"
//       invertedColors
//       sx={{
//         flexGrow: 1,
//         mt: 8,
//         backgroundColor: "#020617",
//         borderTop: "1px solid rgba(51, 65, 85, 0.6)",
//         color: "#e2e8f0",
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: 1200,
//           mx: "auto",
//           px: { xs: 3, sm: 4, md: 6 },
//           py: { xs: 5, md: 6 },
//         }}
//       >
//         {/* ─────────── TOP ROW: BRAND + SOCIAL ─────────── */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             justifyContent: "space-between",
//             alignItems: { xs: "flex-start", md: "center" },
//             gap: 3,
//             mb: 4,
//           }}
//         >
//           <Box>
//             <Typography
//               level="h4"
//               sx={{
//                 color: "#f1f5f9",
//                 fontWeight: 700,
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Ram Kishor
//             </Typography>
//             <Typography
//               level="body-sm"
//               sx={{ color: "#94a3b8", mt: 0.5, maxWidth: 400 }}
//             >
//               Software Developer building scalable, user-focused web
//               applications with modern tooling.
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", gap: 1.5 }}>
//             {socialLinks.map((item) => (
//               <IconButton
//                 key={item.label}
//                 component="a"
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={item.label}
//                 variant="outlined"
//                 sx={{
//                   color: "#cbd5e1",
//                   borderColor: "rgba(71, 85, 105, 0.6)",
//                   transition: "all 0.25s ease",
//                   "&:hover": {
//                     color: "#ffffff",
//                     borderColor: "rgba(59, 130, 246, 0.7)",
//                     backgroundColor: "rgba(59, 130, 246, 0.15)",
//                     transform: "translateY(-2px)",
//                   },
//                 }}
//               >
//                 {item.icon}
//               </IconButton>
//             ))}
//           </Box>
//         </Box>

//         <Divider sx={{ borderColor: "rgba(51, 65, 85, 0.6)", mb: 4 }} />

//         {/* ─────────── LINK COLUMNS ─────────── */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
//             gap: 4,
//             mb: 4,
//           }}
//         >
//           <List
//             size="sm"
//             sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}
//           >
//             <ListSubheader
//               sx={{
//                 color: "#f1f5f9",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 bgcolor: "transparent",
//                 px: 0,
//               }}
//             >
//               Sitemap
//             </ListSubheader>
//             {sitemapLinks.map((link) => (
//               <ListItem key={link.label} sx={{ px: 0 }}>
//                 <ListItemButton
//                   component="a"
//                   href={link.to}
//                   sx={{
//                     color: "#94a3b8",
//                     fontSize: "14px",
//                     px: 0,
//                     py: 0.5,
//                     backgroundColor: "transparent",
//                     "&:hover": {
//                       color: "#ffffff",
//                       backgroundColor: "transparent",
//                     },
//                   }}
//                 >
//                   {link.label}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           <List
//             size="sm"
//             sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}
//           >
//             <ListSubheader
//               sx={{
//                 color: "#f1f5f9",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 bgcolor: "transparent",
//                 px: 0,
//               }}
//             >
//               About Me
//             </ListSubheader>
//             {aboutLinks.map((link) => (
//               <ListItem key={link.label} sx={{ px: 0 }}>
//                 <ListItemButton
//                   component="a"
//                   href={link.to}
//                   sx={{
//                     color: "#94a3b8",
//                     fontSize: "14px",
//                     px: 0,
//                     py: 0.5,
//                     backgroundColor: "transparent",
//                     "&:hover": {
//                       color: "#ffffff",
//                       backgroundColor: "transparent",
//                     },
//                   }}
//                 >
//                   {link.label}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           {/* Contact column */}
//           <List
//             size="sm"
//             sx={{
//               "--ListItem-radius": "8px",
//               "--List-gap": "4px",
//               gridColumn: { xs: "span 2", md: "auto" },
//             }}
//           >
//             <ListSubheader
//               sx={{
//                 color: "#f1f5f9",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 bgcolor: "transparent",
//                 px: 0,
//               }}
//             >
//               Get in Touch
//             </ListSubheader>
//             <ListItem sx={{ px: 0 }}>
//               <ListItemButton
//                 component="a"
//                 href="mailto:iamrkishoryadav@gmail.com"
//                 sx={{
//                   color: "#94a3b8",
//                   fontSize: "14px",
//                   px: 0,
//                   py: 0.5,
//                   backgroundColor: "transparent",
//                   "&:hover": {
//                     color: "#ffffff",
//                     backgroundColor: "transparent",
//                   },
//                 }}
//               >
//                 iamrkishoryadav@gmail.com
//               </ListItemButton>
//             </ListItem>
//             <ListItem sx={{ px: 0 }}>
//               <ListItemButton
//                 component="a"
//                 href="tel:+918868988610"
//                 sx={{
//                   color: "#94a3b8",
//                   fontSize: "14px",
//                   px: 0,
//                   py: 0.5,
//                   backgroundColor: "transparent",
//                   "&:hover": {
//                     color: "#ffffff",
//                     backgroundColor: "transparent",
//                   },
//                 }}
//               >
//                 +91 8868988610
//               </ListItemButton>
//             </ListItem>
//             <ListItem sx={{ px: 0 }}>
//               <ListItemButton
//                 component="a"
//                 href="https://www.linkedin.com/in/ram-kishor-47734a206"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: "#94a3b8",
//                   fontSize: "14px",
//                   px: 0,
//                   py: 0.5,
//                   backgroundColor: "transparent",
//                   "&:hover": {
//                     color: "#ffffff",
//                     backgroundColor: "transparent",
//                   },
//                 }}
//               >
//                 LinkedIn Profile
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>

//         <Divider sx={{ borderColor: "rgba(51, 65, 85, 0.6)", mb: 3 }} />

//         {/* ─────────── BOTTOM ROW ─────────── */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <Typography
//             level="body-xs"
//             sx={{
//               color: "#64748b",
//               display: "flex",
//               alignItems: "center",
//               gap: 0.5,
//               flexWrap: "wrap",
//             }}
//           >
//             © {new Date().getFullYear()} Ram Kishor. Built with
//             <FavoriteIcon sx={{ fontSize: 14, color: "#ef4444", mx: 0.25 }} />
//             using React & MUI Joy.
//           </Typography>

//           <IconButton
//             onClick={scrollToTop}
//             variant="outlined"
//             aria-label="Back to top"
//             sx={{
//               color: "#cbd5e1",
//               borderColor: "rgba(71, 85, 105, 0.6)",
//               transition: "all 0.25s ease",
//               "&:hover": {
//                 color: "#ffffff",
//                 borderColor: "rgba(59, 130, 246, 0.7)",
//                 backgroundColor: "rgba(59, 130, 246, 0.15)",
//                 transform: "translateY(-2px)",
//               },
//             }}
//           >
//             <ArrowUpwardIcon fontSize="small" />
//           </IconButton>
//         </Box>
//       </Box>
//     </Sheet>
//   );
// }

import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Link from "@mui/joy/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ramkishorcwe",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ram-kishor-47734a206",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "Email",
    href: "mailto:iamrkishoryadav@gmail.com",
    icon: <MailOutlineIcon fontSize="small" />,
  },
  {
    label: "Phone",
    href: "tel:+918868988610",
    icon: <PhoneIcon fontSize="small" />,
  },
];

const sitemapLinks = [
  { label: "Home", to: "/" },
  { label: "Blogs", to: "/" },
  { label: "Create Blog", to: "/create-blog" },
  { label: "Projects", to: "/project" },
  { label: "About", to: "/about-us" },
];

const aboutLinks = [
  { label: "My Projects", to: "/project" },
  { label: "My Skills", to: "/about-us" },
  { label: "My Experience", to: "/about-us" },
  { label: "Resume", to: "/about-us" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#010413", // ← darker than page (#020617)
        borderTop: "1px solid rgba(51, 65, 85, 0.8)",
        position: "relative",
        color: "#e2e8f0",
        mt: 8,
        // Top gradient glow line
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)",
        },
      }}
    >
      {/* ─────────── MAIN FOOTER BODY ─────────── */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          pt: { xs: 5, md: 6 },
          pb: { xs: 4, md: 5 },
        }}
      >
        {/* TOP: Brand + socials — centered, compact */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3,
            mb: 5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box sx={{ maxWidth: 360 }}>
            <Typography
              level="h4"
              sx={{
                color: "#f8fafc",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Ram Kishor
            </Typography>
            <Typography
              level="body-sm"
              sx={{ color: "#64748b", mt: 0.75, lineHeight: 1.6 }}
            >
              Software Developer crafting scalable, user-focused web
              applications with modern tooling.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1.25 }}>
            {socialLinks.map((item) => (
              <IconButton
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                variant="outlined"
                sx={{
                  color: "#94a3b8",
                  borderColor: "rgba(51, 65, 85, 0.8)",
                  width: 40,
                  height: 40,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: "#ffffff",
                    borderColor: "rgba(59, 130, 246, 0.7)",
                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* LINK COLUMNS — 3 compact columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 4, md: 6 },
            pb: 4,
            borderBottom: "1px solid rgba(30, 41, 59, 0.8)",
          }}
        >
          {/* Sitemap */}
          <Box>
            <Typography
              sx={{
                color: "#f8fafc",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Sitemap
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {sitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.to}
                  underline="none"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#60a5fa", paddingLeft: "4px" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* About */}
          <Box>
            <Typography
              sx={{
                color: "#f8fafc",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.to}
                  underline="none"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#60a5fa", paddingLeft: "4px" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box sx={{ gridColumn: { xs: "span 2", md: "auto" } }}>
            <Typography
              sx={{
                color: "#f8fafc",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              <Link
                href="mailto:iamrkishoryadav@gmail.com"
                underline="none"
                sx={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": { color: "#60a5fa", paddingLeft: "4px" },
                }}
              >
                iamrkishoryadav@gmail.com
              </Link>
              <Link
                href="tel:+918868988610"
                underline="none"
                sx={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": { color: "#60a5fa", paddingLeft: "4px" },
                }}
              >
                +91 8868988610
              </Link>
              <Link
                href="https://www.linkedin.com/in/ram-kishor-47734a206"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "&:hover": { color: "#60a5fa", paddingLeft: "4px" },
                }}
              >
                LinkedIn Profile
              </Link>
            </Box>
          </Box>
        </Box>

        {/* BOTTOM BAR — separated, compact */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            pt: 3,
          }}
        >
          <Typography
            sx={{
              color: "#475569",
              fontSize: "12px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} Ram Kishor · Built with React & MUI Joy
          </Typography>

          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            variant="outlined"
            size="sm"
            sx={{
              color: "#94a3b8",
              borderColor: "rgba(51, 65, 85, 0.8)",
              width: 36,
              height: 36,
              transition: "all 0.25s ease",
              "&:hover": {
                color: "#ffffff",
                borderColor: "rgba(59, 130, 246, 0.7)",
                backgroundColor: "rgba(59, 130, 246, 0.12)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
