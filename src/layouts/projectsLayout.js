import * as React from 'react';
import { Box } from '@mui/material';

function ProjectsLayout ({children}) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', p: 5, flexWrap: 'wrap'}}>
            {children}
        </Box>
    )
};

export default ProjectsLayout;