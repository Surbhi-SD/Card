import React from "react";
import './App.css';
import BusLogo from './bus.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class App extends React.Component {
    render() {
      return (
        <div className="card">
            <div className="content">
              <div className="child" style={{ width: 90, height: 90, marginLeft: 10 }}>
              <CircularProgressbar value={50} text={'50'} styles={{ path: { stroke: '#109cf1' }, text: { fill: '#109cf1' } }} />
              </div>
                <div className="top child">
                <h2>50 of 100</h2>
                <p style={{ fontSize: 18, width: 160 }}>Buses charged today</p>
                </div>
            </div>  <hr></hr>

            <div className="firstBox">
                <div>
                    <img src={BusLogo} alt="bus icon" className="icon child"></img><br></br>
                    <div className="child"style={{ marginLeft: 5, paddingTop: 0 }} >
                    <h3>5 <span style={{ fontSize: 16 }}>Currently charging</span></h3>
                    </div>
                
                </div>
                <div className="box">
                    <img src={BusLogo} alt="bus icon" className="icon1 child"></img><br></br>
                    <div className="child"style={{ marginLeft: 60, paddingTop: 0 }} >
                    <h3>48 <span style={{ fontSize: 16 }}>Charged on time</span></h3>
                    </div>
                
                </div>

            </div>

            <div className="firstBox">
                <div>
                    <img src={BusLogo} alt="bus icon" className="icon2 child"></img><br></br>
                    <div className="child"style={{ marginLeft: 180, paddingTop: 0 }} >
                    <h3>2 <span style={{ fontSize: 16 }}>Charged delayed</span></h3>
                    </div>
                
                </div>
                

            </div>
        </div>
     

     
      );
    }
  }

export default App;
