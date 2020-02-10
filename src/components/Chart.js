import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const  Chart = ({chartData, displayTitle=true, displayLegend=true,legendPosition ='right',location='City' }) => { 
  
    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title:{
              display: displayTitle,
              text:'Largest Cities In '+location,
              fontSize:25
            },
            legend:{
              display: displayLegend,
              position: legendPosition
            }
          }}
        />

        <Line
          data={chartData}
          options={{
            title:{
              display: displayTitle,
              text:'Largest Cities In '+location,
              fontSize:25
            },
            legend:{
              display: displayLegend,
              position: legendPosition
            }
          }}
        />

        <Pie
          data={chartData}
          options={{
            title:{
              display: displayTitle,
              text:'Largest Cities In '+location,
              fontSize:25
            },
            legend:{
              display: displayLegend,
              position: legendPosition
            }
          }}
        />
      </div>
    )
}

export default Chart;
