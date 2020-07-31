import React from 'react'
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from '../src/components/Theme'

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

function loadStories() {
    const req = require.context('components', true, /story\.(t|j)sx$/);

    return req.keys().map(filename => req(filename));
}

addDecorator(StoryFn => (
    <ThemeProvider theme={theme}>
        <StoryFn/>
    </ThemeProvider>
));

configure(loadStories, module);
