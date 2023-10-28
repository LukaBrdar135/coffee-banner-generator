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
    const [showTooltip, setShowTooltip] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const { selectedCoffee, bannerWidth, bannerTitle, bannerDescription, showImage } = useStepStore();

    useEffect(() => {
        setGeneratedCode(getGeneratedCode(selectedCoffee, bannerWidth, bannerTitle, bannerDescription, showImage));
    }, [selectedCoffee, bannerWidth, bannerTitle, bannerDescription, showImage]);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const onCopyClick = (_: React.MouseEvent) => {
        navigator.clipboard.writeText(generatedCode);
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="generated-code-modal__overlay" onClick={handleClickOutside}>
            <div className="generated-code-modal__content" ref={modalRef}>
                <h3 className="generated-code-modal__title">That&apos;s it! All done!</h3>
                <p className="generated-code-modal__description">Simply copy the code below, and paste it into your website!</p>
                <CodeBlock code={generatedCode} />
                <div className="generated-code-modal__button-holder">
                    <Button className="right generated-code-modal__button" onClick={onCopyClick} icon={clipboad} iconPosition="before">
                        <div
                            className="generated-code-modal__button__tooltip"
                            style={{ opacity: showTooltip ? '1' : '0', top: showTooltip ? '-45px' : '0px', zIndex: showTooltip ? '2' : '-1' }}
                        >
                            Copied!
                        </div>
                        Copy to clipboard
                    </Button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default GeneratedCodeModal;
