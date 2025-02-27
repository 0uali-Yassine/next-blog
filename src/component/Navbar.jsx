import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

function Navbar() {
  const {setAddPost} = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Next Blog</h1>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="icons">
        <div>
          <NavLink to='/' className="home">Home</NavLink>
        </div>
        <div>
        <NavLink to='/about' className="about" style={{padding:"5px 10px"}}>About</NavLink>
        </div>
        <NavLink className="addPost" style={{display:'flex',gap:'6px',justifyContent:'space-between',alignItems:'center'}}>
          <box-icon name='message-square-add' color='#007BFF' size="20px"></box-icon>
          <p>Posts</p>
        </NavLink>
        <div className="notification-icon">🔔</div>
        <button className="signup-btn">
          <NavLink to='login'>Sign Up</NavLink>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;

