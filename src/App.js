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
      price1: (0).toFixed(2),
      price2: (0).toFixed(2),
      price3: (0).toFixed(2),
      price4: (0).toFixed(2),
      price5: (0).toFixed(2),
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let val = event.nativeEvent.data
    console.log(isNaN(' '))
    if(isNaN(parseInt(val))) {
      this.setState({value: this.state.value})
      this.setState({price1: (this.state.value / 66).toFixed(2)})
      this.setState({price2: (this.state.value / 44).toFixed(2)})
      this.setState({price3: (this.state.value / 66).toFixed(2)})
      this.setState({price4: (this.state.value / 33).toFixed(2)})
      this.setState({price5: (this.state.value / 16).toFixed(2)})
    } else {
      this.setState({value: event.target.value})
      this.setState({price1: (event.target.value / 66).toFixed(2)})
      this.setState({price2: (event.target.value / 44).toFixed(2)})
      this.setState({price3: (event.target.value / 66).toFixed(2)})
      this.setState({price4: (event.target.value / 33).toFixed(2)})
      this.setState({price5: (event.target.value / 16).toFixed(2)})
    }
  }
 
  render() {
    return (
      <div className='calc-wrapper'>
        <div className='app'>
            <InputPrice value={this.state.value} onChange={this.handleChange}/>
            <PriceStick result={this.state.price1}>100*25*6000</PriceStick>
            <PriceStick result={this.state.price2}>150*25*6000</PriceStick>
            <PriceStick result={this.state.price3}>50*50*6000</PriceStick>
            <PriceStick result={this.state.price4}>50*100*6000</PriceStick>
            <PriceStick result={this.state.price5}>100*100*6000</PriceStick>
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