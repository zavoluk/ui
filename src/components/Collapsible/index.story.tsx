import React, { ComponentProps } from 'react';
import { boolean } from '@storybook/addon-knobs';

import Collapsible from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Раскрывающегося/Скрывающего списка"' }
    },
    title: 'components/Collapsible'
};

const commonProps: ComponentProps<typeof Collapsible> = {
    header: <div>Переключатель</div>
};

export const _default = (): JSX.Element => {
    return (
        <Collapsible {...commonProps}>
            {Array(50)
                .fill(undefined)
                .map((_, index) => (
                    <div key={String(index)}>{index}</div>
                ))}
        </Collapsible>
    );
};

export const Controlled = (): JSX.Element => {
    const props: ComponentProps<typeof Collapsible> = {
        ...commonProps,
        open: boolean('open', false)
    };

    return (
        <Collapsible {...props}>
            {Array(50)
                .fill(undefined)
                .map((_, index) => (
                    <div key={String(index)}>{index}</div>
                ))}
        </Collapsible>
    );
};
