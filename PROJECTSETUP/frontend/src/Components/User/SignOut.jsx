import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogout=()=>{
        signOut()
        localStorage.removeItem('token');
        navigate('/')
    }



  return (
    <button onClick={handelLogout}>SignOut</button>
  )
}

export default SignOut