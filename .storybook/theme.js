import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    colorPrimary: '#3dbeb8',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'black',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#d3eaeb',
    barSelectedColor: '#eab6ff',
    barBg: '#3dbeb8',

    // Form colors
    inputBg: 'white',
    inputBorder: 'black',
    inputTextColor: 'black',
    inputBorderRadius: 4
});
