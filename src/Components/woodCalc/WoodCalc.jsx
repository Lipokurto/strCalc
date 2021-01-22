import React,{ Component } from 'react'
import './WoodCalc.css';
import PriceStick from './Elements/PriceStick'
import InputPrice from './Elements/InputPrice'
import Buttons from './Elements/Buttons'

class WoodCalc extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        value: props.appState.value,
        price:props.appState.price,
        size:props.appState.size,
        cauntIn:props.appState.cauntIn
    };
    this.handleChange = this.handleChange.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }
  
  handleChange(event) {
    let val = event.nativeEvent.data
    if(!isNaN(parseInt(val))) {
      this.setState({value: event.target.value})
      let d = this.state.price.slice()
      console.log(this.props.appState.value)
      for (let i=0; i<this.state.price.length;i++) {
        d[i]=(event.target.value / this.state.cauntIn[i]).toFixed(2)
        this.setState({price:d})
      }
    } 
  }

  clearInput() {
    let d = this.state.price.slice()
    for (let i=0; i<this.state.price.length;i++) {
      d[i]=(0).toFixed(2)
      this.setState({value:'',price:d})
    }
  }

  render() { 
    return (
      <div className='calc-wrapper'>
        <div className='app'>
            <InputPrice value={this.state.value} onChange={this.handleChange}/>
              {this.woodParPrice = this.state.price.map((price,index)=> 
                <PriceStick key={index} result={price}>
                  {this.state.size[index]}
                  </PriceStick>
                  )}
            <Buttons onClickEre={this.clearInput}/>
        </div>
      </div>
    );
  }
}

export default WoodCalc;