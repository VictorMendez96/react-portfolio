import * as React from 'react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';

// Import theme and ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme'

function MainLayout ({children}) {
    return (
        <Container disableGutters>
            <ThemeProvider theme={theme}>
            <Container disableGutters>
                <Navigation/>
            </Container>
            <Container>
                {children}
            </Container>
            <Container disableGutters>
                <Footer/>
            </Container>
            </ThemeProvider>
        </Container>
    )
}

export default MainLayout;