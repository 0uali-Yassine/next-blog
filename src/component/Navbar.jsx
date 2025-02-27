
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import SearchBar from "./SearchBar";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";


function Navbar({onSearchBlog, handleClearSearch}) {
  const {setAddPosts} = useGlobalContext();
  
  const [searchQuery, setSearchQuery] = useState("");
    
  const handleSearch = () => {
      if (searchQuery) {
          onSearchBlog(searchQuery);
          setSearchQuery("");
      }
  }

  const onClearSearch = () => {
      setSearchQuery("");
      handleClearSearch();
  }

  const navigate = useNavigate();
  
  const onLogout = () => {
    console.log("logout")
    navigate("/");
    localStorage.clear();
  }
  return (
    <nav className="navbar" style={{backgroundColor:'#F7F7F7'}}>
      <div className="logo">
        <NavLink to='/' style={{textDecoration:'none'}}><h1>Next Blog</h1></NavLink>
      </div>
      <SearchBar 
            value={searchQuery}
            onChange={({ target }) => {
                setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
        />

      <div className="icons">
        <div>
          <NavLink to='/home' className="home">Home</NavLink>
        </div>
        <div>
        <NavLink to='/about' className="about" style={{padding:"5px 10px"}}>About</NavLink>
        </div>
        <NavLink onClick={()=> setAddPosts(prev =>!prev)} className="addPost" style={{display:'flex',gap:'6px',justifyContent:'space-between',alignItems:'center'}}>
          <box-icon name='message-square-add' color='#007BFF' size="20px"></box-icon>
          <p>Posts</p>
        </NavLink>
        <div className="notification-icon">🔔</div> 

        {
          localStorage.getItem('token') ? (<ProfileInfo onLogout={onLogout}/>) : 
          (
          <NavLink style={{textDecoration:'none',color:'#007bff'}} to='/'>
            <p style={{marginRight:'10px',fontSize:'16px',fontWeight:'bold'}}>Login</p>
          </NavLink>  
          )
        }       
        {/* <button className="signup-btn">
            Sign Up
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar;

