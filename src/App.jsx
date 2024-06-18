import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Card from './components/Card'
import Forms from './components/Forms'

function App() {

  return (
    <div className=' bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/card' element={<Card />} />
        <Route path='/forms' element={<Forms />} />



      </Routes>
      <Footer />
    </div>
  )
}

export default App
