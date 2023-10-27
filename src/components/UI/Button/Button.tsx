import React from 'react';
import './Button.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

const Button: React.FC<Props> = ({ className, children, ...props }) => {
    return (
        <button className={`button ${className ?? ''}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
