import React from "react";
import {Link, NavLink} from "react-router-dom";
import './Header.css'
import logo from "../../logo.svg";


const Header = (props) => {
  const rocket = props.rockets.map(el => (
    <li key={el} className="item">
      <Link
        to="/rocket"
        className="item-link"
        onClick={() => {
          props.changeRocket(el)
        }}>{el}</Link>
    </li>
  ));

  return (
    <header className="header">
      <Link to='/'>
        <img
          src={logo}
          alt="Logo Space X"
          className="logo"
        />
      </Link>
      <nav className="main-nav nav">
        <ul className="list">
          {rocket}
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <NavLink
              activeClassName='active'
              exact to="/"
              className="item-link"
              >Home</NavLink>
          </li>
          <li className="item">
            <NavLink
              activeClassName='active'
              to="/calendar"
              className="item-link">Calendar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;