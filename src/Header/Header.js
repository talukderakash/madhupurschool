import React from "react";
import "./Header.css";
import MenuBar from "../MenuBar/MenuBar";
const Header = () =>{
    return(
        <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <MenuBar></MenuBar>
            <div >
            <img className="logo-img" src="https://e7.pngegg.com/pngimages/280/234/png-clipart-dream-international-schools-education-student-university-school-class-logo.png" alt="" />
              <h1 className="title">
                Madhupur School
              </h1>
              <p className="font-degin">
              Madhupur School is a secondary school in madhupur bazar in Madhupur, Bangladesh. It is one of the oldest schools in Madhupur.
              </p>
           
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};
export default Header;