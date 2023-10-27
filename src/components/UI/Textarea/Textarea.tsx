import React from 'react';
import './Textarea.css';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
};

const Textarea: React.FC<Props> = ({ className, ...props }) => {
    return (
        <textarea {...props} className={`textarea ${className || ''}`}>
            Textarea
        </textarea>
    );
};

export default Textarea;
