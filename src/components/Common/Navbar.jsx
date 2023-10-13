import { NavLink, useLocation } from 'react-router-dom'
const navWrapper = [
    { text: 'football', route:'' },
    { text: 'footsal', route:'' },
    { text: 'basketball', route:'' },
    { text: 'volyball', route:'' },
    { text: 'handball', route:'' },
    { text: 'medisinball', route:'' },
    { text: 'fantazy', route:'' },
    { text: 'watterpolo', route:'' },
    { text: 'all produacts', route:'/products' }
]
export default function Navbar(){
    let currentRoute = useLocation()
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
                <NavLink className={ useLocation().pathname === '/auth/login' ? 'text-white py-3 px-4 rounded-lg bg-slate-700 border border-slate-700 mx-2' : ' text-black py-3 px-4 rounded-lg border-slate-700 border mx-2' } to='/auth/login'>
                    <span className="fa fa-user-o mr-2" />
                    <span className="fa fa-arrow-right-to-bracket"></span>
                    Login
                </NavLink>
                <NavLink className={ useLocation().pathname === '/auth/register' ? 'text-white py-3 px-4 rounded-lg bg-slate-700 border border-slate-700 mx-2' : ' text-black py-3 px-4 rounded-lg border-slate-700 border mx-2' } to='/auth/register'>
                    <span className="fa fa-user-o mr-2" />
                    Signup
                </NavLink>
                {  }
            </div>
            <ul className="navlinks columns-12">
                {
                    navWrapper.map((link, i)=>
                        <NavLink to={ link.route } className={ currentRoute.pathname === link.route ? 'text-slate-600-900 mr-2' : 'text-gray-500 mr-2' } key={ i }>{ link.text }</NavLink>
                    )
                }
            </ul>
        </nav>
    )
}
