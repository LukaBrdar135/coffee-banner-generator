import React from 'react';
import './StepThree.css';
import Card from '../UI/Card/Card';
import { useStepStore } from '../../store/useStepStore';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import Button from '../UI/Button/Button';
import arrowBack from '../../assets/arrow-back.svg';
import code from '../../assets/code.svg';
import { useModal } from '../../hooks/useModal';
import GeneratedCodeModal from '../GeneratedCodeModal/GeneratedCodeModal';

const StepThree: React.FC = () => {
    const { currentStep, bannerTitle, bannerDescription, setBannerDescription, setBannerTitle, reset } = useStepStore();
    const { isOpen, openModal, onClose } = useModal();

    return (
        <>
            <Card className={`${currentStep < 3 ? 'is-disabled' : ''}`} title="3. Customize title and description">
                <div className="customize">
                    <div className="customize__form">
                        <div>
                            <label className="customize__form__label" htmlFor="title">
                                Title:
                            </label>
                            <Input type="text" id="title" value={bannerTitle} onChange={(event) => setBannerTitle(event.target.value)} />
                        </div>
                        <div>
                            <label className="customize__form__label" htmlFor="description">
                                Description:
                            </label>
                            <Textarea
                                id="description"
                                value={bannerDescription}
                                onChange={(value) => setBannerDescription(value.target.value)}
                            ></Textarea>
                        </div>
                    </div>
                    <div className="customize__button-holder">
                        <Button type="button" variant="text" icon={arrowBack} onClick={reset}>
                            Start over
                        </Button>
                        <Button type="button" className="right" icon={code} iconPosition="before" disabled={currentStep < 3} onClick={openModal}>
                            View and copy code
                        </Button>
                    </div>
                </div>
            </Card>
            <GeneratedCodeModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default StepThree;
