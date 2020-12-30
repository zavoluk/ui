import React, { ComponentProps } from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import Tooltip from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Тултип"' }
    },
    title: 'components/Tooltip'
};

export const _default = (): JSX.Element => {
    const props: ComponentProps<typeof Tooltip> = {
        isOpen: boolean('isOpen', true),
        position: select('position', ['left', 'top', 'right', 'bottom'], 'left')
    };

    return (
        <Tooltip content={<>Контент тултипа</>} {...props}>
            <div
                style={{
                    border: '1px solid',
                    display: 'inline-flex',
                    margin: '3rem',
                    padding: '3rem',
                    transform: 'translate(7rem, 3rem)'
                }}
            >
                Триггер тултипа
            </div>
        </Tooltip>
    );
};
