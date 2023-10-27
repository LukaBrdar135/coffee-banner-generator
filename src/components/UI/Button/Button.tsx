import React from 'react';
import './Button.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: 'primary' | 'text';
    icon?: string;
    iconPosition?: 'before' | 'after';
};

const Button: React.FC<Props> = ({ className, variant, icon, iconPosition = 'after', children, ...props }) => {
    return (
        <button {...props} className={`button ${variant ? `button-${variant}` : ''} ${className ?? ''}`}>
            {icon && iconPosition === 'before' && <img src={icon} />}
            {children}
            {icon && iconPosition === 'after' && <img src={icon} />}
        </button>
    );
};

export default Button;
