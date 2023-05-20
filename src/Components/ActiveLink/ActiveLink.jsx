import React from 'react'
import { NavLink } from 'react-router-dom';

function ActiveLink({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? "underline" : ""}
        >
            {children}
        </NavLink>
    )
}

export default ActiveLink;