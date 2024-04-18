import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Header = () => {
   
   const nav_titles =[{
    path:'/',
    display:'PROMOTIONS'
   },
   {
    path:'/',
    display:'OFFERS'
   },
   {
    path:'/',
    display:'FEEDBACKS'
   },
   {
    path:'/',
    display:'ABOUT US'
   },
] 


const NavBarLinksBox=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:"center",
    justifyContent:"",
    gap:theme.spacing(3),
    padding:'6px',
    maxWidth:'auto',
    backgroundColor:"orange",
    marginLeft:'0px',
    marginBottom:'-24px',
    [theme.breakpoints.down("md")]:{
        display:'none'
    }
}));

const NavBarLink=styled(Typography)(()=>({
    fontSize:"15px",
    color:'#4F5361',
    fontWeight:'bold',
    cursor:'pointer',
    '&:hover':{
        color:'#fff'
    }
}));
  return (
    
        

    <Box>
        <NavBarLinksBox>
        <img
                           src="https://dynamic.design.com/asset/logo/53703663-f2ea-4e81-8b89-44965b073800/logo-search-grid-1x?logoTemplateVersion=2&v=638432716276870000&text=KABAB++RESTUARANT"
                            width="100" height="100"></img>
            {
                nav_titles.map((item,index)=>(
                    <NavBarLink variant="body2">
                    {item.display}
                 </NavBarLink>
                ))
            }
          
        </NavBarLinksBox>
       
    </Box>
      
  )
}

export default Header