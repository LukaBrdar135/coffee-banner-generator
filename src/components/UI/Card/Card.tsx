import React, { ReactNode } from 'react';
import './Card.css';

type Props = {
    title: string;
    children: ReactNode;
    className?: string;
};

const Card: React.FC<Props> = ({ title, children, className }) => {
    return (
        <div className={`card ${className ?? ''}`}>
            <div className="card__title">{title}</div>
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
