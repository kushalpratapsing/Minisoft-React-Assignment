import React from 'react';  
import { Box, Grid, Paper, styled } from '@mui/material';  
import DonutChart from '../../components/DonutChart Component/DonutChart Component';  
import DeviceStats from '../../components/DeviceStats Component/DeviceStats Component';  
import ProjectStatus from '../../components/ProjectStatus Component/ProjectStatus Component';  
import LineChartComponent from '../../components/LineChart Component/LineChart Component';  
import SaleAnalysisTrend from '../../components/SaleAnalysisTrend/SaleAnalysisTrend';  

const PaperStyled = styled(Paper)(({ theme }) => ({  
  padding: theme.spacing(2),  
  display: 'flex',  
  overflow: 'hidden',  
  flexDirection: 'column',  
  height: '100%',  
}));  

const Dashboard = () => {  
  return (  
    <Box component="main" sx={{ flexGrow: 1, overflow: 'auto', padding: 2, marginTop: 2 }}>  
      <Grid container spacing={3}>  
        {/* Sessions By Channel */}  
        <Grid item xs={12} md={4}>  
          <PaperStyled className="shadow-sm">  
            <DonutChart />  
          </PaperStyled>  
        </Grid>  

        {/* Events */}  
        <Grid item xs={12} md={4}>  
          <PaperStyled className="shadow-sm">  
            <LineChartComponent />  
          </PaperStyled>  
        </Grid>  

        {/* Device Stats */}  
        <Grid item xs={12} md={4}>  
          <PaperStyled className="shadow-sm">  
            <DeviceStats />  
          </PaperStyled>  
        </Grid>  

        {/* Sale Analysis Trend */}  
        <Grid item xs={12} md={4}>  
          <SaleAnalysisTrend height="300" />  
        </Grid>  

        {/* Project Status */}  
        <Grid item xs={12} md={8}>  
          <PaperStyled className="shadow-sm">  
            <ProjectStatus />  
          </PaperStyled>  
        </Grid>  
      </Grid>  
    </Box>  
  );  
};  

export default Dashboard;
