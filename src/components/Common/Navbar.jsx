import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar">

            <a className="logo">
                <img src="../../../public/vite.svg" alt="" />
            </a>
            <ul className="navlinks">
                <li className="navlink">Product</li>
                <li className="navlink">Features</li>
                <li className="navlink">MarketPlace</li>
                <li className="navlink">Company</li>
            </ul>
                <NavLink className='route-link' to='/auth/login'><span className="fa fa-user-o" />
                Signin</NavLink>
                <NavLink className='route-link mx-2' to='/auth/register'><span className="fa fa-user-o" />
                Signup</NavLink>
        </nav>
    )
}
