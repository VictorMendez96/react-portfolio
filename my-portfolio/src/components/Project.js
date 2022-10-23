import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard ({project}) {
    return (
    <Card sx={{ maxWidth: 345, m: 2}}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.name}
      />
      <CardContent sx={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div" 
          sx={{
            m: 2,
            flexGrow: 1,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',              
            textDecoration: 'none',
          }}>
          Project:
        </Typography>
        <Typography gutterBottom variant="h5" component="div" 
          sx={{
            m: 2,
            flexGrow: 1,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',              
            textDecoration: 'none',
          }}>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            m: 2,
            flexGrow: 1,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',              
            textDecoration: 'none',
          }}>
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            m: 2,
            flexGrow: 1,
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'blue',              
            textDecoration: 'none',
          }}>
          {project.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={project.ghLink} size="small" sx={{
            m: 2,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',              
            textDecoration: 'none',
          }}>
          GitHub
        </Button>
        <Button href={project.depLink} size="small" sx={{
            m: 2,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',              
            textDecoration: 'none',
          }}>
          Deployment
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;