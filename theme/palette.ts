export interface IGray {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    base: string;
}

export interface IWhite {
    base: string;
}

export interface IBlack {
    100: string;
    200: string;
    base: string;
}

export interface IRed {
    base: string;
};

export interface IPrimary {
    blue: string;
    red: string;
    yellow: string;
}

export const gray: IGray = {
    100: '#F4F6F9',
    200: '#E9EDF2',
    300: '#D9DEE7',
    400: '#C4C4C4',
    500: '#A3A7B9',
    600: '#667480',
    base: '#606578',
};

export const white: IWhite = {
    base: '#ffffff',
};

export const black: IBlack = {
    100: '#413E52',
    200: '#1C1C1C',
    base: '#181818',
};

export const red: IRed = {
    base: '#DC342D',
};

export const primary: IPrimary = {
    blue: '#327ABE',
    red: '#DC342D',
    yellow: '#F19A38',
};