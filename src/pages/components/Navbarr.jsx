import React from 'react';
import { NavLink } from 'react-router-dom';





const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to="/"
        className={({isActive})=> isActive ? 'link active' : 'link' }
      >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/projects">Projects</NavLink>

    </nav>
  )
}

export default Navbar