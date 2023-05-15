import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from "react-apexcharts";
import { saveAs } from 'file-saver';
import './Display.css';

const Display = () => {
  const location = useLocation();
  

  const[label, setLabel] = useState(location.state.labels);
  const[data, setData] = useState(location.state.data);

  const [plot, setPlot] = useState({
    options: {
      colors: [ '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',],

      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: label
      }
    },
    series: [
      {
        name: "Words",
        data: data
      }
    ]
  });

  // Export as CSV file
  const handleExport = () => {

    const csvData = label.reduce((acc, label, index) => {
      const row = `${label},${data[index]}\n`;
      return acc + row;
    }, 'Word,Frequency\n');

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');

  };

  return (
    <div className='container'>

      <div className="tite">
         <h1 className='chart-title' > Top 20 Most Frequent Words </h1>
      </div>

      <div className='chart-container'>
      
        <Chart
          options={plot.options}
          series={plot.series}
          type="bar"
          width="800"
          height={500}
        />

      </div>

      <div style={{paddingTop:"30px"}}>
         <button className='button' onClick={handleExport}>Export</button>
      </div>

    </div>
  );
};

export default Display;
