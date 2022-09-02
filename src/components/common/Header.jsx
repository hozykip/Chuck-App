import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/chuck" activeStyle={activeStyle}>
                Chuck Categories
            </NavLink>
            {" | "}
            <NavLink to="/swapi" activeStyle={activeStyle}>
                Swapi People
            </NavLink>
            {" | "}
            <NavLink to="/search" activeStyle={activeStyle}>
                Search
            </NavLink>
        </nav>
    );
};

export default Header; 