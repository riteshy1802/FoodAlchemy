import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/HomePage/Homepage'
import Cart from './components/Cart/Cart'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Homepage/>}
        />
        <Route path='/cart' element={
          <Cart/>}
        />
      </Routes>
    </div>
  )
}

export default App
