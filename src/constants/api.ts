export const hotCoffeeApi = 'https://api.sampleapis.com/coffee/hot';
export const coldCoffeeApi = 'https://api.sampleapis.com/coffee/iced';

export type CoffeeDataType = {
    id: number;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
};
