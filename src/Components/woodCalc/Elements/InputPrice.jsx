import React from 'react'
import './InputPrice.css'

const InputPrice =(props)=> (   
        <div className='row'>
            {/* <div className='input'>Цена за кубический метр</div> */}
            <input placeholder='Введите цену 1м&sup3;' className='input1' type='text' value={props.value} onChange={props.onChange}/>
        </div>
)
export default  InputPrice