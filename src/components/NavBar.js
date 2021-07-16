import React from "react";
import { NavLink } from "react-router-dom";
// import { Navbar, Container, Nav } from 'react-bootstrap';
function NavBar() {
  return (
    <div className="navbar">
    <ul>

      <li>   <NavLink to='/Home' >Home </NavLink> </li>
      <li>   <NavLink to='/Movies' >Movies </NavLink> </li>
      <li>   <NavLink to='/Actors' >Actors</NavLink> </li>
      <li>   <NavLink to='/Directors' >Directors </NavLink> </li>

    </ul>
    </div>
  );
}

export default NavBar;
