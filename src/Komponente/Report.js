import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { createChart } from '../Accessories/Grafik';
import Sidemenu from '../Accessories/Sidemenu';

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch JSON results
    fetch("https://192.168.1.102/Fetch/report.php")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data); 
      });
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      const firstElement = chartData[0]; 
  
      createChart(
        ["Ukupan broj"], 
        [{
          name: 'Broj opomena',
          data: [parseFloat(firstElement.brOpomena.replace(",", ""))]
        },
        {
          name: 'Broj uplata',
          data: [parseFloat(firstElement.brUplata.replace(",", ""))]
        }],
        "chartContainer", "Ukupan broj poslatih opomena u uplata ostvarenih nakon slanja opomena" ,"Iznos u KM"
      );
    }
  }, [chartData]);
  
  useEffect(() => {
    if (chartData.length > 0) {
      createChart(
        chartData.map((post) => post.Komitent), 
        [
          {
            name: 'Dug',
            data: chartData.map((post) => parseFloat(post.Dug.replace(",", "")))
          },
          {
            name: 'Uplata',
            data: chartData.map((post) => parseFloat(post.Uplata.replace(",", "")))
          }
        ],
        "chartContainer2", "Odnos duga u trenutku slanja opomene i iznos uplate nakon poslate opomene","Iznos u KM" 
      );
    }
  }, [chartData]);

  return (
    <div className="report">
    <Sidemenu/>
      <div id="chartContainer"></div>
      <div id="chartContainer2"></div>
    </div>
  );
};

export default ChartComponent;
