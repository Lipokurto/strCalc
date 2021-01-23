import React,{ Component } from 'react'
import './App.css';
import WoodCalc from './Components/woodCalc/WoodCalc'
import Header from './Components/Header/Header'
import MainPage from './Components/MainPage/MainPage';
import Furniture from './Components/Scheme/Furniture/Furniture';
import { BrowserRouter,Route } from 'react-router-dom';
import Defense from './Components/Scheme/Defense/Defense';
import Camp from './Components/Scheme/Camp/Camp';
import Decor from './Components/Scheme/Decor/Decor';

const App =(props)=>  {
  
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <div className='app-wrapper-content'>
              <Route path='/main' render={ () => <MainPage  />}/>
              <Route path='/furniture' render={ () => <Furniture  />}/>
              <Route path='/defense' render={ () => <Defense  />}/>
              <Route path='/camp' render={ () => <Camp  />}/>
              <Route path='/decor' render={ () => <Decor  />}/>
            </div>
            <WoodCalc appState={props.appState.calcWood}/>
        </div>
      </BrowserRouter>
    )
  }


export default App;