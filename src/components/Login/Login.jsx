import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

const LoginPage = ({setUserLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      localStorage.setItem('userLoggedIn','true')
      setUserLoggedIn(true); // Set the user as logged in
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <Navbar
        userLoggedin={false}
        onLogout={() => {
        }}
      />
      <div className="container h-screen w-full flex justify-center items-center">
        {/* Your login form layout */}
        <form
          onSubmit={handleLoginSubmit}
          className="bg-zinc-100 p-6 rounded-md"
        >
          <h2 className="text-2xl mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 text-xl w-full rounded-md"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 text-xl w-full rounded-md"
            name="password"
          />
          <button className="bg-purple-800 px-4 py-2 rounded-lg w-full text-lg text-white">
            Login
          </button>

          <Link to="/signup">Signup</Link>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
