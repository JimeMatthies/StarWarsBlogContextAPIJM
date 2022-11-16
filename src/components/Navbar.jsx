import React from "react";
import SWLogo from "../img/SWLogo.svg"
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={SWLogo} alt="Star Wars Blog" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/characters">
                            Characters
                        </NavLink>
                        <NavLink className="nav-link" to="/planets">
                            Planets
                        </NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">1 Favorite</a></li>
                                <li><a className="dropdown-item" href="#">2 Favorite</a></li>
                                <li><a className="dropdown-item" href="#">3 Favorite</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;