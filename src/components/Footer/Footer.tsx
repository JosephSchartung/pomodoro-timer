import React from 'react';
interface Props {
    color: string,
}
export const Footer: React.FC<Props> = ({ color }) => {
    return (
        <footer className={`page-footer ${color}`}>
            <div className="container">
                <div className="footer-copyright transparent">
                    <div className="container">
                        &copy; Joseph Schartung 2022
                    </div>
                </div>
            </div>
        </footer>
    )
}
