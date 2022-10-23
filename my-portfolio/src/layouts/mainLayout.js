import React from 'react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

// Import theme and ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme'

function MainLayout ({children}) {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <div>
                <Navigation/>
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
            </ThemeProvider>
        </div>
    )
}

export default MainLayout;