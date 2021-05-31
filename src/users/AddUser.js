import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const AddUser = () => {
  const container = {
    margin: "100px",
    height: "60vh",

    display: "flex",
    justifyContent: "center",
  };
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { name, phone, email } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("data added  first successfully");
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    console.log("data added successfully");
    history.push("/");
  };
  return (
    <div style={container}>
      <div class='card text-center'>
        <div class='card-header'>ADD USER</div>
        <div class='card-body'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                size='40'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your phone'
                name='phone'
                value={phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-block btn-large btn-info'>
              ADD
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};
export default AddUser;
