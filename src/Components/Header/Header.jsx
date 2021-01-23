import './Header.css'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Furniture from '../Scheme/Furniture/Furniture'

const Header=(props)=> (
    <div className='head-wrapper'>
            <button><NavLink className='nav' to='/main'>Главная</NavLink></button>
            <button><NavLink className='nav' to='/furniture'>Мебель</NavLink></button>
            <button><NavLink className='nav' to='/camp'>Лагерь</NavLink></button>
            <button><NavLink className='nav' to='/defense'>Оборона</NavLink></button>
            <button><NavLink className='nav' to='/decor'>Декор</NavLink></button>
        </div>

)
export default Header