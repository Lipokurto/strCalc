import React,{ Component } from 'react'
import './App.css';
import PriceStick from './Components/PriceStick'
import InputPrice from './Components/InputPrice'
import Buttons from './Components/Buttons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      price:[0,0,0,0,0],
      size:['100*25*6000','150*25*6000','50*50*6000','50*100*6000','100*100*6000'],
      cauntIn:[66,44,66,33,16]
    };  
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    
    let val = event.nativeEvent.data
    if(isNaN(parseInt(val))) {
      this.setState({value: this.state.value})
      let d = this.state.price.slice()
      for (let i=0; i<this.state.price.length;i++) {
        d[i] = (this.state.value / this.state.cauntIn[i]).toFixed(2)
        this.setState({price:d})
      }
    } else {
      this.setState({value: event.target.value})
      let d = this.state.price.slice()
      for (let i=0; i<this.state.price.length;i++) {
        d[i]=(event.target.value / this.state.cauntIn[i]).toFixed(2)
        this.setState({price:d})
      }
      debugger
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
            <Buttons onClickEre={()=>
            this.setState({value:'',
            price1: (0).toFixed(2),
            price2: (0).toFixed(2),
            price3: (0).toFixed(2),
            price4: (0).toFixed(2),
            price5: (0).toFixed(2)})}/>
        </div>
      </div>
    );
  }
}

export default App;