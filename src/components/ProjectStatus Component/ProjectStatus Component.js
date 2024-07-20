
import React from 'react';  
import { Box, Typography, Button, Paper } from '@mui/material';  

  
import volkswagen from '../../assets/images/volkswagen.jpg';  
import landrover from '../../assets/images/landrover.jpg';  
import bentley from '../../assets/images/bentley.jpg';  
import morgan from '../../assets/images/morgan.jpg';  

const projectData = [  
  { company: 'Volkswagen', budget: '$2322', status: '88%', deadline: '07 Nov 2019', image: volkswagen },  
  { company: 'Land Rover', budget: '$12022', status: '70%', deadline: '08 Nov 2019', image: landrover },  
  { company: 'Bentley', budget: '$8725', status: '87%', deadline: '11 Jun 2019', image: bentley },  
  { company: 'Morgan', budget: '$5220', status: '65%', deadline: '26 Oct 2019', image: morgan },  
];  

const ProjectStatus = () => (  
  <Box>  
    <h6><strong>Project Status </strong></h6>
    {projectData.map((project, index) => (  
      <Paper key={index} sx={{ display: 'flex', padding: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>  
        <Box sx={{ flex: 0.4, textAlign: 'center' }}>  
          <img src={project.image} alt={project.company} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />  
        </Box>  
        <Box sx={{ flex: 1, textAlign: 'center' }}>  
          <Typography variant="body2">Company</Typography>  
          <Typography variant="body1" fontWeight="bold">{project.company}</Typography>  
        </Box>  
        <Box sx={{ flex: 1, textAlign: 'center' }}>  
          <Typography variant="body2">Budget</Typography>  
          <Typography variant="body1" fontWeight="bold">{project.budget}</Typography>  
        </Box>  
        <Box sx={{ flex: 1, textAlign: 'center' }}>  
          <Typography variant="body2">Status</Typography>  
          <Typography variant="body1" fontWeight="bold" sx={{ color: 'lightgreen' }}>{project.status}</Typography>  
        </Box>  
        <Box sx={{ flex: 1, textAlign: 'center' }}>  
          <Typography variant="body2">Deadline</Typography>  
          <Typography variant="body1" fontWeight="bold">{project.deadline}</Typography>  
        </Box>  
        <Box sx={{ textAlign: 'right', ml: 2 }}>  
          <Button variant="contained" color="primary" size="small">Edit Actions</Button>  
        </Box>  
      </Paper>  
    ))}  
  </Box>  
);  

export default ProjectStatus;