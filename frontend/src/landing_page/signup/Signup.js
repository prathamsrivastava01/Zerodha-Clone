import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/signup",
        formData
      );

      alert(res.data.message);

      window.location.href = "http://localhost:3001";

    } catch (err) {
      if (err.response && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
