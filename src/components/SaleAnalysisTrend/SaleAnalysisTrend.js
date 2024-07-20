import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';  
import { Box, Typography, LinearProgress } from '@mui/material';  
import { Line } from 'react-chartjs-2';  

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);  

const SaleAnalysisTrend = ({ height }) => {  
  const data = {  
    labels: ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'],  
    datasets: [  
      {  
        label: 'Order Value',  
        data: [50, 100, 150, 200, 250, 300, 350],  
        borderColor: '#4C6EF5',  
        backgroundColor: 'rgba(76, 110, 245, 0.2)',  
        borderWidth: 2,  
        tension: 0.4,  
        pointRadius: 0,  
      },  
      {  
        label: 'Total Products',  
        data: [60, 110, 160, 210, 260, 310, 360],  
        borderColor: '#20C997',  
        backgroundColor: 'rgba(32, 201, 151, 0.2)',  
        borderWidth: 2,  
        tension: 0.4,  
        pointRadius: 0,  
      },  
      {  
        label: 'Quantity',  
        data: [70, 120, 170, 220, 270, 320, 370],  
        borderColor: '#FFB800',  
        backgroundColor: 'rgba(255, 184, 0, 0.2)',  
        borderWidth: 2,  
        tension: 0.4,  
        pointRadius: 0,  
      },  
    ],  
  };  

  const options = {  
    responsive: true,  
    maintainAspectRatio: false,  
    scales: {  
      x: {  
        grid: {  
          display: false,  
        },  
      },  
      y: {  
        grid: {  
          display: false,  
        },  
      },  
    },  
    plugins: {  
      legend: {  
        display: false,  
      },  
      tooltip: {  
        callbacks: {  
          label: (context) => `${context.dataset.label}: ${context.raw}`,  
        },  
      },  
    },  
  };  

  return (  
    <Box sx={{ padding: 2, height: height || '400px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>  
<h6><strong>Sale Analysis Trend</strong></h6>
      <Box sx={{ marginBottom: 1 }}>  
        <Typography variant="body1">Order Value</Typography>  
        <LinearProgress variant="determinate" value={155.5} sx={{ height: 10, borderRadius: 5, backgroundColor: '#e0e0e0' }} color="primary" />  
        <Typography variant="body2" align="right">155.5%</Typography>  
      </Box>  
      <Box sx={{ marginBottom: 1 }}>  
        <Typography variant="body1">Total Products</Typography>  
        <LinearProgress variant="determinate" value={238.2} sx={{ height: 10, borderRadius: 5, backgroundColor: '#e0e0e0' }} color="success" />  
        <Typography variant="body2" align="right">238.2%</Typography>  
      </Box>  
      <Box sx={{ marginBottom: 1 }}>  
        <Typography variant="body1">Quantity</Typography>  
        <LinearProgress variant="determinate" value={23.3} sx={{ height: 10, borderRadius: 5, backgroundColor: '#e0e0e0' }} color="warning" />  
        <Typography variant="body2" align="right">23.3%</Typography>  
      </Box>  
      <div style={{ height: '200px' }}>  
        <Line data={data} options={options} />  
      </div>  
    </Box>  
  );  
};  

export default SaleAnalysisTrend;