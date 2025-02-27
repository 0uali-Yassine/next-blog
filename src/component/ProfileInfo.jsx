/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import { getInitials } from "../utils/helper"

const ProfileInfo = ({onLogout}) => {
  const [userInfo, setUserInfo] = useState({
    fullName: localStorage.getItem("fullName"),
    email: localStorage.getItem("email"),
  })
  


  return (
    <div className="profile-info">
    <div className="profile-initials">
        {getInitials(userInfo.fullName)}
    </div>
    <div>
        <p className="profile-name">{userInfo.fullName}</p>
        <button className="logout-btn" onClick={onLogout}>
            Logout
        </button>
    </div>
    </div>

  )
}

export default ProfileInfo