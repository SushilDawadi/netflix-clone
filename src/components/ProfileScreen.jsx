import React from "react";
import "../styles/ProfileScreen.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";
import profile from "../assets/profile.jpg";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={profile} alt="profile" />

          <div className="profileScreen_Details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_SignOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
