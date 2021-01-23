import './Buttons.css'
const Buttons =(props)=> (
    <div className='wrapper-stick'>
          <input className='erese' type="submit" value="Стереть" onClick={props.onClickEre}/>
    </div>

)
export default Buttons

