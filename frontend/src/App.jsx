import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/HomePage/Homepage'
import Cart from './components/Cart/Cart'
import { Toaster } from 'react-hot-toast'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {

  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={
          <Homepage/>}
        />
        <Route path='/cart' element={
          <Cart/>}
        />
        <Route path='/product/:id' element={
          <ProductDetails/>}
        />        
      </Routes>
    </div>
  )
}

export default App
