import React from 'react'
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from '../src/Theme'

addDecorator(
    withInfo({
        inline: true
    })
);
addDecorator(withKnobs);

addParameters({
    options: {
        /**
         * show addon panel as a vertical panel on the right
         * @type {Boolean}
         */
        panelPosition: 'right'
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

addDecorator(StoryFn => (
    <ThemeProvider theme={theme}>
        <StoryFn/>
    </ThemeProvider>
));
