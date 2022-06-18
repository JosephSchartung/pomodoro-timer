import React from 'react';
import './index.css';

interface Props {
    toggleShowAbout: ToggleShowAbout;
};

export const About: React.FC<Props> = ({ toggleShowAbout }) => {
    return (
        <div className="About">
            <div className="container">
                <div className="row">
                    <div className="card center-align transparent">
                        <div className="card-content">
                            <span className="card-title white-text">
                                About Pomodoro
                            </span>
                            <div className="row">
                                <div className="col">
                                    <span className="flow-text white-text">
                                        What is a Pomodoro?
                                    </span>
                                    <p className="white-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi voluptates enim assumenda nam voluptatum dolor reiciendis id fugiat! Iure officiis rem repellat adipisci facere deleniti dolores eligendi saepe minima.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}