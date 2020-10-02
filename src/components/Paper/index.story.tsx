import React, { ComponentProps } from 'react';
import { select } from '@storybook/addon-knobs';

import Paper, { indentList } from './index';

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
        indent: select<keyof typeof indentList>('indent', indentList, 'xs')
    };

    return (
        <Paper {...props}>
            <div style={{ display: 'inline-flex' }}>Контейнер</div>
        </Paper>
    );
};
