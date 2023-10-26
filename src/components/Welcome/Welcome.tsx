import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
    return (
        <div className="welcome">
            <h2 className="welcome__title">Welcome to the ThinkIT Coffee Banner Generator</h2>
            <p className="welcome__description">
                With this tool you are able to quickly craft your ideal coffee banner! Choose your blend and customize every detail for a a
                captivating brew display.
            </p>
            <h3 className="welcome__action">
                Simply complete the three easy steps below, and see your preview update as you go. Then view, copy and paste.
            </h3>
        </div>
    );
};

export default Welcome;
