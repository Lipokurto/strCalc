import './Buttons.css'
const Buttons =(props)=> (
    <div className='wrapper-stick'>
          {/* <input type="submit" value="Рассчитать" onClick={props.onClickRass}/> */}
          <input className='erese' type="submit" value="Стереть" onClick={props.onClickEre}/>
    </div>

)
export default Buttons

