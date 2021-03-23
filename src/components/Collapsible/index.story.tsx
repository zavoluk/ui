import React, { ComponentProps, useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

import Collapsible from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Раскрывающегося/Скрывающего списка"' }
    },
    title: 'components/Collapsible'
};

export const _default = (): JSX.Element => {
    const props: ComponentProps<typeof Collapsible> = {
        header: <div>Переключатель</div>,
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

export const Controlled = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const props: ComponentProps<typeof Collapsible> = {
        open: boolean('open', false)
    };

    return (
        <>
            <div onClick={() => setIsOpen(isOpen => !isOpen)}>Открыть</div>
            <Collapsible {...props} open={isOpen}>
                {Array(50)
                    .fill(undefined)
                    .map((_, index) => (
                        <div key={String(index)}>{index}</div>
                    ))}
            </Collapsible>
        </>
    );
};
