import { useEffect, useState } from 'react';
import Post from './Post'
import moment from 'moment';

import axiosInstance  from "../utils/axiosInstance";

const PostListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [isSearch, setIsSearch] = useState(false);


  const getAllBlogs = async () => {
    try {
      const response = await axiosInstance.get(`/blogs/getblogs?user=${user}`);
      setBlogs([...response.data.blogs]);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Blog
  const deleteBlog = async (data) => {
    const blogId = data._id;
    try {
      const response = await axiosInstance.delete(`/blogs/deleteBlog/${blogId}`, {
        data: { user }
    } )
        getAllBlogs();
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }
    }
  }

  // Search Blogs
  const onSearchBlog = async (query) => {
    try {
      const response = await axiosInstance.get('/blogs/searchBlogs', {
        params: { query, user },
      });
        setBlogs(response.data.notes);
        setIsSearch(true);
    }catch (error) {
      console.log(error);
    }
  }  

  // Clear Search Blogs
  const handleClearSearch = () => {
    setIsSearch(false);
    getAllBlogs();
  }

  
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <section>
      {blogs.length === 0 ? (
        <p className="text-center text-xl">
          No notes found. Add some notes by clicking on the plus icon.
        </p>
      ) : (
        <div className="posts__section">
         {blogs.map((blog) => (
            <Post
              key={blog._id}
              title={blog.title}
              date={moment(blog.createdOn).format("DD MM YYYY")}
              content={blog.content}
              onDelete={() => deleteBlog(blog)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PostListing