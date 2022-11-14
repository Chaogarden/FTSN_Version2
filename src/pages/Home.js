import { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/Doughnutchart";
import Card from "../components/Card/Card"
import zoomPlugin from 'chartjs-plugin-zoom';
import { UserData } from "../Data";
import { Chart } from 'chart.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import home from "./home.css";
import axios from "axios";




Chart.register(zoomPlugin);


/*
// json data fectching 

const [showPosts, setshowPosts] = useState()

const apiUrl = 'www.ftsn'

let displayData

function pullJson() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
    displayData = responseData.map(function(todo){
        return(
            <p>

            </p>
        )
    })
        console.log(responseData)
    })
    // return
}



useEffect(() => 

{
    pullJson()

},[])




*/

// Data Fetching 
fetchData();

async function fetchData() {
    const url = 'http://localhost:3000/sensorData';
    const response = await fetch(url);

    //wait

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
    console.log(names)    


});



// graph build 


export default function Home() {

    const [ChartData, setChartData] = useState({
    labels: ["1","2","3","4"],
    datasets: [
        {
          label: "Sensor #",
          data: [1,2,3,4], 
          backgroundColor: [
            "rgba(0,128,0)"
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        
      ],}); 
    //const [sensorLabels, setSensorLabels] = useState([]); 
   // const [dataSensorValues, setDatasensorValues] = useState([]); 

const chart = () => {

    let sensorNames =[];
    let dataSensor = [];
    let dataCheck = [];

        axios.get('http://localhost:3000/sensorData')
            .then(res => {
                //console.log(res)
                for(const dataObj of res.data){
                    sensorNames.push(dataObj.name);
                    dataSensor.push(parseInt(dataObj.Sdata));
            
                   console.log(dataSensor)
                   
                }


                setChartData({
                    labels: sensorNames,
                    datasets: [
                        {
                          label: sensorNames,
                          data: dataSensor, 
                          backgroundColor: [
                            "rgba(0,128,0)"
                          ],
                          borderColor: "black",
                          borderWidth: 2,
                        },
                        
                      ],
                });

            })
            .catch(err => {
                console.log(err)
            })


            //console.log(dataCheck);
      
};

    useEffect(() => {
        chart();
    },[]);


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
            <Card title = "Sensor 1" content = "content"/>
        
        </div>   
        <div className="Card">
            <Card title = "Sensor 2" content = "content"/>
        
        </div>   
        <div className="Card">
            <Card title = "Sensor 3" content = "content"/>
        
        </div>    
        <div className="Card">
            <Card title = "Sensor 4" content = "content"/>
        
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
        <DoughnutChart chartData={ChartData}/>
    </div>
</div>

<div className="dataView">
    <div className="DataV">
            <Card title = "ML Status" content = "content" width = '290px' height = '300px'/>
        
    </div>   
</div>

</div>


<div className="terminal">
    <div className="term">
            <Card title = "Terminal?" content = "content" width = '625px' height = '400px'/>
        
    </div>   
</div>

</div>

</div>
    </>

    );
}
