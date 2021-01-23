import { Component } from "react"
import './Furniture.css'

class Furniture extends Component {
    constructor(props)  {
        super(props) 
            this.state = {
                type_A: {
                    id:1,
                    name:'Скамейка тип А',
                    totalCost:'',
                    img: this.props.appState.furniture.bench.type_A.img,
                    cuts:['50*50*200','100*25*300','100*25*500','50*50*500','100*25*1500'],
                    cauntCuts:[2,3,4,2,2],
                }
            }
            debugger
        }
render() {
    return (
    <div>
        <img className='type_img' alt ='' src={this.props.appState.furniture.bench.type_A.img}></img>
    </div>
        )
    }
}
export default Furniture