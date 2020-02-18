import React, { useState, useEffect } from 'react';

import './App.css';
import Chart from './components/Chart';

const  App = ()=> {
  
  const [chartData, setchartData] =  useState({  }) 


 const  getChartData = ()=> {
    setchartData({ 
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          },
          {
            label:'Animal',
            data:[
              61754,
              181045,
              153060,
              10619,
              105162,
              950072
            ],
            backgroundColor:[
              'rgba(05, 99, 132, 0.6)',
              'rgba(0, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(3, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ] 
      }
    );
  }
    
  useEffect(() => {
    getChartData();
  }, [ ])

   

    return (
      <div className="App">
        <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
}

export default App;
