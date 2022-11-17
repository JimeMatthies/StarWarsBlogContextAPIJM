import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaBars, FaTrashAlt } from 'react-icons/fa';
import SWLogo from "../img/SWLogo.svg";

const Navbar = () => {

    const { store, actions } = useContext(Context);

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
                                Favorites <span className="badge bg-warning text-dark">{store.favorite.length}</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {store.favorite.length > 0 ? (
                                    store.favorite.map((favorite, index) => {
                                        return (
                                            <NavLink to={"/" + store.section + "/" + store.id} className="dropdown-item d-flex justify-content-between" key={index}>
                                                {favorite} <FaTrashAlt className="btn-delete" onClick={() => { actions.deleteFavorite({ index }) }} />
                                            </NavLink>
                                        );
                                    })
                                ) : (
                                    <li><a className="dropdown-item">No Favorites</a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;