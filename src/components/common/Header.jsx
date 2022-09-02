import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
    const activeStyle = { backgroundColor: "#F15B2A" };

    return (
        <nav className="swapi-header">
            <NavLink to="/" activeStyle={activeStyle} exact>
                <Button variant="outlined">Home</Button>
            </NavLink>

            <NavLink to="/chuck" activeStyle={activeStyle}>
                <Button variant="outlined">Chuck Norris Categories</Button>
            </NavLink>

            <NavLink to="/swapi" activeStyle={activeStyle}>
                <Button variant="outlined">Swapi People</Button>
            </NavLink>

            <NavLink to="/search" activeStyle={activeStyle}>
                <Button variant="outlined">Search</Button>
            </NavLink>
        </nav>
    );
};

export default Header; 