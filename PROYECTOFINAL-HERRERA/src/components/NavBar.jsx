import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/'><img src="/walmart.png" alt="walmart" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>WALMART</NavLink>
                <NavLink className='nav-link' to='/category/womens_clothing'>MUJER</NavLink>
                <NavLink className='nav-link' to='/category/mens_clothing'>HOMBRE</NavLink>

            </ul>
            <NavLink className='nav-link' to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar;