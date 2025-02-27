import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './component/Navbar'
import Login from './component/Login'
import PopupPost from './pages/PopupPost'
import { useGlobalContext } from './Context'

function App() {
  const {addPost} = useGlobalContext();
  return (
    <Router> 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {addPost && <PopupPost/>}
    </Router>
  )
}

export default App
