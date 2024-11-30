import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, SetError] = useState(null);

  const handelChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  };
  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      await signUp(credentials);
      navigate('/')
    } catch (error) {
      SetError(error.response?.data?.message||'Registration Failed')
    }
  };

  return (
    <div className="register">
      <h2>SignUp</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          name="username"
          placeholder="UserName"
          value={credentials.username}
          onChange={handelChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handelChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already Have an Account ? <Link to="/">Login here</Link>
        </p>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;
