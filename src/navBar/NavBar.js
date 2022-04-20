import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavLink
          to="/box"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Box
        </NavLink>
        <NavLink
          to="/coin"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Coin
        </NavLink>
        <NavLink
          exact
          to="/lotto"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Lotto
        </NavLink>
        <NavLink
          to="/lotto/euro"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Euro
        </NavLink>
        <NavLink
          to="/dice"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Dice
        </NavLink>
        <NavLink
          to="/todo"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          Todo
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
