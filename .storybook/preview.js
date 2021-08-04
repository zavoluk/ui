import React from 'react'
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from '../src/Theme'

addDecorator(withKnobs);

addParameters({
    options: {
        panelPosition: 'bottom',
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
    layout: 'centered'
});

addDecorator(StoryFn => (
    <ThemeProvider theme={theme}>
        <StoryFn/>
    </ThemeProvider>
));
