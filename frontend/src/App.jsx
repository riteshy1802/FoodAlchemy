import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/HomePage/Homepage'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Homepage/>}
        />
      </Routes>
    </div>
  )
}

export default App
