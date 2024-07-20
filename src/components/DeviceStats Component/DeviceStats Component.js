import React from 'react';  
import { Box, Typography, LinearProgress, Grid } from '@mui/material';  

const DeviceStats = () => {  
  return (  
    <Box sx={{ padding: 1, textAlign: 'left' }}>  
      <Typography variant="h6" sx={{ marginBottom: 3 }}> <strong>Device Stats</strong></Typography>  
      <Grid container spacing={2}>  
        <Grid item xs={12}>  
          <Typography variant="body2"><strong>Uptime:</strong> 195 Days, 8 hours</Typography>  
        </Grid>  
        <Grid item xs={12}>  
          <Typography variant="body2"><strong>First Seen:</strong> 23 Sep 2019, 2:04 PM</Typography>  
        </Grid>  
        <Grid item xs={12}>  
          <Typography variant="body2"><strong>Collected Time:</strong> 23 Sep 2019, 2:04 PM</Typography>  
        </Grid>  
        <Grid item xs={12}>  
          <Typography variant="body2"><strong>Memory Space:</strong> 168.3GB</Typography>  
          <LinearProgress variant="determinate" value={70} sx={{ marginTop: 1 }} />  
        </Grid>  
      </Grid>  
    </Box>  
  );  
};  

export default DeviceStats;