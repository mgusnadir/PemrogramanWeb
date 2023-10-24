import React from 'react';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <Navbar/>
        <NavLink to={'/'}>
        <button type="button">Home</button>
        </NavLink>
        <NavLink to={'/about'}>
        <button type="button">About</button>
        </NavLink>
        <NavLink to={'/contact'}>
        <button type="button">Contact</button>
        </NavLink>
    </div>
  )
}

export default Hero
