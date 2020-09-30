import React from 'react';
import { select } from '@storybook/addon-knobs';

import Paper, { indentList } from './index';

export default {
    argTypes: {
        indent: select('indent', indentList, 'xs')
    },
    parameters: {
        info: {
            text: `
        #### Компонент "Paper"
        Представляет из себя стилизованную "обертку"
        `
        }
    },
    title: 'components/Paper'
};

export const _default = (): JSX.Element => {
    return (
        <Paper>
            <div style={{ display: 'inline-flex' }}>Контейнер</div>
        </Paper>
    );
};
