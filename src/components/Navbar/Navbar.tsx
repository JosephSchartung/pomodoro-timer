import React from "react";
import './index.css';

import { AiFillGithub, AiFillQuestionCircle } from 'react-icons/ai';
import { FcSettings } from 'react-icons/fc';
import { GiTomato } from 'react-icons/gi';

interface Props {
    toggleShowAbout: ToggleShowAbout,
    toggleShowSettings: ToggleShowSettings,
    color: string,
}

export const Navbar:React.FC<Props> = ({ toggleShowAbout, toggleShowSettings, color }) => {
    return (
        <div 
        style={{
            height:"10vh"
        }} 
        className="navbar-fixed">
            <nav>
                <div className={`nav-wrapper ${color}`}>
                    <span className="brand-logo center">
                        <GiTomato />
                        Pomodoro
                    </span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <button
                                className="btn-floating btn-small transparent"
                                onClick={toggleShowAbout}
                            >
                                <AiFillQuestionCircle />
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn-floating btn-small transparent"
                                onClick={toggleShowSettings}
                            >
                                <FcSettings />
                            </button>
                        </li>
                        <li>
                            <a className="btn-floating btn-small transparent" href="https://github.com/JosephSchartung/pomodoro-timer" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}