import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/register'
import Home from './pages/landingpage'
import Products from './pages/products'
import Product from './pages/product'
export default function App() {
  return (
    <div className='container mx-auto'>
      <div className="py-2 flex items-center justify-center">
      </div>
        <Routes>
          <Route className="route-link" path='/auth/login' element={ <Login />}></Route>
          <Route path='/auth/register' element={ <Signup />}></Route>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/products' element={ <Products />}></Route>
          <Route path='/products/:id' element={ <Product />}></Route>
        </Routes>
    </div> 
  )
}
