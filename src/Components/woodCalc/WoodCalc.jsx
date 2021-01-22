import React,{ Component } from 'react'
import './WoodCalc.css';
import PriceStick from './Elements/PriceStick'
import InputPrice from './Elements/InputPrice'
import Buttons from './Elements/Buttons'

class WoodCalc extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
        // value01:props.appState.size,
        value: '',
        price:[0,0,0,0,0],
        size:['100*25*6000','150*25*6000','50*50*6000','50*100*6000','100*100*6000'],
        cauntIn:[66,44,66,33,16]
    };
    this.handleChange = this.handleChange.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }
  
  handleChange(event) {
    //   console.log(this.state.value01)
    let val = event.nativeEvent.data
    if(!isNaN(parseInt(val))) {
      this.setState({value: event.target.value})
      let d = this.state.price.slice()
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