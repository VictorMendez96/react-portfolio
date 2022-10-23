import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function About () {
    return (
    <Container sx={{ display: 'flex', flexDirection: 'column', p: 5, alignItems:'center'}}>
        <Typography variant="h2" marginBottom="50px" textAlign="center"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}>
            About Me
        </Typography>

        <Box sx={{display: 'flex', justifyContent: 'center'}} marginBottom="50px">
            <Avatar
            alt="Victor Mendez"
            src=""
            sx={{ width: 300, height: 300}}
            />
        </Box>

        <Typography variant="body1" marginBottom="50px" textAlign="center"
            sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>
            Hello, my name is Victor Mendez. I am currently an Associate Application Developer for a Credit Union. 
            I recently completed a Coding Bootcamp at Denver Univeristy. My goal is to enter into game development
            and work with a team to innovate the future of gaming. I invite you to explore my website and see some 
            of the projects I have worked on and continue to work on, available on my Porfolio page. 
        </Typography>
    </Container>
    )
}

export default About;