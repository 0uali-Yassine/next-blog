
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Next Blog</h1>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="icons">
        <div>Home </div>
        <div>About </div>
        <div className="addPost" style={{display:'flex',gap:'6px',justifyContent:'space-between',alignItems:'center'}}>
          <box-icon name='message-square-add' color='#007BFF' size="20px"></box-icon>
          <p>Posts</p>
        </div>
        <div className="notification-icon">🔔</div>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar;

