import React, { ComponentProps } from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import Tooltip, { TooltipPositions } from './index';

export default {
    parameters: {
        info: {
            text: `
        #### Компонент "Тултип"
        Ввиду простой реализации, у элемента, у которого показывается тултип, не должно быть \`{ overflow: hidden }\` и значение \`position\` должно быть отличным от \`static\`
        `
        }
    },
    title: 'components/Tooltip'
};

const Content = <div>Контент тултипа</div>;

export const _default = (): JSX.Element => {
    const props: Omit<ComponentProps<typeof Tooltip>, 'content' | 'children'> = {
        interactive: boolean('interactive', false),
        position: select('position', TooltipPositions, TooltipPositions.right)
    };

    return (
        <Tooltip content={Content} {...props}>
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
        isOpen: boolean('isOpen', false),
        position: select('position', TooltipPositions, TooltipPositions.right)
    };

    return (
        <Tooltip content={Content} {...props}>
            <div
                style={{
                    border: '1px solid',
                    display: 'inline-flex',
                    margin: '3rem',
                    padding: '3rem',
                    transform: 'translate(7rem, 3rem)'
                }}
            >
                Контролируемый тултип
            </div>
        </Tooltip>
    );
};
