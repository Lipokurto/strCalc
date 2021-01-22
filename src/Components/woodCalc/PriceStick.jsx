import './PriceStick.css'
const PriceStick =(props)=> (
    <div className='wrapper-stick'>
        <div className='fast'>{props.children}</div>
        <div className='fast'>{props.result}</div>
    </div>

)
export default PriceStick

