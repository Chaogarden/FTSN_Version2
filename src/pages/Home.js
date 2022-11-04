import { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/Doughnutchart";
import Card from "../components/Card/Card"
import zoomPlugin from 'chartjs-plugin-zoom';
import { UserData } from "../Data";
import { Chart } from 'chart.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import home from "./home.css";




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


// graph build 


export default function Home() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
              label: "Sensor #",
              data: UserData.map((data) => data.userGain),
              backgroundColor: [
                "rgba(0,128,0)"
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
    }); 


    return (
    <>


<div className="container">
<div className="left">

    <div className ="ChartB">

        <div style = {{ width: 700}}>
        <LineChart chartData={userData} />
        </div>

        <div style = {{ width: 700}}>
        <LineChart chartData={userData}/>
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
        <DoughnutChart chartData={userData}/>
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