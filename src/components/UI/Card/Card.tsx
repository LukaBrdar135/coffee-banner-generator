import React, { ReactNode } from 'react';
import './Card.css';

type Props = {
    title: string;
    children: ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => {
    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
