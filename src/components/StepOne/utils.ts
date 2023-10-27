import { CoffeeDataType } from '../../constants/api';

export const mapOptions = (data: CoffeeDataType[]) => {
    return data.map((item: CoffeeDataType) => {
        return {
            value: item.id.toString(),
            label: item.title,
        };
    });
};
