import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import Button from './index';

export default {
    parameters: {
        info: { text: '#### Компонент "Кнопка"' }
    },
    title: 'components/Button'
};

export const _default = (): JSX.Element => {
    const props: ComponentProps<typeof Button> = {
        disabled: boolean('disabled', false),
        onClick: action('onClick'),
        title: text('title', 'Title')
    };

    return (
        <Button onClick={console.log} {...props}>
            Кнопка
        </Button>
    );
};
