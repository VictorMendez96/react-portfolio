import React from 'react';
import { createTheme } from '@mui/material/styles';
import { green, indigo } from '@mui/material/colors';

const theme = createTheme({
    
    palette: {
        primary: green,
        secondary: indigo,
    },
    
});

export default theme;