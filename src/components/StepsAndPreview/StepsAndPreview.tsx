import React from 'react';
import './StepsAndPreview.css';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import { BannerPreview } from '../BannerPreview/BannerPreview';
import { useStepStore } from '../../store/useStepStore';

const StepsAndPreview: React.FC = () => {
    const { selectedCoffee } = useStepStore();

    return (
        <div className="steps-and-preview">
            <div className="steps-and-preview__steps">
                <StepOne />
                <StepTwo />
                <StepThree />
            </div>
            <div className="steps-and-preview__preview">{selectedCoffee && <BannerPreview />}</div>
        </div>
    );
};

export default StepsAndPreview;
