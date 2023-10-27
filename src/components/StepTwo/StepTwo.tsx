import React, { useState } from 'react';
import './StepTwo.css';
import { useStepStore } from '../../store/useStepStore';
import Card from '../UI/Card/Card';
import { bannerWidths } from './constants';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const StepTwo: React.FC = () => {
    const [radioValue, setRadioValue] = useState<string>('');
    const [customWidth, setCustomWidth] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState(true);
    const { currentStep, setBannnerWidth, setCurrentStep } = useStepStore();

    const onRadioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
        if (event.target.value !== 'custom') {
            setBannnerWidth(event.target.value);
            setIsDisabled(false);
        } else if (customWidth === '') {
            setIsDisabled(true);
        }
    };

    const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Add field validation
        setCustomWidth(event.target.value);
        setBannnerWidth(event.target.value + 'px');
        if (event.target.value !== '') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const onClickHanlder = (_: React.MouseEvent) => {
        setCurrentStep(3);
    };

    return (
        <Card className={`${currentStep < 2 ? 'is-disabled' : ''}`} title="2. Choose your width">
            <div className="choosing-width">
                <div className="choosing-width__preset">
                    {bannerWidths.map((bannerWidth) => (
                        <label key={bannerWidth} className="choosing-width__preset__label" style={{ width: bannerWidth }}>
                            <input type="radio" value={bannerWidth} checked={radioValue === bannerWidth} onChange={onRadioChangeHandler} />
                            {bannerWidth}
                        </label>
                    ))}
                </div>
                <div className="choosing-width__custom">
                    <label className="choosing-width__custom__label">
                        <input type="radio" value={'custom'} checked={radioValue === 'custom'} onChange={onRadioChangeHandler} />
                        custom
                    </label>
                    <div className="choosing-width__custom__input-holder">
                        <Input
                            className="input-small"
                            type="number"
                            min="1"
                            step="1"
                            onChange={onInputChangeHandler}
                            value={customWidth}
                            disabled={radioValue !== 'custom'}
                        />
                        px
                    </div>
                </div>
                <Button type="button" className="right" disabled={isDisabled} onClick={onClickHanlder}>
                    Next step
                </Button>
            </div>
        </Card>
    );
};

export default StepTwo;
