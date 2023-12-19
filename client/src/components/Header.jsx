import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import HeadLogo from "../images/headLogo.png"
import HomeLogo from "../images/home.png";
import MenuLogo from "../images/menu.png";
import AboutLogo from "../images/about.png";

const Header = () => {
    const [searchText , SetSearchText] = useState('');
    const navigate = useNavigate();
    return (
        <div className="main-head">
            <div className="header-list">
                <img src={HeadLogo} alt="" width={130} height={70}/>
                <NavLink
                    to={"/"}
                    className="header-list-item"
                >
                    <img src={HomeLogo} alt="Home" className="header-logo"/>
                </NavLink>
                {/* <NavLink 
                    to={"/list"}
                    className="header-list-item" 
                >
                    <img src={MenuLogo} alt="Menu" className="header-logo"/>
                </NavLink> */}
                <NavLink 
                    to={"/about"}
                    className="header-list-item" 
                >
                    <img src={AboutLogo} alt="About" className="header-logo"/>
                </NavLink>
                <input 
                    type='text' 
                    className="head-search" 
                    placeholder="Search..."
                    onChange={(event) => {SetSearchText(event.target.value)}}
                ></input>
                <button 
                    className="search-button"
                    onClick={() => {
                        if(searchText.length === 0) return;
                        navigate(`/search?text=${searchText}`);
                        window.location.reload();
                    }}
                >Go</button>
            </div>
        </div>
    );
}
export default Header;