import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import HeadLogo from "../images/headLogo.png"
import HomeLogo from "../images/home.png";
import MenuLogo from "../images/menu.png";
import AboutLogo from "../images/about.png";

const Header = () => {
    return (
        <div className="main-head">
            {/* <h1 className="head-title">Hupedia</h1> */}
            <div className="header-list">
                <img src={HeadLogo} alt="" width={130} height={70}/>
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
                <input type='text' className="head-search" placeholder="Search..."></input>
            </div>
        </div>
    );
}
export default Header;