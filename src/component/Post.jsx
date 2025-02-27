import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ image, descp, price, title }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={descp} />
      </div>
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <p>{descp}</p>
        <span className='see'>Link More</span>
      </div>
    </div>
  )
}

export default Post