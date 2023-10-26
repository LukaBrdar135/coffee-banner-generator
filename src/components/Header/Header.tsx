import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <h1 className="header__title">Coffee Banner Generator</h1>
        </header>
    );
};

export default Header;
