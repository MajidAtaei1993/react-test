import { NavLink, useLocation } from 'react-router-dom'
const navWrapper = [
    { text: 'sale', route:'' },
    { text: 'women', route:'' },
    { text: 'men', route:'' },
    { text: 'kids', route:'' },
    { text: 'designer', route:'' },
    { text: 'shoes', route:'' },
    { text: 'activewear', route:'' },
    { text: 'home', route:'' },
    { text: 'beauty', route:'' },
    { text: 'holiday gifts', route:'' },
    { text: 'explore', route:'/products' }
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
                    <i className="uil uil-sign-in-alt mr-2 text-xl"></i>
                    Login
                </NavLink>
                {/* <NavLink className={ useLocation().pathname === '/auth/register' ? 'text-white py-3 px-4 rounded-lg bg-slate-700 border border-slate-700 mx-2' : ' text-black py-3 px-4 rounded-lg border-slate-700 border mx-2' } to='/auth/register'>
                    <span className="fa fa-user-o mr-2" />
                    Signup
                </NavLink> */}
                {  }
            </div>
            <ul className="navlinks grid gap-4">
                {
                    navWrapper.map((link, i)=>
                        <NavLink to={ link.route } className={ currentRoute.pathname === link.route ? 'text-slate-600-900 mr-2 capitalize' : 'text-gray-500 capitalize' } key={ i }>{ link.text }</NavLink>
                    )
                }
            </ul>
        </nav>
    )
}
