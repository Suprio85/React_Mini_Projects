import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mb-6">
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? 'text-white gap-3'
                : 'text-gray-400 hover:text-white gap-3'

            }
            activeClassName="text-white"
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bg"
            className={({ isActive }) =>
                isActive
                  ? 'text-white gap-3'
                  : 'text-gray-400 hover:text-white gap-3'
  
              }
            activeClassName="text-white"
          >
            Background Changer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/password"
            className={({ isActive }) =>
                isActive
                  ? 'text-white gap-3'
                  : 'text-gray-400 hover:text-white gap-3'
  
              }
            activeClassName="text-white"
          >
            Password Generator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/excuse"
            exact
            className={({ isActive }) =>
              isActive
                ? 'text-white gap-3'
                : 'text-gray-400 hover:text-white gap-3'

            }
            activeClassName="text-white"
          >
            Excuse Maker
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/currency"
            exact
            className={({ isActive }) =>
              isActive
                ? 'text-white gap-3'
                : 'text-gray-400 hover:text-white gap-3'

            }
            activeClassName="text-white"
          >
            Currency Converter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            exact
            className={({ isActive }) =>
              isActive
                ? 'text-white gap-3'
                : 'text-gray-400 hover:text-white gap-3'

            }
            activeClassName="text-white"
          >
            React Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
