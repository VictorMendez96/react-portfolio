import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';

import { IconButton, Typography } from '@mui/material';

function Footer () {

    return (
        <Container
            sx={{ 
                position: 'fixed', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} 
            >
            <Typography sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,                    
                color: 'inherit',
                textDecoration: 'none',
            }}>
                Victor Mendez 2022 |
            </Typography>
            <IconButton href="https://www.linkedin.com/in/victorhmendez/" target="_blank" sx={{color: 'inherit'}}><LinkedInIcon/></IconButton>
            <IconButton href="https://github.com/VictorMendez96" target="_blank" sx={{color: 'inherit'}}><GitHubIcon/></IconButton>
        </Container>
    )
}

export default Footer;