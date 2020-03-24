import React,{useEffect, useRef} from 'react';
import data from './data/data.json'
import bar from './bar'
import * as d3 from 'd3'

let container = d3.select('.chart-container');
let barChart = bar();
let dataset = [...data];

barChart
    .width(300)
    .height(200)
    .margin({
        left: 50,
        bottom: 30
    })
    .on('customMouseOver', function(event, data) {
        console.log('data', data);
    });

container.datum(dataset).call(barChart);

function App() {

  useEffect(()=>{
    console.log(container)
  },[])
  return (
    <div className="chart-container">
      
    </div>
  );
}

export default App;
