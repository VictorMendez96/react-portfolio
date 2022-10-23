import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

import { IconButton, Typography } from '@mui/material';

function Footer () {

    return (
        <Box maxWidth="xl" 
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            >
            <Typography sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex'},
                alignContent: 'flex-end',
                fontFamily: 'monospace',
                fontWeight: 700,                    color: 'inherit',
                textDecoration: 'none',
            }}>
                Victor Mendez 2022 |
            </Typography>
            <IconButton href="https://www.linkedin.com/in/victorhmendez/" target="_blank" sx={{color: 'inherit'}}><LinkedInIcon/></IconButton>
            <IconButton href="https://github.com/VictorMendez96" target="_blank" sx={{color: 'inherit'}}><GitHubIcon/></IconButton>
        </Box>
    )
}

export default Footer;