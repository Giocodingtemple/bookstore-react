import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EditUserForm from '../forms/EditUserForm';
import image from '../img/library.jpg';

export default function EditUser() {
  return (
    <Paper style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition: "center", backgroundSize:"cover"}}>
        <Typography color="#fffffa"variant="h2" sx={{display:"flex", justifyContent: 'center', pt:20, mb:2, fontFamily: 'Prata, serif'}}>EditUser</Typography>
        <Typography sx={{display:"flex", justifyContent: 'center'}}><EditUserForm/></Typography>
    </Paper>
  )
}
