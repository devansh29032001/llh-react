import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("Candidate");
  const navigate = useNavigate();

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password, role: userRole };
    localStorage.setItem("userInfo", JSON.stringify(userData));
    alert("Signup successful!");
    navigate("/login"); // Redirect to login
  };
  return (
    <>
      <Navbar userLoggedin={false} onLogout={() => {}} />{" "}
      {/* Assume user is not logged in for signup */}
      <div className="container h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSignupSubmit}
          className="bg-zinc-100 p-6 rounded-md"
        >
          <h2 className="text-2xl mb-4">Signup</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 text-xl w-full rounded-md"
          />
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
          <select
            className="p-2 text-xl w-full rounded-md"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
         name="role" >
            <option value="Candidate">Candidate</option>
            <option value="Organization">Organization</option>
          </select>
          <button className="bg-purple-800 px-4 py-2 rounded-lg w-full text-lg text-white">
            Signup
          </button>
          <Link to='/login'>Login</Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
