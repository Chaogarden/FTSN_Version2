import { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/Doughnutchart";
import Card from "../components/Card/Card"
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart } from 'chart.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PercentError from "../components/Accuracy";
import home from "./home.css";


Chart.register(zoomPlugin);



// Data Fetching 

fetchData();

async function fetchData() {
    const url = 'http://localhost:3000/sensorData';
    const response = await fetch(url);

    //wait

    const dataValues = await response.json();
    //console.log(dataValues);
    return dataValues;
};

fetchData().then (dataValues => {

    const names = dataValues.map(
        function(index) {
            return index.name;
        }
    )

    const Sdata = dataValues.map(
        function(index) {
            return index.Sdata;
        }
    )

    //console.log(names) 
    //console.log(Sdata)   
 
});




// graph 1 parameter settings


export default function Home() {
    

    const [ChartData, setChartData] = useState({

    labels: [],
    datasets: [{
          label: [],
          data: [], 
          backgroundColor: [],
          borderColor: "black",
          borderWidth: 2,
        }],
    }); 

    

const chart = () => {

// Data Fetching 

fetchData();

async function fetchData() {
    const url = 'http://localhost:3000/sensorData';
    const response = await fetch(url);

    //wait for data

    const dataValues = await response.json();
    console.log(dataValues);
    return dataValues;
};



fetchData().then (dataValues => {
    const names = dataValues.map(
        function(index) {
            return index.name;
        }
    )   

    const Sdata = dataValues.map(
        function(index) {
            return index.Sdata;
        }
    )

    const timeStamps = dataValues.map(
        function(index) {
            return index.minutes;
        }
    )  

                setChartData({

                    labels: timeStamps[0],
                    datasets: [
                        {
                          label: names[0],
                          data: Sdata[0], 
                          backgroundColor: [
                            "rgba(0,128,0)"
                          ],
                          borderColor: "black",
                          borderWidth: 2,
                        },

                        {
                            label: names[1],
                            data: Sdata[1], 
                            backgroundColor: [
                              "red"
                            ],
                            borderColor: "black",
                            borderWidth: 2,
                          },

                          {
                            label: names[2],
                            data: Sdata[2], 
                            backgroundColor: [
                              "blue"
                            ],
                            borderColor: "black",
                            borderWidth: 2,
                          },

                          {
                            label: names[3],
                            data: Sdata[3], 
                            backgroundColor: [
                              "purple"
                            ],
                            borderColor: "black",
                            borderWidth: 2,
                          }

                      ]
                })
            })

};

    useEffect(() => {
        chart();
    },[]);






    //building error percentage chart




    const [percentageData, setPercentageData] = useState({
    
        labels: [],
        datasets: [{
              label: [],
              data: [], 
              backgroundColor: [],
              borderColor: "black",
              borderWidth: 2,
            }],
        }); 
    
        
    
    const pchart = () => {
    
    // Data Fetching 
    
    fetchData();
    
    async function fetchData() {
        const url = 'http://localhost:3000/sensorData';
        const response = await fetch(url);
    
        //wait for data
    
        const dataValues = await response.json();
        console.log(dataValues);
        return dataValues;
    };
    
    
    
    fetchData().then (dataValues => {
        const names = dataValues.map(
            function(index) {
                return index.name;
            }
        )   
    
        const Sdata = dataValues.map(
            function(index) {
                return index.Sdata;
            }
        )
    
        const timeStamps = dataValues.map(
            function(index) {
                return index.minutes;
            }
        )  
       
    
                    setPercentageData({
    
                        labels: [],
                        datasets: [
                            {
                              label: "Accuracy of System",
                              data: [99,1], 
                              backgroundColor: [
                                "rgba(0,128,0)",
                                "white"
                              ],
                              borderColor: "white",
                              borderWidth: 2,
                              cutout: '80%'
                            }]
                    })
                    
                })
    
    };
    
        useEffect(() => {
            pchart();
        },[]);

        


// grabbing values for status cards

fetchData();

async function fetchData() {
    const url = 'http://localhost:3000/sensorData';
    const response = await fetch(url);

    //wait

    const dataValues = await response.json();
    return dataValues;
};

fetchData().then (dataValues => {

    const BLE_TAG = dataValues.map(
        function(index) {
            return index.BLE_TAG ;
        }
    )  
    const status = dataValues.map(
        function(index) {
            return index.status;
        }
    )  
   
    console.log(BLE_TAG)
    console.log(status)

 
});




    // display of data on page

    return (

    <>

<div className="container">
<div className="left">

    <div className ="ChartB">

        <div style = {{ width: 700}}>
        <LineChart chartData={ChartData} />
        </div>

        <div style = {{ width: 700}}>
        <LineChart2 chartData={ChartData}/>
        </div>

    </div>

    </div>



    <div className="right">

        <div className="Card">
            <Card title = "Sensor 1" tag = "BT TAG:" content = "Status:" status = "Collected" />
        
        </div>   
        <div className="Card">
            <Card title = "Sensor 2" tag = "BT TAG:" content = "Status:" status = "Collected"/>
        
        </div>   
        <div className="Card">
            <Card title = "Sensor 3" tag = "BT TAG:" content = "Status:" status = "Collected"/>
        
        </div>    
        <div className="Card">
            <Card title = "Sensor 4" tag = "BT TAG:" content = "Status:" status = "Collected" />
        
        </div>   

    </div>

</div>

<div className="Bottom">

<h1>
 System Information <i class="bi bi-activity"></i>
</h1>
<div className="bottomDivs">

<div className="leftBot">

<div className="PercentageChart">
    <div style = {{ width: 450}}>
        <DoughnutChart chartData={percentageData}/>
    </div>
</div>

<div className="dataView">
    <div className="DataV">
            <Card title = "ML Status" content = "Running" width = '290px' height = '300px'/>
        
    </div>   
</div>

</div>


<div className="terminal">
    <div className="term">
            <Card title = "Terminal?" content = "WIP" width = '625px' height = '400px'/>
        
    </div>   
</div>

</div>

</div>
    </>

    );
}
