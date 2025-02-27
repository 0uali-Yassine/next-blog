import UserInfo from "../component/UserInfo";
import PostListing from "../component/PostListing";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

const Home = () => {
  const {newPost,Post,setPost,setShowBlog} = useGlobalContext();

  const updatePosts = (newPost) => {
    // If newPost is empty or undefined just chiking! 
    if (!newPost || Object.keys(newPost).length === 0) return;  
  
    setPost((prevPosts) => {
      // Add the new post at the beginning of the array while keeping the old ones  
      return [newPost, ...prevPosts];  
    });
  };

  useEffect(() => {
    updatePosts(newPost);
  }, [newPost]);

  return (
    <div style={{marginTop:'30px'}}>
        <div className="forYou">
            <h3 className="for-you-heading" style={{color:'#FFCF50'}}>For you:</h3>
            <ul className="forYouChoise">
                <li>Art</li>
                <li>Sports</li>
                <li>News</li>
                <li>Art</li>
            </ul>
        </div>

        <div className="" style={{display:"flex",justifyContent:'space-between'}}>
          <div className="latsetPost" style={{width:'70%'}}>
            <div className="TopPost" style={{width:"50%"}}>
                <div className="image-post" style={{width:"100%",borderRadius:'10px',overflow:"hidden",height:'300px',backgroundColor:'gray'}}>
                   <img src={Post[0]?.image} alt="for blog" style={{width:"100%",height:'100%'}} />
                </div>
                
                <div className="details" style={{margin:'10px 10px'}}>
                    <h3 className="title" style={{fontWeight:'bold',fontSize:'30px'}}>{Post[0]?.title}</h3>
                    <h5 className="details">
                       {Post[0]?.descp}
                    </h5>
                    <button className="readMore" onClick={setShowBlog(Post[0])}>
                      <NavLink to='/blog' style={{textDecoration:'none',color:'black'}}>Read More</NavLink>
                      </button>
                </div>
            </div>
            <div className="TopTwoPost" style={{width:"40%"}}>
               <div className="image-post" style={{width:"100%",overflow:"hidden",borderRadius:'10px',height:'200px',backgroundColor:'gray'}}>
                    <img src={Post[1]?.image} alt="img blog" style={{width:"100%",height:'100%'}} />
                </div>
                <div className="details">
                    <h3 className="title" style={{fontWeight:'bold',fontSize:'20px'}}>{Post[1]?.title}</h3>
                    <h5 className="details">
                       {Post[1]?.descp}
                    </h5>
                    <button className="readMore" onClick={setShowBlog(Post[1])}>
                      <NavLink to='/blog' style={{textDecoration:'none',color:'black'}}>Read More</NavLink>
                      </button>
                </div>
            </div>

          </div>

          <div className="" style={{width:'30%',padding:'20px',borderRadius:'10px',gap:'10px',display:'flex',flexDirection:'column',backgroundColor:"#F7F7F7"}}>
            <h4 style={{fontWeight:'bold',fontSize:"24px"}}>Staff Pick</h4>
            <UserInfo/>
            <hr style={{width:'60%',margin:'auto',color:'#5D9CEC'}}/>
            <UserInfo/>
            <hr style={{width:'60%',margin:'auto',color:'#5D9CEC'}}/>
            <UserInfo/>
            <UserInfo/>

          </div>

        </div>

        <PostListing />
    </div>
  )
}

export default Home;