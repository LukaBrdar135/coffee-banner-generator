import React, { useState } from 'react';
import './StepOne.css';
import Card from '../UI/Card/Card';
import { CoffeeType, OptionsType } from './types';
import Select, { SingleValue } from 'react-select';
import { CoffeeDataType, coldCoffeeApi, hotCoffeeApi } from '../../constants/api';
import Button from '../UI/Button/Button';
import { mapOptions } from './utils';
import { useStepStore } from '../../store/useStepStore';

const StepOne: React.FC = () => {
    const [options, setOptions] = useState<OptionsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {
        coffeeType,
        setCoffeeType,
        hotCoffee,
        setHotCoffee,
        coldCoffee,
        setColdCoffee,
        selectedCoffee,
        setSelectedCoffee,
        setCurrentStep,
        setBannerTitle,
        setBannerDescription,
    } = useStepStore();

    const onRadioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as CoffeeType;
        setCoffeeType(value);

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

                    setBannerTitle(data[0].title);
                    setBannerDescription(data[0].description);

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

    const onSelectChange = (newValue: SingleValue<OptionsType>) => {
        if (newValue) {
            setSelectedCoffee(newValue);

            const coffees = coffeeType === CoffeeType.HOT ? hotCoffee : coldCoffee;
            const coffeeItem = coffees.find((item) => item.id === parseInt(newValue.value));
            if (coffeeItem) {
                setBannerTitle(coffeeItem.title);
                setBannerDescription(coffeeItem.description);
            }
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
                        <input type="radio" value={CoffeeType.HOT} checked={coffeeType === CoffeeType.HOT} onChange={onRadioChangeHandler} />
                        Hot cofee
                    </label>
                    <label className="coffee-type__label">
                        <input type="radio" value={CoffeeType.COLD} checked={coffeeType === CoffeeType.COLD} onChange={onRadioChangeHandler} />
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
                    onChange={onSelectChange}
                    options={options}
                />
                <Button type="button" className="right" disabled={!selectedCoffee} onClick={onClickHanlder}>
                    Next step
                </Button>
            </div>
        </Card>
    );
};

export default StepOne;
