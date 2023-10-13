import { useState } from "react"
import { Link } from "react-router-dom"
const loginMethod = [
    {id: 1, text:'Mangement', icon:'/src/assets/icons/settings.png' },
    {id: 2, text:'Employer', icon:'/src/assets/icons/user.png' },
]
export default function Login() {
    let [ activeCard, setActiveCard ] = useState(0)
    let [ showPassword, setShowPassword ] = useState(false)
    // let [ authMothod, setAuthMethod ] = useState(true)
    return (
        <div className="container mx-auto py-7 auth">
            <div className="lg:w-[450px] md:w-[500px] bg-slate-700 rounded-lg px-6 py-2 mx-auto">
                <h1 className="text-xl text-white text-center capitalize">choose account type</h1>
                <div className="account-type columns-2 gap-4">
                    {
                        loginMethod.map(item =>
                            <div key={ item.id } className={ activeCard === item.id ? 'active p-4 card' : 'p-4 card' } onClick={()=>setActiveCard(item.id)}>
                                <img src={ item.icon } alt="" className="w-36" />
                                <h1 className="text-lg">{ item.text }</h1>
                            </div>
                        )
                    }
                </div>
                <form action="" className="mt-10">
                    <div className="columns-1">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                User Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-xl" placeholder="User Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns-1 my-2">
                        <div className="">
                            <label htmlFor="password" className="text-white leading-6">Password</label>
                            <div className="rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 w-full mt-2 focus-within:ring-2 focus-within:ring-inset flex items-center pr-2">
                                <input name="password" id="password" placeholder="password" className="rounded-lg border-1 text-white bg-transparent p-2 focus:ring-0 w-full" type={ showPassword ? 'password' : 'text' } />
                                <div onClick={ ()=>setShowPassword(!showPassword)} className={ showPassword ? 'fa fa-eye cursor-pointer text-white' : 'cursor-pointer text-white fa fa-eye-slash' }></div>
                            </div>
                        </div>
                    </div>
                    <div className="columns-1 items-center border-b pb-2">
                        <button className="uppercase hover:bg-transparent">login</button>
                        <Link className="text-white pt-4 text-sm">Forget password ?</Link>
                    </div>
                    <Link className="columns-1 flex justify-between text-white py-3 text-sm" to='/auth/register'>
                        <span className="capitalize">do you have any account?</span>
                        singup
                    </Link>
                </form>
            </div>
        </div>
    )
}
