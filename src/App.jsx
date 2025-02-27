
import Footer from './component/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './component/Navbar'
import Login from './component/Login'
import PopupPost from './pages/PopupPost'
import { useGlobalContext } from './Context'
import SignUp from './component/Signup'

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function App() {
  const {addPosts} = useGlobalContext();

  // Search Blogs
  const onSearchBlog = async (query) => {
    // try {
    //   const response = await axiosInstance.get('/blogs/searchBlogs', {
    //     params: { query, user },
    //   });
    //     setBlogs(response.data.blogs);
    //     setIsSearch(true);
    // }catch (error) {
    //   console.log(error);
    // }
  }  

  // Clear Search Blogs
  const handleClearSearch = () => {
    setIsSearch(false);
    getAllBlogs();
  }

  return (
    <>
    <Router> 
      <Navbar onSearchBlog={onSearchBlog} handleClearSearch={handleClearSearch}/> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {addPosts && <PopupPost/>}
      <Footer />
    </Router>
  </>
  )
}

export default App
