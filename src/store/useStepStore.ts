import { create } from 'zustand';
import { CoffeeType, OptionsType } from '../components/StepOne/types';
import { SingleValue } from 'react-select';
import { CoffeeDataType } from '../constants/api';

type StepStore = {
    currentStep: number;
    coffeeType: CoffeeType | null;
    hotCoffee: CoffeeDataType[];
    coldCoffee: CoffeeDataType[];
    selectedCoffee: SingleValue<OptionsType> | null;
    bannerWidth: string;
    bannerTitle: string;
    bannerDescription: string;
    showImage: boolean;
    setCurrentStep: (step: number) => void;
    setCoffeeType: (coffeeType: CoffeeType | null) => void;
    setHotCoffee: (hotCoffeeData: CoffeeDataType[]) => void;
    setColdCoffee: (coldCoffeeData: CoffeeDataType[]) => void;
    setSelectedCoffee: (selectedCoffee: SingleValue<OptionsType> | null) => void;
    setBannnerWidth: (bannerWidth: string) => void;
    setBannerTitle: (bannerTitle: string) => void;
    setBannerDescription: (bannerDescription: string) => void;
    setShowImage: (showImage: boolean) => void;
    reset: () => void;
};

const defaultState = {
    currentStep: 1,
    coffeeType: null,
    hotCoffee: [],
    coldCoffee: [],
    selectedCoffee: null,
    bannerWidth: '',
    bannerTitle: '',
    bannerDescription: '',
    showImage: true,
};

export const useStepStore = create<StepStore>((set, get) => ({
    ...defaultState,
    setCurrentStep: (step: number) => {
        set({ currentStep: step });
    },
    setCoffeeType: (coffeeType: CoffeeType | null) => {
        set({ coffeeType });
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
    setBannnerWidth: (bannerWidth: string) => {
        set({ bannerWidth });
    },
    setBannerTitle: (bannerTitle: string) => {
        set({ bannerTitle });
    },
    setBannerDescription: (bannerDescription: string) => {
        set({ bannerDescription });
    },
    setShowImage: (showImage: boolean) => {
        set({ showImage });
    },
    reset: () => {
        set({ ...defaultState, hotCoffee: get().hotCoffee, coldCoffee: get().coldCoffee });
    },
}));
