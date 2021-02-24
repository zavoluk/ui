import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        animation: {
            transition: string;
        };
        borderRadius: string;
        colors: {
            accent: string;
            error: string;
            info: string;
            primary: string;
            secondary: string;
            success: string;
            warning: string;
        };
        typography: {
            fontSize: {
                headline1: string;
                headline2: string;
                headline3: string;
                headline4: string;
                headline5: string;
                headline6: string;
                paragraph: string;
            };
        };
    }
}

const theme: DefaultTheme = {
    animation: {
        transition: '0.2s'
    },
    borderRadius: '8px',
    colors: {
        accent: '#F72585',
        error: '#ff4722',
        info: '#2196f3',
        primary: '#7209B7',
        secondary: '#607d8b',
        success: '#4caf50',
        warning: '#f78725'
    },
    typography: {
        fontSize: {
            headline1: '6rem',
            headline2: '3.75rem',
            headline3: '3rem',
            headline4: '2.125rem',
            headline5: '1.5rem',
            headline6: '1.25rem',
            paragraph: '1rem'
        }
    }
};

export default theme;
