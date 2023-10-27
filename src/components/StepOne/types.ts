import { CoffeeDataType } from '../../constants/api';

export enum CoffeeType {
    HOT = 'hot',
    COLD = 'cold',
}

export type OptionsType = {
    value: CoffeeDataType;
    label: string;
};
