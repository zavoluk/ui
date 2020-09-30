import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Button from 'components/Button';

import Input from './index';

export default {
    argTypes: {
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'placeholder'),
        title: text('title', 'Title')
    },
    parameters: {
        info: { text: '#### Компонент "Поле ввода"' }
    },
    title: 'components/Input'
};

export const _default = (): JSX.Element => {
    return (
        <>
            <Input />
            <div>
                <br />
                <Button>Кнопка</Button>
            </div>
        </>
    );
};
