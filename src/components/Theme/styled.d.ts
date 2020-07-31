import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
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
            };
        };
    }
}
