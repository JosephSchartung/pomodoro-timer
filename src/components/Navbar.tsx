import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Pomodoro</Link>
                </div>
            </nav>
        </div>

    )
}