import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="App">
            <div className="error my-5">
                <h1>404</h1>
                <p className="text">The page is not available</p>
            </div>
        </div>
    );
};

export default NotFound;