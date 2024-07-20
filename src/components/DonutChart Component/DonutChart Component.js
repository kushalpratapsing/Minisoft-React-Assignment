import React from 'react';  
import { PieChart, Pie, Cell, Tooltip } from 'recharts';  
import { Box, Typography, Grid } from '@mui/material';  
import { padding } from '@mui/system';

const data = [  
  { name: 'Firewalls', value: 4 },  
  { name: 'Ports', value: 12 },  
  { name: 'Servers', value: 2 },  
  { name: 'Devices', value: 7 },  
  { name: 'Others', value: 6 },  
];  

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];  

const DonutChart = () => {  
  const total = data.reduce((acc, item) => acc + item.value, 0);  
  const score = Math.round((data[0].value / total) * 100); 
  return (  
      
    <Grid container spacing={1}>  
      <Grid item xs={12} md={7}>    
     <h6><strong>Sessions By Channel</strong></h6>
      
        <Box display="flex" flexDirection="column" alignItems="center" position="relative">  
          <PieChart width={200} height={200}>  
            <Pie  
              data={data}  
              cx={100}  
              cy={100}  
              innerRadius={60}  
              outerRadius={80}  
              fill="#8884d8"  
              paddingAngle={5}  
              dataKey="value"  
            >  
              {data.map((entry, index) => (  
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />  
              ))}  
            </Pie>  
            <Tooltip />  
          </PieChart>  
          <Typography  
            variant="h5"  
            style={{  
              position: 'absolute',  
              top: '50%',  
              left: '50%',  
              transform: 'translate(-50%, -50%)',  
              textAlign: 'center'  
            }}>  
            Score: {score}%  
          </Typography>  
        </Box>  
      </Grid>  
      <Grid item xs={10} md={4} style={{ marginTop: '40px' }}>  
         
        <Typography style={{ fontSize: '0.875rem' }}>  
          • Firewalls (3): 4 (100%)  
        </Typography>  
        <Typography style={{ fontSize: '0.875rem' }}>  
          • Ports (12): 12 (100%)  
        </Typography>  
        <Typography style={{ fontSize: '0.875rem' }}>  
          • Servers (2): 2 (100%)  
        </Typography>  
        <Typography style={{ fontSize: '0.875rem' }}>  
          • Devices (7): 7 (100%)  
        </Typography>  
        <Typography style={{ fontSize: '0.875rem' }}>  
          • Others (6): 6 (100%)  
        </Typography>  
      </Grid>  
    </Grid>  
  );  
};  

export default DonutChart;