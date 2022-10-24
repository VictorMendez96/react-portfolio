import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function ContactForm() {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', m: 5, flexDirection: 'column', textAlign: 'center'}}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          He/Him
        </Typography>
        <Typography variant="h5" component="div">
          Victor Mendez
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Thank you for visiting my website. It is currently undergoing some improvements, check back to see new changes!
        </Typography>
        <Typography variant="body2">
          Contact me: 
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
            <IconButton href="https://www.linkedin.com/in/victorhmendez/" target="_blank" sx={{color: 'inherit'}}><LinkedInIcon/></IconButton>
            <IconButton href="https://github.com/VictorMendez96" target="_blank" sx={{color: 'inherit'}}><GitHubIcon/></IconButton>
            <IconButton href="mailto:victormendez990@gmail.com" sx={{color: 'inherit'}}><EmailIcon/></IconButton>
      </CardActions>
    </Card>
  );
}

export default ContactForm;