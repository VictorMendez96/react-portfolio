import React from 'react';
import MainLayout from '../layouts/mainLayout';
import Button from '@mui/material/Button';
import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

function ResumePage () {
    return (
        <MainLayout>
            <Container sx={{display: 'flex'}}>
                <Button variant='contained' 
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        m: 5
                    }}>
                    Here is my Official Resume!
                </Button>
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'column'}}>
                <Box sx={{}}>
                    <Typography variant='h4' 
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            m: 5
                            }}
                    > 
                        Languanges:
                    </Typography>
                    <Typography variant='body1' 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            m: 5
                            }}
                    > 
                        <HtmlIcon sx={{fontSize: 50}}/>
                        <CssIcon sx={{fontSize: 50}}/>
                        <JavascriptIcon sx={{fontSize: 50}}/>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h4' 
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            m: 5
                            }}
                    > 
                        Other Proficiencies:
                    </Typography>
                    <Typography variant='body1' 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            flexGrow: 1,
                            flexWrap: 'wrap',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: 25,
                            margin: 5,
                            textAlign: 'center'
                            }}
                    > 
                        <div>{"Boostrap"}</div>
                        <div>{"jQuery"}</div>
                        <div>{"Express"}</div>
                        <div>{"Node"}</div>
                        <div>{"MySQL"}</div>
                        <div>{"MongoDB"}</div>
                        <div>{"GraphQL"}</div>
                        <div>{"React"}</div>
                        <div>{"RESTful APIs"}</div>
                        <div>{"MaterialUI"}</div>
                    </Typography>
                </Box>
            </Container>
        </MainLayout>
    )
};

export default ResumePage;