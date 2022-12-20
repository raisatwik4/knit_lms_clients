import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { FaBeer, FaRegCalendarMinus, FaRegCalendar,FaAccessibleIcon } from 'react-icons/fa';
import "./sidebar.css";

import Button from 'react-bootstrap/Button';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark ">
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white  ">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <RiHome3Line/>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FaRegCalendarMinus/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FaRegCalendar/>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FaAccessibleIcon/>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <RiHome3Line/>
              Customers
            </a>
          </li>
        </ul>
        <Button variant="danger">Logout</Button>

      </div>

    </div>
   
  );
};

export default Sidebar;
