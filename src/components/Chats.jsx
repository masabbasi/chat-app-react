import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
//Context
import { AuthContext } from "../context/AuthContextProvider";
//Components
import Navbar from "./Navbar";
//Style
import "./Chats.css";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "26c65d77-8cf0-4d79-9717-d324e75bd5fb",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
				formData.append("email",user.email);
				formData.append("username",user.email);
				formData.append("secret",user.uid);
				getFile(user.photoURL).then(avatar=>formData.append("avatar",avatar,avatar.name));
				axios.post("https://api.chatengine.io/users/",formData,{
					headers:{
						"private-key":"7d1f3483-cf7d-4b58-93a3-88a154ba692a"
					}
				}).then(()=>{
					setLoading(false)
				}).catch(error=>console.log(error))
      });
  }, [user, navigate]);

	const getFile = async(url)=>{
		const response = await fetch(url);
		const data = await response.blob();
		return new File ([data],"userPhoto.jpg",{type:"image/jpeg"})
	}

  const logOutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className="chatsContainer">
      <Navbar logOutHandler={logOutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="26c65d77-8cf0-4d79-9717-d324e75bd5fb"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
