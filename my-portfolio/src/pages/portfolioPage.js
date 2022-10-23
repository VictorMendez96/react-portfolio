import React from 'react';
import MainLayout from '../layouts/mainLayout';
import ProjectsLayout from '../layouts/projectsLayout';
import ProjectCard from '../components/Project';

function PortfolioPage () {
    return (
        <MainLayout>
            <ProjectsLayout>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </ProjectsLayout>
        </MainLayout>
    )
};

export default PortfolioPage;