import React from 'react';
import data from './data/data.json'
import bar from './bar'
import * as d3 from 'd3'
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

var node = document.createElement('div');
let container = d3.select(node);
let barChart = bar();
let dataset = [...data];

barChart
    .margin({
        left: 50,
        bottom: 30
    })
    .on('customMouseOver', function(event, data) {
        console.log('data', data);
    });

container.datum(dataset).call(barChart);

// function App() {

//   useEffect(()=>{
//     console.log(container)
//   },[])
//   return (
//     <div className="chart-container">
     
//     </div>
//   );
// }



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};

export default App;
