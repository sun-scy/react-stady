import React from 'react';
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import Home from './page/home'
import Login from './page/login'
import './App.css';

function App() {

 const dead = ()=>{
    let wrap = document.getElementById('wrap') as HTMLDivElement
    ReactDOM.unmountComponentAtNode(wrap)
  }
  return (
    <div className="App">
      <Home/>

      <span onClick={dead}>消失</span>
      {/* <Login/> */}
    </div>
  );
}

export default App;
