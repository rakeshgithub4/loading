import './App.css';
import React,{useState,useEffect} from 'react';
import logo from './images/carts.png'
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'
import Loader from 'react-loader-spinner';
import * as d3 from 'd3';
import BarChart from 'react-bar-chart';


const Graph = () => {
    
    // }
    const data = [
      {text: 'Man',value:500},
      {text: 'Woman',value:300}
    ];

    const margin = {top:20,right:20,bottom:30,left:40};

  return (
    <>
    <h3>Bar Graph</h3>
    <BarChart data = {data}
         width = {300}
         heigth = {400}
         margin = {margin}
         data = {data}
         />
         
    </>
  )

}


function App() {
  const [data,setData] = useState({})
  const [val,setVal] = useState(false)
  const [value,setValue] = useState(false)
  function handleOpen(){
    setData({openDialog:true})
  }

  return (
    <div className="App">
      <img src = {logo} alt = "img" /><br/><br/>
      <button onClick = {handleOpen}>Click Here</button>
      <Dialog open = {data.openDialog} >
        <DialogContent>
        <img src = {logo} alt = "img" /><br/><br/>
        </DialogContent>
        <DialogActions>
        <button id = "btn1" onClick = {() => setVal(!val)}>Click1</button>
        <button id = "btn2" onClick = {() => setValue(!value)}>Click2</button>
        {
          val ? <Loader type = "Rings" 
                        color = "#00BFFF"
                        height = {80}
                        width = {80}
                        timeout = {7000}
                        id = "spin"/> : null
        }
        {
          value ? <Graph /> : null

        }
        </DialogActions>
        

      </Dialog>
    </div>
  );
}

export default App;
