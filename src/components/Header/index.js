/**
 * Header component.
 *
 * @since 0.1.0
 */

import React from "react";
import './header.scss'

import {NavLink} from "react-router-dom";

/**
 * Header component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const Header = () => {
    return (
        <header className="main-header">
            <NavLink to="/">
                <h1>The cats<small>v0.1.0</small></h1>
            </NavLink>
        </header>
    )
}

export default Header