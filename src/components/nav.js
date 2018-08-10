import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default (props) => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink activeClassName="active selected" className="nav-link" exact to="/">Welcome</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" className="nav-link" to="/our_macarons">Our Macarons</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" className="nav-link" to="/gift_parties">Gifts & Parties</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" className="nav-link" to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}