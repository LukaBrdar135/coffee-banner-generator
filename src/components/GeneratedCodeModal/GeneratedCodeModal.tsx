import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './GeneratedCodeModal.css';
import { useStepStore } from '../../store/useStepStore';
import CodeBlock from '../UI/CodeBlock/CodeBlock';
import Button from '../UI/Button/Button';
import { getGeneratedCode } from './utils';
import clipboad from '../../assets/clipboard.svg';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const GeneratedCodeModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [generatedCode, setGeneratedCode] = useState('');
    const { selectedCoffee, bannerWidth, bannerTitle, bannerDescription } = useStepStore();

    useEffect(() => {
        setGeneratedCode(getGeneratedCode(selectedCoffee, bannerWidth, bannerTitle, bannerDescription));
    }, [selectedCoffee, bannerWidth, bannerTitle, bannerDescription]);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const onCopyClick = (_: React.MouseEvent) => {
        navigator.clipboard.writeText(generatedCode);
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="generated-code-modal__overlay" onClick={handleClickOutside}>
            <div className="generated-code-modal__content" ref={modalRef}>
                <h3 className="generated-code-modal__title">That&apos;s it! All done!</h3>
                <p className="generated-code-modal__description">Simply copy the code below, and paste it into your website!</p>
                <CodeBlock code={generatedCode} />
                <div className="generated-code-modal__button-holder">
                    <Button className="right" onClick={onCopyClick} icon={clipboad} iconPosition="before">
                        Copy to clipboard
                    </Button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default GeneratedCodeModal;
