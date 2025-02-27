
import imgUser from "../assets/b6c2418c-f920-44ea-8450-35a2c2b6ef89.jpg";
function UserInfo() {
  return (
    <div className="allInfo" style={{width:'100%',padding:'8px'}}>
      <div className="userImageName" style={{display:'flex',alignContent:"center",alignItems:'center',gap:'10px'}}>
        <div className="imageUsr" style={{width:'40px',height:'40px',overflow:'hidden',borderRadius:'50%',backgroundColor:'gray'}}>
            <img src={imgUser} alt="" />
        </div>
       <div className="infodetails">
       <h5 className="nameuser" style={{fontSize:'14px'}}>
            user Name 
        </h5>
       <p className="info" style={{fontSize:'12px',fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur adipisicing</p>
       </div>
        
      </div>
      <div style={{display:'flex',gap:'10px',padding:'10px 8px'}}>
        <div className="starts">
        <box-icon type='solid' name='star' size="20px" color="#FFCF50"></box-icon>
        <box-icon type='solid' name='star'  size="20px" color="#FFCF50"></box-icon>
        <box-icon type='solid' name='star'  size="20px" color="#FFCF50"></box-icon>
        <box-icon type='solid' name='star' size="20px"  color="#FFCF50"></box-icon>
        </div>
        <p className="date" style={{fontSize:'12px',color:'gray'}}>15/18/09</p>
      </div>

    </div>
  )
}

export default UserInfo