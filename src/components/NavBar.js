import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div className="nav-bar">
            <br></br>
            <div className="aisle_one_link">
                <NavLink style={{ marginRight: "10px" }} to="/aisle_one">
                    Aisle one
                </NavLink>
            </div>
            <div className="aisle_two_link">
                <NavLink style={{ marginRight: "10px" }} to="/aisle_two">
                    Aisle Two
                </NavLink>
            </div>
            <div className="aisle_three_link">
                <NavLink style={{ marginRight: "10px" }} to="/aisle_three">
                    Aisle Three 
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;