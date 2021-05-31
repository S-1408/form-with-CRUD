import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3002/users`);
    setUser(res.data);
    console.log(res);
  };

  return (
    <div
      style={{
        margin: "150px",
        justifyContent: "center",

        display: "flex",
      }}>
      <ul
        className='list-group'
        style={{ width: "500px", textAlign: "center" }}>
        <h5>UserId:{user.id}</h5>
        <Link className='btn btn-outline-info' to='/'>
          Back
        </Link>
        <br />
        <li className='list-group-item'>{user.name}</li>
        <li className='list-group-item'>{user.phone}</li>
        <li className='list-group-item'>{user.email}</li>
      </ul>
    </div>
  );
};
export default ViewUser;
