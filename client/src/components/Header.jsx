import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import HomeLogo from "../images/home.png";
import MenuLogo from "../images/menu.png";
import AboutLogo from "../images/about.png";

const Header = () => {
    return (
        <div className="main-head">
            {/* <h1 className="head-title">Hupedia</h1> */}
            <div className="header-list">
                <NavLink 
                    to={"/"}
                    className="header-list-item"
                >
                    <img src={HomeLogo} alt="" srcset="" className="header-logo"/>
                </NavLink>
                <NavLink 
                    to={"/list"}
                    className="header-list-item" 
                >
                    <img src={MenuLogo} alt="" srcset="" className="header-logo"/>
                </NavLink>
                <NavLink 
                    to={"/about"}
                    className="header-list-item" 
                >
                    <img src={AboutLogo} alt="" srcset="" className="header-logo"/>
                </NavLink>
            </div>
        </div>
    );
}
export default Header;