import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="page-footer transparent">
            <div className="container white-text center-align">
                <div className="row">
                    <div className="col 16 s12">
                        <span>
                            &copy; Joseph Schartung 2022
                        </span>{' '}
                        <a className="white-text" style={{textDecorationLine:'underline'}} href="https://github.com/josephschartung/pomodoro-timer" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}