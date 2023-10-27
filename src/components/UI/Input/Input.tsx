import React from 'react';
import './Input.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

const Input: React.FC<Props> = ({ className, ...props }) => {
    return <input {...props} className={`input ${className}`} />;
};

export default Input;
