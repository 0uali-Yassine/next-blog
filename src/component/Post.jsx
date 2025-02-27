import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Post = ({ image, descp, title }) => {
  return (
    <div className="product-card">
      <div className="product-image" style={{position:'relative'}}>
        <img src={image} alt={title} />
          
      </div>
      <div className="product-details">
          <h4 className="product-title" style={{fontSize:'19px'}}>{title}</h4>
        <p>{descp}</p>
        <NavLink to='/' className='see'>Link More</NavLink>
        
      </div>
    </div>
  )
}

export default Post