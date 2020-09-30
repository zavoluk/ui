import React, { ComponentProps } from 'react';
import { boolean } from '@storybook/addon-knobs';

import Tooltip from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Тултип"' }
    },
    title: 'components/Tooltip'
};

const props: Omit<ComponentProps<typeof Tooltip>, 'content' | 'children'> = {
    isOpen: boolean('isOpen', true)
};

export const _default = (): JSX.Element => {
    return (
        <Tooltip content={<>Контент тултипа</>} {...props}>
            <div style={{ display: 'inline-flex' }}>Контейнер</div>
        </Tooltip>
    );
};
