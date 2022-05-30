import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="page-footer" style={{
            borderTop:'1px solid #ddd',
            height:'60px',
            lineHeight:'60px',
        }}>
            <div className="container">
                <div className="row">
                    <div className="col 16 s12">
                        <span>
                            &copy; Joseph Schartung 2022
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}