import { useState } from "react";
import { validateEmail } from "../utils/helper";
import PasswordInput from "../component/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("hey from signup");

    // if (!fullName) {
    //   setError("Please enter your full name");
    //   return;
    // }

    // if (!validateEmail(email)) {
    //   setError("Please enter a valid email address");
    //   return;
    // }

    // if (!password) {
    //   setError("Please enter a password");
    //   return;
    // }

    // setError("");

    try {
      const response = await axiosInstance.post("/auth/signup", {
        fullName,
        email,
        password,
      });

      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }
      navigate("/");
    } catch (error) {
        console.log(error);
        
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h1 className="signup-title">Access your thoughts</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            className="input-box"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            className="input-box"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="error-message">{error}</p>}
          <button className="btn-primary" type="submit">
            Create an account
          </button>
        </form>
        <p>
          Already have an account? <Link to="/" className="login-link">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
