import React,{ Component } from 'react'
import './App.css';
import WoodCalc from './Components/woodCalc/WoodCalc'


const App =(props)=>  {
    return (
      <div>
        <WoodCalc appState={props.appState.calcWood}/>
      </div>
    )
  }


export default App;