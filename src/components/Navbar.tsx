import React from "react";
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    
    return (
        <div style={{
            height:"10vh"
        }}className="navbar-fixed">
            <nav>
                <div className="nav-wrapper red">
                    <Link to="/" className="brand-logo center">Pomodoro</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/start">
                                <i className="material-icons">add_circle</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}