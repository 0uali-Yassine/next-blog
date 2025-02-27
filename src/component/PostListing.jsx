import React from 'react'
import Post from './Post'
import img from '../assets/download.jpg'
const PostListing = () => {
  return (
    <section className='posts__section'>
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
        <Post image={img} title={"What is Lorem Ipsum?"} descp={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
    </section>
  )
}

export default PostListing