import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const AddUser = () => {
  const container = {
    margin: "100px",
    height: "60vh",

    display: "flex",
    justifyContent: "center",
  };
  let history = useHistory();
  const { id } = useParams();

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
    e.preventDefault();
    await axios.put(`http://localhost:3002/users/${id}`, user);
    history.push("/");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div style={container}>
      <div class='card text-center'>
        <div class='card-header'>EDIT USER</div>
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
              UPDATE
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};
export default AddUser;
