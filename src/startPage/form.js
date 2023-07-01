import { useHistory } from "react-router-dom";
import { useState } from "react";
// const Form = (props) => {

//     const [admin,setAdmin]= useState('');
    

//     const history = useHistory();
//     const handleSubmit = (e) => {
//         if(props.first === "user name"){
//             if(admin === 'admin'){
//                 history.push('/Admin');
//             }
//             else if(admin === 'banker'){
//                 history.push('/Banker');
//             }
//             else
//         history.push('/'+props.fourth);
//         }
//         else
//         history.push('/'+props.fourth);
//     }

//     return (

//     <div >
            
//         <div className="neon-border" style={{display:'flex'}}>
//         <form className="neon-border-inside" style={{zIndex:'1'}} onSubmit={handleSubmit}>
//                 <label>{props.first}</label>
//                 <input 
//                     type="text"
//                     required
//                     onChange={e=> setAdmin(e.target.value)}
//                 />
//                 <label>{props.second}</label>
//                 <input 
//                 type="password"
//                 required
//                 >
//                 </input>
//                 <button>{props.third}</button>
//         </form>
            
                
//         </div>
//         </div>
            
//      );
// }
 
// export default Form;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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

export default function SignIn(props) {

const [user,setUser]= useState('');
    const history = useHistory();


  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    if(props.first === "user name"){
            if(user === 'admin'){
                history.push('/Admin');
            }
            else if(user === 'banker'){
                history.push('/Banker');
            }
            else
        history.push('/'+props.fourth);
        }
        else
        history.push('/'+props.fourth);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={props.first}
              name="email"
              autoComplete="email"
              onChange={(e)=>setUser(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={props.second}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {props.third}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signin" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}