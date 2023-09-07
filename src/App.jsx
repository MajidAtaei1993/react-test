import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/register'

export default function App() {
  return (
    <div className='w-full'>
      <div className="py-2 flex items-center justify-center">
        <Link className='router-link' to='/auth/login'>Login</Link>
        <Link className='router-link' to='/auth/register'>signup</Link>
      </div>
        <Routes>
          <Route className="route-link" path='/auth/login' element={ <Login />}></Route>
          <Route path='/auth/register' element={ <Signup />}></Route>
        </Routes>
    </div>
  )
}
