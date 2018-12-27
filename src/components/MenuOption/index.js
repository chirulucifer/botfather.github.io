import React from 'react';
import './style.css';
import { NavItem, NavLink } from 'reactstrap';

const MenuOption = ({ children, optionLink }) => {
  return (
    <NavItem>
      <NavLink className="MenuOption text-white" href={optionLink}>
        {children}
      </NavLink>
    </NavItem>
  );
};

export default MenuOption;
