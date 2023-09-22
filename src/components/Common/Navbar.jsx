import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar flex flex-wrap">
            <NavLink className="logo columns-auto" to='/'>
                <img src="/src/assets/images/logo5.png" alt="" className=' w-16' />
            </NavLink>
            <div className="searchbox">
                <input type="text" placeholder='search' />
                <i className="fa fa-search" />
            </div>
            <div>
                <NavLink className='route-link' to='/auth/login'><span className="fa fa-user-o" />
                Signin</NavLink>
                <NavLink className='route-link mx-2' to='/auth/register'><span className="fa fa-user-o" />
                Signup</NavLink>
            </div>
            <ul className="navlinks columns-12">
                <li className="navlink">football</li>
                <li className="navlink">footsal</li>
                <li className="navlink">basketball</li>
                <li className="navlink">volyball</li>
                <li className="navlink">handball</li>
                <li className="navlink">medisinball</li>
                <li className="navlink">fantazy</li>
                <li className="navlink">watterpolo</li>
                <NavLink className="navlink" to='/products'>all produacts</NavLink>
            </ul>
        </nav>
    )
}
