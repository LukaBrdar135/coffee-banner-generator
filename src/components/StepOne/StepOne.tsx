import React, { useState } from 'react';
import './StepOne.css';
import Card from '../UI/Card/Card';
import { CoffeeType, OptionsType } from './types';
import Select from 'react-select';
import { CoffeeDataType, coldCoffeeApi, hotCoffeeApi } from '../../constants/api';
import Button from '../UI/Button/Button';
import { mapOptions } from './utils';
import { useStepStore } from '../../store/useStepStore';

const StepOne: React.FC = () => {
    const [radioValue, setRadioValue] = useState<CoffeeType>();
    const [options, setOptions] = useState<OptionsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { hotCoffee, setHotCoffee, coldCoffee, setColdCoffee, selectedCoffee, setSelectedCoffee, setCurrentStep } = useStepStore();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as CoffeeType;
        setRadioValue(value);

        if (!hotCoffee.length || !coldCoffee.length) {
            setIsLoading(true);
            console.log('here');

            fetch(value === CoffeeType.HOT ? hotCoffeeApi : coldCoffeeApi)
                .then((res) => res.json())
                .then((data: CoffeeDataType[]) => {
                    console.log(data);
                    if (value === CoffeeType.HOT) {
                        setHotCoffee(data);
                    } else {
                        setColdCoffee(data);
                    }

                    const mappedOptions = mapOptions(data);
                    setOptions(mappedOptions);
                    setSelectedCoffee(mappedOptions[0]);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false));
        } else {
            const mappedOptions = mapOptions(value === CoffeeType.HOT ? hotCoffee : coldCoffee);
            setOptions(mappedOptions);
            setSelectedCoffee(mappedOptions[0]);
        }
    };

    const onClickHanlder = (_: React.MouseEvent) => {
        setCurrentStep(2);
    };

    return (
        <Card title="1. Select your coffee">
            <div className="coffee-type">
                <div className="coffee-type__radio">
                    <label className="coffee-type__label">
                        <input type="radio" value={CoffeeType.HOT} checked={radioValue === CoffeeType.HOT} onChange={onChangeHandler} />
                        Hot cofee
                    </label>
                    <label className="coffee-type__label">
                        <input type="radio" value={CoffeeType.COLD} checked={radioValue === CoffeeType.COLD} onChange={onChangeHandler} />
                        Cold cofee
                    </label>
                </div>
                <Select
                    classNamePrefix="select"
                    isClearable={true}
                    isDisabled={!options.length || isLoading}
                    placeholder={isLoading ? 'Loading...' : 'Select coffee'}
                    name="color"
                    value={selectedCoffee}
                    onChange={(newValue) => setSelectedCoffee(newValue)}
                    options={options}
                />
                <Button type="button" disabled={!selectedCoffee} onClick={onClickHanlder}>
                    Next step
                </Button>
            </div>
        </Card>
    );
};

export default StepOne;
