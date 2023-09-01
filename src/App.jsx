import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from "./Home"
import "./App.css"
import Navbar from './components/Navbar'
import Create from "./Create.jsx"

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </Router>
  )
}

export default App
