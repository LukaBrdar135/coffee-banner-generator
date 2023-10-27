import React, { useEffect } from 'react';
import './CodeBlock.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import a theme CSS file

type Props = {
    code: string;
};

const CodeBlock: React.FC<Props> = ({ code }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className="code-block">
            <code className="language-html">{code}</code>
        </pre>
    );
};

export default CodeBlock;
