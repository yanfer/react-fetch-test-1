import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/navbar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className=''>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </Router>
      </div>
  )
}

export default App
 