import React, { ComponentProps, useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import Tooltip, { TooltipPositions } from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Тултип"' }
    },
    title: 'components/Tooltip'
};

export const _default = (): JSX.Element => {
    const props: Omit<ComponentProps<typeof Tooltip>, 'content' | 'children'> = {
        interactive: boolean('interactive', false),
        position: select('position', TooltipPositions, 'right')
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

export const Controlled = (): JSX.Element => {
    const props: Omit<ComponentProps<typeof Tooltip>, 'content' | 'children'> = {
        interactive: boolean('interactive', false),
        position: select('position', TooltipPositions, 'right')
    };

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Tooltip content={<>Контент тултипа</>} {...props} isOpen={isOpen}>
            <div
                style={{
                    border: '1px solid',
                    display: 'inline-flex',
                    margin: '3rem',
                    padding: '3rem',
                    transform: 'translate(7rem, 3rem)'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Контролируемый тултип
            </div>
        </Tooltip>
    );
};
