import React, { ComponentProps } from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import Paper, { IndentTypes } from './index';

export default {
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
    const props: ComponentProps<typeof Paper> = {
        boxShadow: boolean('boxShadow', true),
        indent: select<IndentTypes>('indent', IndentTypes, IndentTypes.md)
    };

    return (
        <Paper {...props}>
            <div style={{ display: 'inline-flex' }}>Контейнер</div>
        </Paper>
    );
};
