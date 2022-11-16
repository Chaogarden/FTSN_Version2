import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

function LineChart({ chartData }) {
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
      text: 'FTSN Output Values',
      color: 'red',
    },

    zoom: {

      mode: 'x',

      pan: {
        enabled: true,
        mode: 'xy',
        speed: .1,
      },

      limits: {
          y: {min: 0, max: 40},
          x: {min: 0,max: 12},
      },

      zoom: {

        wheel: {
            enabled: true,
            
        },
    
    },
       
    }
},

  }}/>;
}

export default LineChart;
