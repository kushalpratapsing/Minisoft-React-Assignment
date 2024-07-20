// src/components/LineChart.js  
import React from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  

const data = [  
  { name: 'Feb 1', critical: 400, error: 2400, warning: 2400 },  
  { name: 'Feb 2', critical: 300, error: 1398, warning: 2210 },  
  { name: 'Feb 3', critical: 200, error: 9800, warning: 2290 },  
  { name: 'Feb 4', critical: 278, error: 3908, warning: 2000 },  
  { name: 'Feb 5', critical: 189, error: 4800, warning: 2181 },  
  { name: 'Feb 6', critical: 239, error: 3800, warning: 2500 },  
  { name: 'Feb 7', critical: 349, error: 4300, warning: 2100 },  
];  

const LineChartComponent = () => (  
  <div>  
   <h6><strong>Events</strong></h6>
    <ResponsiveContainer width="100%" height={300}>  
      <LineChart  
        data={data}  
        margin={{  
          top: 5, right: 30, left: 20, bottom: 5,  
        }}  
      >  
        <CartesianGrid strokeDasharray="3 3" />  
        <XAxis dataKey="name" />  
        <YAxis />  
        <Tooltip />  
        <Legend />  
        <Line type="monotone" dataKey="critical" stroke="#ff0000" activeDot={{ r: 8 }} />  
        <Line type="monotone" dataKey="error" stroke="#0000ff" />  
        <Line type="monotone" dataKey="warning" stroke="#ffa500" />  
      </LineChart>  
    </ResponsiveContainer>  
  </div>  
);  

export default LineChartComponent;