import React from "react";
import './index.css'

interface Props {
    toggleShowAbout: ToggleShowAbout,
    toggleShowSettings: ToggleShowSettings
}

export const Navbar:React.FC<Props> = ({ toggleShowAbout, toggleShowSettings }) => {
    return (
        <div className="Navbar">
            
        </div>
    )
}