import { DefaultTheme } from 'styled-components';

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
            headline6: '1.25rem'
        }
    }
};

export default theme;
