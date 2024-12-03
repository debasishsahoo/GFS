import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, SetError] = useState(null);

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(credentials);
      navigate("/product");
    } catch (error) {
      SetError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="register">
      <h2>SignIn</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handelChange}
        />
        <button type="submit">Login</button>
        <p>
          Don`t Have Any Account ? <Link to="/signup">SignUp here</Link>
        </p>
        <br/>
        <p>
         Forgot Password: <Link to="/change-password">Click Here</Link>
        </p>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignIn;
