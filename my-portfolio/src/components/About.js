import * as React from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function About () {
    return (
    <Container sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h2">
            About Me
        </Typography>
        <Avatar
        alt="Victor Mendez"
        src=""
        sx={{ width: 56, height: 56}}
        />
        <Typography variant="body1">
            Hello, my name is Victor Mendez. I am currently an Associate Application Developer for a Credit Union. 
            I recently completed a Coding Bootcamp at Denver Univeristy. My goal is to venture into game development
            and use my  I invite you to explore my website and 
            see some of the projects I have worked on, available on my Porfolio page. 
        </Typography>
    </Container>
    )
}

export default About;