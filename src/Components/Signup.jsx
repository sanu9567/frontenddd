import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Image from './Image/blur.png';

const SignUp = () => {
  const backgroundImageStyle = {
    position: 'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex: -1,
  };
  return (
    <div>
    <img
    src={Image}
    alt="background"
    style={backgroundImageStyle}
    />
     
     <Card variant='outlined'style={{padding:'40px',
    margin:'auto',
    marginTop:'100px',
    alignContent:'center',
  width:'300px',
  backgroundColor:'',
  border:'0.5px solid black',
  cursor:'pointer',
  borderRadius:'30px',
  opacity:'90%',}}>
        
        <Typography variant='h3'>SIGN UP</Typography><b></b><b></b><br></br>
        <TextField label="first name"
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="last name"
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="email"type='gmail' InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon/>
              </InputAdornment>
            ),
          }}
          variant='standard'style={{cursor:'pointer'}}/><br /><br />
        <TextField label="password"type='password'
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockIcon/>
              </InputAdornment>
            ),
          }}
          variant='standard'style={{cursor:'pointer'}}/><br /><br /><br />
        <Button variant='contained' color='success'>SIGNUP</Button>
    
    
    </Card>
        </div>
  )
}

export default SignUp