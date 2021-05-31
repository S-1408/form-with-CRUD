import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");

    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };
  return (
    <table class='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <th scope='row'>{i + 1}</th>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>
              <Link className='btn btn-info' to={`/users/${user.id}`}>
                View
              </Link>
            </td>
            <td>
              <Link
                className='btn btn-primary'
                to={`/users/editUser/${user.id}`}>
                Edit
              </Link>
            </td>

            <td>
              <Link
                className='btn btn-danger'
                onClick={() => deleteUser(user.id)}>
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Home;
