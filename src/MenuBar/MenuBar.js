import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";


const MenuBar = () => {
  
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="menu-container ">
            <ul className="d-flex  justify-content-center">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/service" className="items">
                  <li>Service</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/achievement" className="items">
                  <li>Achievement</li>
                </Link>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
