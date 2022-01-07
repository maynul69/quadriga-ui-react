import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <div style={{ background: "#212529", color: "white", padding: "10px 0" }}>
        <h2>Quadriga</h2>
        <small>copyright reserved</small>
        <br />
        <NavLink
          classname="mx-2 text-decoration-none"
          to="/qa"
          style={{ color: "white", textDecoration:'none' }}
        >
          FAQ
        </NavLink>
      </div>
    );
};

export default Footer;