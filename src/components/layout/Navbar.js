import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-info'>
        <NavLink className='navbar-brand' to=''>
          HEY!!
        </NavLink>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item '>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/about'>
                About
              </NavLink>
            </li>
          </ul>
          <Link
            className='btn btn-outline-light'
            style={{ marginRight: "100px" }}
            exact
            to='/users/adduser'>
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
