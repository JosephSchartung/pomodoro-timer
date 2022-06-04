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
                    <div className="card center-align white">
                        <div className="card-content">
                            <span className="card-title black white-text">
                                About Pomodoro
                            </span>
                            <div className="row">
                                <div className="col">
                                    <h6><b>What</b> is a Pomodoro?</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere praesentium perferendis quia blanditiis modi magnam placeat enim, omnis autem repudiandae? Laudantium, minima voluptatum. Nisi sequi atque esse, eos aspernatur dolor!
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