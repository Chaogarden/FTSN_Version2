import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

function LineChart2({ chartData }) {
  return <Line data={chartData} options = {{
    responsive:true, 
      scales: {
        yAxes: {
          title: {
            color: 'red',
            display: true,
            text: 'Degrees Celsius'
          },
          
          ticks: {
            callback: function(value, index, values){
              return Math.round(value) + '°';
            }
          }
      
        },
        
      xAxes:{
      title: {
            
            color: 'red',
            display: true,
            text: 'Timestamps'
          },
       
          ticks: {
            color:'red',
          }
          
      }
      
  },

  plugins: {

    title:{
      display: true,
      text: 'Actual Vs. Predicted',
      color: 'red',
    },

    zoom: {

      pan: {
        enabled: true,
        mode: 'xy',
        speed: 10,
      },

      limits: {
          y: {min: 0, max: 200000},
          x: {min: 0},
      },

      zoom: {

        wheel: {
            enabled: true,
            mode: 'xy',
        },
    
    },
       
    }
},

  }}/>;
}

export default LineChart2;
