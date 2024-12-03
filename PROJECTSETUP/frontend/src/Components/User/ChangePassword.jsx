import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const ChangePassword = () => {
  const { change_password } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [error, SetError] = useState(null);

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await change_password(credentials);
      setCredentials({ ...credentials, [e.target.name]: '' });
      alert("Password Changed Successfully");
    } catch (error) {
      console.log("error:", error);
      SetError(error.response?.data?.message || "Password not Changed");
    }
  };

  return (
    <div className="register">
      <h2>Change Password</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          value={credentials.oldPassword}
          onChange={handelChange}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={credentials.newPassword}
          onChange={handelChange}
        />
        <button type="submit">Change Password</button>
        <p>
          Please <Link to="/">Login here</Link>
        </p>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ChangePassword;
