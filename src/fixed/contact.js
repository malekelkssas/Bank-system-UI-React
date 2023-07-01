import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instgram from "../images/instgram.png"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
        }}
      >
        <CssBaseline />
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              
            <h2>Contact Us</h2>
      <p>Phone: (123) 456-7890</p>
      <p>Social Media Channels:</p>
      <ul className="social-media-list">
        <li>
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"><img src={facebook} alt="facebook" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"><img src={twitter} alt="twitter" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"><img src={instgram} alt="instgram" style={{width:"40px",height:"40px"}} /></i>
          </a>
        </li>
      </ul>
    
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}