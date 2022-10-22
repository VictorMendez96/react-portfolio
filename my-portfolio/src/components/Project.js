import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard () {
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project: 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">GitHub</Button>
        <Button size="small">Deployment</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;