import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Course from './Pages/Course'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
