import { create } from 'zustand';
import { CoffeeDataType } from '../constants/api';
import { OptionsType } from '../components/StepOne/types';
import { SingleValue } from 'react-select';

type StepStore = {
    currentStep: number;
    hotCoffee: CoffeeDataType[];
    coldCoffee: CoffeeDataType[];
    selectedCoffee: SingleValue<OptionsType> | null;
    setCurrentStep: (step: number) => void;
    setHotCoffee: (hotCoffeeData: CoffeeDataType[]) => void;
    setColdCoffee: (coldCoffeeData: CoffeeDataType[]) => void;
    setSelectedCoffee: (selectedCoffee: SingleValue<OptionsType> | null) => void;
};

export const useStepStore = create<StepStore>((set) => ({
    currentStep: 1,
    hotCoffee: [],
    coldCoffee: [],
    selectedCoffee: null,
    setCurrentStep: (step: number) => {
        set({ currentStep: step });
    },
    setHotCoffee: (hotCoffeeData: CoffeeDataType[]) => {
        set({ hotCoffee: hotCoffeeData });
    },
    setColdCoffee: (coldCoffeeData: CoffeeDataType[]) => {
        set({ coldCoffee: coldCoffeeData });
    },
    setSelectedCoffee: (selectedCoffee: SingleValue<OptionsType> | null) => {
        set({ selectedCoffee });
    },
}));
