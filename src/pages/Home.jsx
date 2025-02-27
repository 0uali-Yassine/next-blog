import UserInfo from "../component/UserInfo";

const Home = () => {
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
                   <img src="https://images.pexels.com/photos/169401/pexels-photo-169401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="for blog" />
                </div>
                
                <div className="details" style={{margin:'10px 10px'}}>
                    <h3 className="title" style={{fontWeight:'bold',fontSize:'30px'}}>ART ART </h3>
                    <h5 className="details">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quia molestiae quidem magni quo consectetur adipisicing elit. Illo quia molestiae quidem magni quo fugiat ex optio similique enim. Labore odit placeat alias? Est neque eum sint ad ut facilis?
                    </h5>
                    <button className="readMore">Read More</button>
                </div>
            </div>
            <div className="TopTwoPost" style={{width:"40%"}}>
               <div className="image-post" style={{width:"100%",overflow:"hidden",borderRadius:'10px',height:'200px',backgroundColor:'gray'}}>
                    <img src="https://images.pexels.com/photos/7767634/pexels-photo-7767634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img blog" />
                </div>
                <div className="details">
                    <h3 className="title" style={{fontWeight:'bold',fontSize:'20px'}}>ART ART </h3>
                    <h5 className="details">
                        Lorem ipsum, dolor sit amet consectetur acilis? amet consectetur acilis?
                    </h5>
                    <button className="readMore">Read More</button>
                </div>
            </div>

          </div>

          <div className="" style={{width:'30%',padding:'20px',gap:'10px',display:'flex',flexDirection:'column'}}>
            <h4 style={{fontWeight:'bold',fontSize:"24px"}}>Staff Pick</h4>
            <UserInfo/>
            <hr style={{width:'60%',margin:'auto',color:'#5D9CEC'}}/>
            <UserInfo/>
            <hr style={{width:'60%',margin:'auto',color:'#5D9CEC'}}/>
            <UserInfo/>
            <UserInfo/>

          </div>

        </div>

        <div className="relatedPost">

        </div>
    </div>
  )
}

export default Home;