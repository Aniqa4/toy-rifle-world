import React from 'react'
import { NavLink } from 'react-router-dom';

function ActiveLink({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? " text-gray-400" : ""}
        >
            {children}
        </NavLink>
    )
}

export default ActiveLink;