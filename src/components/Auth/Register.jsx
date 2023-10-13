import { useState } from "react"
import { Link } from "react-router-dom"
export default function Login() {
    let [ showPassword, setShowPassword ] = useState(false)
    // let [ authMothod, setAuthMethod ] = useState(true)
    return (
        <div className="container mx-auto py-7 auth">
            <div className="lg:w-[450px] md:w-[500px] bg-slate-700 rounded-lg px-6 py-6 mx-auto">
                <h1 className="text-xl text-white text-center capitalize">Register</h1>
                <h1 className="text-sm text-white text-center capitalize">create your new account</h1>
                <div className="account-type ">
                    <div className="p-4 flex justify-center items-center">
                        <img src="/src/assets/icons/user.png" alt="" className="w-36 mx-auto flex" />
                    </div>
                </div>
                <form action="" className="mt-10">
                    <div className="columns-2 lg:columns-2 sm:columns-1">
                        <div className="sm:col-span-4">
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white">
                                First Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                <input type="text" name="firstname" id="firstname" autoComplete="username" className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-xl" placeholder="First Name" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                <input type="text" name="lastname" id="lastname" autoComplete="lastname" className="block flex-1 border-0 bg-transparent p-2 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-xl" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns-1 my-4">
                        <label htmlFor="email" className="text-white leading-6">Email</label>
                        <div className="rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 w-full mt-2 focus-within:ring-2 focus-within:ring-inset">
                            <input type="email" name="email" id="email" placeholder="example@gmail.com" className="rounded-lg border-1 text-white bg-transparent p-2 focus:ring-0 w-full" />
                        </div>
                    </div>
                    <div className="columns-2 lg:columns-2 sm:columns-1">
                        <div className="">
                            <label htmlFor="password" className="text-white leading-6">Password</label>
                            <div className="rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 w-full mt-2 focus-within:ring-2 focus-within:ring-inset flex items-center pr-2">
                                <input name="password" id="password" placeholder="password" className="rounded-lg border-1 text-white bg-transparent p-2 focus:ring-0 w-full" type={ showPassword ? 'password' : 'text' } />
                                <div onClick={ ()=>setShowPassword(!showPassword)} className={ showPassword ? 'fa fa-eye cursor-pointer text-white' : 'cursor-pointer text-white fa fa-eye-slash' }></div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="confirmpassword" className="text-white leading-6">Confirm Password</label>
                            <div className="rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 w-full mt-2 focus-within:ring-2 focus-within:ring-inset">
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="password" className="rounded-lg border-1 text-white bg-transparent p-2 focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="columns-1 items-center">
                        <button className="uppercase hover:bg-transparent">Register</button>
                    </div>
                    <Link className="columns-1 flex justify-between text-white" to='/auth/login'>
                        <span className="capitalize">if you have account</span>
                        singin
                    </Link>
                </form>
            </div>
        </div>
    )
}
